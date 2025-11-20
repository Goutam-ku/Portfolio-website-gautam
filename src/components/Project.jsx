import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

function Project({
  title,
  description,
  imageUrl,
  onClick,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation runs only once when it enters the view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className={`w-[18rem] lg:w-[22rem] h-48 lg:h-64 bg-cover bg-center relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out custom-shadow custom-shadow-hover ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        translateY: -5,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-100 ">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm truncate opacity-60 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function ProjectsGrid() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState(null);

  const projects = [
    {
      title: "Anitrack",
      description:
        "Anitrack is a comprehensive anime tracking tool that allows users to manage and track their anime watching progress seamlessly.",

      imageUrl: "/public/Anitrack.logo.png",
      skills: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      live: "https://anitrack-liart.vercel.app/",
      github: "https://github.com/Goutam-ku/anitrack",
    },
    {
      title: "Paralaya Nivarak",
      description:
        "Pralaya Nivarak is a disaster management platform designed to provide real-time information, resources, and support during natural disasters.",
      imageUrl: "/public/pralaya.nivarak.logo.png",
      skills: [
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "VERCEL",
      ],
      live: "https://pralaya-nivarak.vercel.app/",
      github: "https://github.com/Goutam-ku/pralaya-nivarak-revamp",
    },
  ];

  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full px-4">
      {/* Projects Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onClick={() => openDialog(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Blur */}
            <motion.div
              className="absolute inset-0 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Dialog Box */}
            <motion.div
              className="relative bg-gradient-to-r from-neutral-900 via-black to-neutral-900 w-[90%] sm:max-w-md md:max-w-md rounded-3xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <button
                className="absolute top-4 right-5 bg-black/30 w-10 h-10 flex justify-center items-center text-white p-2 rounded-full"
                onClick={closeDialog}
              >
                <RxCross1 />
              </button>

              {/* Image */}
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-48 md:h-64 object-cover rounded-t-3xl"
              />

              {/* Content Section */}
              <div className="relative p-8 flex flex-col justify-end h-full text-gray-200">
                {/* External Link and GitHub Icons */}
                <div className="flex justify-start gap-6 mb-4">
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full text-black cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        translateY: -5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  )}

                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full text-black cursor-pointer"
                      whileHover={{
                        scale: 1.1,
                        translateY: -5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedProject.skills.map(
                    (skill, index) => (
                      <motion.span
                        key={index}
                        className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full cursor-pointer"
                        whileHover={{
                          scale: 1.1,
                          translateY: -5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p>{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsGrid;
