"use client";

import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";

export default function Nav({ textColor }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // 메뉴 토글 열기닫기
  };

  return (
    <div className="z-[700]">
      {/* <div className="logo fixed top-0 left-0 z-50">
        <div 
          onClick={() => {
            document.querySelector("#cover").scrollIntoView({ behavior: "smooth" });
          }}
          className="cursor-pointer"
        >
          <Image
            src="/img/qrst_logo.svg"
            alt="QRST Logo"
            width={70}
            height={50}
            className={`mb-6 invert m-10 ${textColor}`}
          />
        </div>
      </div> */}

      <button
        className={`hidden sm:flex fixed z-[800] top-6 right-10 w-auto h-5 flex-col justify-between transition-all duration-300 transform`}
        onClick={toggleMenu}
      >
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-top-left ${
            isOpen ? "rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-5 border-t-2 transition-all duration-300 transform origin-bottom-left ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></div>
      </button>

      <ul
        className={`hidden font-medium sm:flex justify-center gap-4 fixed top-6 mx-auto w-screen ${textColor} `}
      >
        <li className="mx-3">
          <a
            href="#about"
            className="transition-all duration-300 hover:filter lg:hover:blur-md text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#works"
            className="transition-all duration-300 hover:filter lg:hover:blur-md text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#works")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Works
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#members"
            className="transition-all duration-300 hover:filter lg:hover:blur-md text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#members")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            People
          </a>
        </li>
        <li className="mx-3">
          <a
            href="#contact"
            className="transition-all duration-300 hover:filter lg:hover:blur-md text-xl scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </li>
        {/* <li>
          <Link
            href="https://www.instagram.com/q.shim/"
            className="transition-all duration-300 hover:filter lg:hover:blur-md text-xl"
          >
            News
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
