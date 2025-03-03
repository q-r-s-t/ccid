"use client";

import { useState } from "react";
import HeaderW from "../header/headerW";
import LanguageToggle from "./lang";
import { programme } from "@/fonts/fonts";

export default function Navmobile({ sectionOn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // 메뉴 토글 열기닫기
  };
  const closeMenu = () => {
    setIsOpen(false); // 메뉴 닫기
  };

  const burgerStyle = `w-5 border-t-2 transition-all duration-300 transform ${
    sectionOn === "cover" ? "border-white" : ""
  }`;

  return (
    <div
      className={`${programme.className} relative z-[700] fixed top-8 right-6`}
    >
      <div onClick={() => setIsOpen(false)}>
        {isOpen && <LanguageToggle textColor="#f0f0ec" />}
      </div>

      <button
        className={`lg:hidden fixed z-[800] top-6 right-6 w-4 h-4 flex flex-col items-end justify-between transition-all duration-300 transform`}
        onClick={toggleMenu}
      >
        <div
          className={`${burgerStyle} origin-top-left ${
            isOpen ? "rotate-45 border-white" : "border-[#0f0f13]"
          } `}
        ></div>
        <div
          className={`${burgerStyle} ${
            isOpen ? "opacity-0" : "border-[#0f0f13]"
          } `}
        ></div>
        <div
          className={`${burgerStyle} origin-bottom-left ${
            isOpen ? "-rotate-45 border-white" : "border-[#0f0f13]"
          } `}
        ></div>
      </button>

      <ul
        className={`lg:hidden text-left font-normal leading-relaxed text-2xl justify-center fixed top-0 left-0 pt-24 p-6 transition-all duration-300 transform 
          transition duration-700 ease-in-out ${
            isOpen
              ? "text-white opacity-100 bg-[rgba(132,116,232,0.5)] backdrop-blur w-full h-full"
              : "hidden opacity-0"
          }`}
      >
        <HeaderW />
        <li>
          <a
            href="#about"
            className="scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
              closeMenu(); // 메뉴 닫기
            }}
          >
            about
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#works")
                .scrollIntoView({ behavior: "smooth" });
              closeMenu(); // 메뉴 닫기
            }}
          >
            works
          </a>
        </li>
        <li>
          <a
            href="#members"
            className="scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#members")
                .scrollIntoView({ behavior: "smooth" });
              closeMenu(); // 메뉴 닫기
            }}
          >
            people
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
              closeMenu(); // 메뉴 닫기
            }}
          >
            contact
          </a>
        </li>
      </ul>
    </div>
  );
}
