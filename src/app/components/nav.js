"use client";

// import Image from "next/image";
import Header from "./header";

export default function Nav({ textColor }) {

  return (
    <div className="z-[500]">
      <ul
        className={`z-[500] gap-12 4xl:gap-20 hidden lg:flex font-[300] leading-tight lg:text-[1.2vw] justify-center fixed top-0 pt-4 mx-auto w-screen transition-all duration-300 transform ${textColor}`}
      >
        <li className="mx-5">
          <a
            href="#about"
            className="transition-all duration-300 hover:text-gray-500 scroll-smooth"
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
        <li className="mx-5">
          <a
            href="#works"
            className="transition-all duration-300 hover:text-gray-500 scroll-smooth"
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
        <li className="mx-5">
          <a
            href="#members"
            className="transition-all duration-300 hover:text-gray-500 scroll-smooth"
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
        <li className="mx-5">
          <a
            href="#contact"
            className="transition-all duration-300 hover:text-gray-500 scroll-smooth"
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
            className="transition-all duration-300 hover:filter lg:hover:blur-md"
          >
            News
          </Link>
        </li> */}
      </ul>

      <Header />
    </div>
  );
}
