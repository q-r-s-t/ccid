"use client";
import Image from "next/image";

export default function Header({
  className,
  textColor,
}) {

  return (
    <button
      onClick={() => {
        const coverSection = document.getElementById("cover");
        if (coverSection) {
          coverSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`z-[700] fixed logo-container top-6 left-6 w-[40px] h-[30px] 4xl:w-24 4xl:h-8 lg:left-10 lg:top-4 m:hidden block ${
        className || ""
      }`}
    >
      <Image
        key = {textColor}
        src="/img/cidc_logo.svg"
        alt="CIDC Logo"
        width={80}
        height={60}
        priority
        style={{ objectFit: "contain",  }}
        className={`${textColor === "#0f0f13" ? 'invert' : ''} filter transition-all duration-300 absolute top-0 left-0`}
      />
    </button>
  );
}
