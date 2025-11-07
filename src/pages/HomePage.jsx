import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/Project";

function HomePage() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fadeFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-[#000000] flex flex-col px-10 relative">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ada5a52b_1px,transparent_1px),linear-gradient(to_bottom,#ada5a52b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_15%_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_30%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.div
        className="h-full w-full relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div
          className="fixed left-1/2 right-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center mt-10 cursor-pointer transition-all duration-500 ease-out"
          variants={fadeFromTop}
          whileHover={{
            scale: 1.1, // Slight zoom
            transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
          }}
          whileTap={{
            scale: 0.95, // Slight shrink when clicked
          }}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-cyan-700 via-purple-500 to-red-500 p-[2px]"
            whileHover={{
              background:
                "linear-gradient(to right, #ef4444, #a855f7,  #0e7490)", // Change gradient
              transition: { duration: 0.4 },
            }}
          >
            <div className="inline-flex bg-[#030303] rounded-full z-10 ">
              <Navbar />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          id="Home"
          className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-4 mt-40 md:mt-48 px-4 sm:px-10"
          variants={fadeIn}
        >
          <motion.h1
            className="font-sans lg:text-7xl sm:text-5xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-[#8931b3] whitespace-nowrap drop-shadow-lg z-10 text-center"
            variants={fadeIn}
          >
            HI! THIS IS GOUTAM KUMAR
          </motion.h1>

          <motion.h2
            className="font-joan text-xl lg:text-4xl sm:text-2xl text-center text-white"
            variants={fadeIn}
          >
            A Full Stack Web Developer{" "}
            <span className="hidden md:inline">from India</span>
          </motion.h2>

          <motion.p
            className="md:text-lg text-sm text-center text-white"
            variants={fadeIn}
          >
            UI-UX | Frontend | Backend{" "}
            <span className="hidden md:inline">Engineer</span>
          </motion.p>

          <motion.a
            href="/Goutam_kumar_TCS_Resume.pdf"
            target="_blank"
            download="Goutam_kumar_TCS_Resume.pdf"
            className="cursor-pointer bg-[#0f0f11e9] font-sans mt-4 rounded-xl p-3 text-[#8a8787] whitespace-nowrap transition-all duration-300 ease-in-out shadow-[0_4px_6px_-1px_rgba(88,199,250,1),0_5px_8px_rgba(88,199,250,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(88,199,250,1),0_4px_6px_-2px_rgba(88,199,250,1)] sm:p-4 text-xs sm:text-base"
            whileHover={{ scale: 1.1 }}
            variants={fadeIn}
          >
            Download CV
          </motion.a>

          <motion.div className="md:mt-5" variants={fadeIn}>
            <Skills />
          </motion.div>

          <motion.div
            id="Projects"
            className="w-full max-w-2xl pt-6 pb-8 px-6 md:px-16 mx-auto bg-gradient-to-r from-black/30 via-[#9d58bd51] to-black/40 backdrop-blur-xl shadow-lg rounded-xl"
            variants={fadeIn}
          >
            <h2 className="text-sm md:text-3xl font-bold text-white mb-4 text-center">
              ABOUT ME
            </h2>
            <p className="md:text-md text-sm text-white font-sans text-center">
              Hi, I'm a passionate developer with experience in creating
              intuitive and dynamic web applications.{" "}
              <span className="hidden md:inline">
                I love working with modern web technologies and bringing ideas
                to life.
              </span>
            </p>
          </motion.div>

          <motion.div
            className="w-[80%] max-w-96 mt-10 sm:mt-16 flex justify-center items-center cursor-pointer bg-gradient-to-r from-black/30 via-black to-black/40 backdrop-blur-xl rounded-full shadow-[0_4px_6px_-1px_rgba(88,199,250,1),0_5px_8px_rgba(88,199,250,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(88,199,250,1),0_4px_6px_-2px_rgba(88,199,250,1)] sm:p-4 text-xs sm:text-2xl text-white font-bold py-4"
            whileHover={{
              scale: 1.05, // Slight zoom effect
              boxShadow:
                "0 10px 15px -3px rgba(88,199,250,1), 0 4px 6px -2px rgba(88,199,250,1)", // Enhance hover shadow
              transition: { duration: 0.3, ease: "easeInOut" }, // Smooth transition
            }}
            whileTap={{
              scale: 0.95, // Shrink effect when clicked
            }}
            variants={fadeIn} // Animation variant (optional)
          >
            PROJECTS
          </motion.div>

          <motion.div className="mt-10 mb-5" variants={fadeIn}>
            <ProjectsGrid />
          </motion.div>

          <motion.div className="text-sm mb-5 text-white" variants={fadeIn}>
            Made with ❤️ by Goutam
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HomePage;
