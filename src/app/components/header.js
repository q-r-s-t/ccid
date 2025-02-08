"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header({
  className,
  textColor,
}) {
  
  // console.log(textColor)
  const [isInWorksSection, setIsInWorksSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const worksSection = document.querySelector("#works");

      if (worksSection) {
        const rect = worksSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInWorksSection(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => {
        const coverSection = document.getElementById("cover");
        if (coverSection) {
          coverSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`z-[700] fixed logo-container top-6 left-6 w-[40px] h-[30px] 4xl:w-24 4xl:h-8 lg:left-10 m:hidden block ${
        className || ""
      }`}
    >
      <Image
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={80}
        height={60}
        priority
        style={{ objectFit: "contain" }}
        className={`filter transition-all duration-300 absolute top-0 left-0 ${isInWorksSection ? "invert" : ""}`}
      />
       {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 627 462"
        width={width}
        height={height}
        // fill={svgFillColor} // not working
        style={{ fill: svgFillColor}} 
      >
        <defs>
          <style>
          {`.cls-1 { fill: currentColor; stroke-width: 0px; }`}
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1" d="M372.21,462h-93.21V0h93.81l71.19,81.36v308.85l-71.79,71.79ZM309,432h50.79l54.21-54.21V92.64l-54.81-62.64h-50.19v402Z" />
          <rect className="cls-1" x="189" width="30" height="462"/>
          <polygon className="cls-1" points="150 462 71.19 462 0 380.64 0 71.79 71.79 0 150 0 150 30 84.21 30 30 84.21 30 369.36 84.81 432 150 432 150 462"/>
          <polygon className="cls-1" points="627 462 548.19 462 477 380.64 477 71.79 548.79 0 627 0 627 30 561.21 30 507 84.21 507 369.36 561.81 432 627 432 627 462"/>
        </g>
      </svg> */}
    </button>
  );
}
