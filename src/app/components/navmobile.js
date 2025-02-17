"use client";

import Header from "./header";
import { useState } from "react";

export default function Navmobile({ textColor }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // 메뉴 토글 열기닫기
  };
  const closeMenu = () => {
    setIsOpen(false); // 메뉴 닫기
  };

  return (
    <div className="z-[700] fixed top-8 right-6">
      <button
        className={`lg:hidden fixed z-[800] top-6 right-6 w-4 h-4 flex flex-col items-end justify-between transition-all duration-300 transform ${
          isOpen ? "h-4" : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-top-left ${
            isOpen ? "rotate-45" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform ${
            isOpen ? "opacity-0" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-bottom-left ${
            isOpen ? "-rotate-45" : ""
          } ${textColor === 'text-gray-700' ? 'border-gray-700' : 'border-white'}`}
        ></div>
      </button>

      <ul
        className={`lg:hidden text-left font-normal leading-normal text-2xl justify-center fixed top-0 left-0 pt-24 p-6 transition-all duration-300 transform 
          transition duration-700 ease-in-out ${
            isOpen
              ? "opacity-100 bg-[rgba(0,0,0,0.5)] backdrop-blur w-full h-full"
              : "hidden opacity-0"
          }`}
      >
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
            About
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
            Works
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
            People
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
        Contact
        </a>
        </li>
        {/* <li>
        <Link
            href="https://www.instagram.com/q.shim/"
            target="_blank" // 외부 링크는 새 창으로 열기
            rel="noopener noreferrer" // 보안을 위한 속성
            onClick={closeMenu} // 메뉴 닫기
          >
            News
          </Link>
        </li> */}
      </ul>


      <Header />
    </div>
  );
}
