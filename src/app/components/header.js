"use client";

import Image from "next/image";

export default function Header({ width = 40, height = 40, className, textColor }) {
  return (
    <button
      onClick={() => {
        const coverSection = document.getElementById("cover");
        if (coverSection) {
          coverSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`z-[700] fixed logo-container top-6 left-6 md:left-10 m:hidden block ${className || ""}`}
    >
      <Image
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={width}
        height={height}
        priority
        style={{ objectFit: "contain" }}
      />
    </button>
  );
}
