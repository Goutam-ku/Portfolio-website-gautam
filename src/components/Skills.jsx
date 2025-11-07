import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

// Infinite Scroll Component
const InfiniteScroll = ({
  items,
  speed = "normal",
  direction = "left",
  className,
}) => {
  useEffect(() => {
    // Add animation to scrollers if user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      // Add `data-animated="true"` for animation
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate each item and add `aria-hidden` to prevent it from being announced by screen readers
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  // Map through the items to render them
  const renderedItems = items.map((item, index) => (
    <li
      key={index}
      className="p-4 flex flex-row gap-3 justify-center items-center font-poppins font-light text-sm md:text-xl  text-white rounded-md shadow-lg"
    >
      <div className="icon text-sm md:text-xl mb-2">{item.icon}</div>
      <span>{item.title}</span>
    </li>
  ));

  return (
    <div
      className={`scroller ${className}`}
      data-speed={speed}
      data-direction={direction}
    >
      <ul className="tag-list scroller__inner cursor-pointer ">
        {renderedItems}
      </ul>
    </div>
  );
};

// Example usage of the component

const items = [
  { title: "HTML", icon: <FaHtml5 /> },
  { title: "CSS", icon: <FaCss3Alt /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "JavaScript", icon: <FaJsSquare /> },
  { title: "React", icon: <FaReact /> },
  { title: "Node.js", icon: <FaNodeJs /> },
  { title: "Express.js", icon: <SiExpress /> },
];

const App = () => {
  return (
    <div className="w-full py-10">
      <InfiniteScroll items={items} speed="normal" direction="left" />
    </div>
  );
};

export default App;
