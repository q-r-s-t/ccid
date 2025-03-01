"use client";
import LanguageToggle from "./lang";
import { programme } from "@/fonts/fonts";
import { useState, useRef, useEffect } from "react";

export default function Nav({ sectionOn }) {
  const [boxPosition, setBoxPosition] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const linkRefs = useRef([]);

  const calculatePositionAndWidth = (index) => {
    const linkElement = linkRefs.current[index];
    if (linkElement) {
      const linkWidth = linkElement.offsetWidth;
      const linkOffsetLeft = linkElement.offsetLeft;
      const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const additionalWidth = 1.5 * remToPx;

      return {
        position: linkOffsetLeft - 0.75 * remToPx, // Adjust position by subtracting 0.75rem
        width: linkWidth + additionalWidth,
      };
    }
    return { position: 0, width: 0 }; // Default fallback
  };

  // Set initial position and width based on sectionOn
  useEffect(() => {
    const sections = ["about", "works", "members", "contact"];
    const index = sections.indexOf(sectionOn); // Find the index of the section
    if (index !== -1) {
      const { position, width } = calculatePositionAndWidth(index);
      setBoxPosition(position);
      setBoxWidth(width);
    }
  }, [sectionOn]);

  const handleHover = (e, index) => {
    const { position, width } = calculatePositionAndWidth(index);
    setBoxPosition(position);
    setBoxWidth(width);
  };

  return (
    <div className={`${programme.className} hidden lg:block z-[500]`}>
      <ul className="z-[500] gap-12 4xl:gap-20 lg:flex font-[300] leading-tight lg:text-[1.2vw] justify-center fixed top-0 pt-4 mx-auto w-[100%] transition-all duration-300 transform">
        <LanguageToggle />

        <span
          className="select-none z-[-1] transition-all duration-300 ease-out absolute px-2"
          style={{
            height: "1.6vw",
            width: `${boxWidth}px`,
            left: `${boxPosition}px`,
            border: sectionOn === "cover" ? "2px solid transparent" : "2px solid #0f0f13", // Change border color
          }}
        ></span>
        {[
          { id: "#about", label: "about" },
          { id: "#works", label: "works" },
          { id: "#members", label: "people" },
          { id: "#contact", label: "contact" },
        ].map(({ id, label }, index) => (
          <li key={id} onMouseEnter={(e) => handleHover(e, index)}>
            <a
              href={id}
              ref={(el) => (linkRefs.current[index] = el)}
              className="transition-all mx-3 duration-300"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
