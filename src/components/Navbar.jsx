import {
  FaHome,
  FaProjectDiagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Navbar() {
  const icons = [
    { Icon: FaHome, label: "Home", target: "Home" },
    { Icon: FaProjectDiagram, label: "Projects", target: "Projects" },
    {
      Icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/Goutam-ku",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/goutam-kumar-0929a8253/",
    },
    {
      Icon: FaTwitter,
      label: "Twitter",
      link: "https://twitter.com/goutamk91904354?s=21&t=Lqrr6MNAi4pCRwx5NQEesg",
    },
  ];

  // Function to handle scrolling to sections
  const handleNavigation = (target) => {
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="inline-flex h-16 sm:h-20 bg-[#101010] rounded-full items-center px-10 sm:px-20 shadow-lg gap-4">
      <div className="flex gap-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative group h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 transition-transform duration-300 hover:scale-110 active:scale-90 cursor-pointer flex items-center justify-center"
            onClick={() => {
              if (icon.target) {
                handleNavigation(icon.target); // Scroll to section
              } else {
                window.open(icon.link, "_blank"); // Open link in new tab for other icons
              }
            }}
          >
            <icon.Icon
              size="2rem"
              className="text-white/60 sm:text-lg lg:text-xl"
            />
            {/* Tooltip text */}
            <div className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs sm:text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {icon.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
