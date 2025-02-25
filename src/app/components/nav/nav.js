"use client";
import LanguageToggle from "./lang";
import { programme } from "@/fonts/fonts";

export default function Nav({ textColor }) {

  return (
    <div className={`${programme.className} hidden lg:block z-[500]`}>
      
      <ul
        // style={{ color: textColor }}
        className={`${ textColor == "#0f0f13" ? 'text-[#0f0f13]' : ''} z-[500] gap-12 4xl:gap-20 lg:flex font-[300] leading-tight lg:text-[1.2vw] justify-center fixed top-0 pt-2 mx-auto w-screen transition-all duration-300 transform`}
      >
        <LanguageToggle textColor={textColor}/>
        <li className="mx-5">
          <a
            href="#about"
            className="transition-all duration-300 hover:text-gray-500 scroll-smooth"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
                // closeMenu(); // 메뉴 닫기
            }}
          >
            about
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
                // closeMenu(); // 메뉴 닫기
            }}
          >
            works
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
                // closeMenu(); // 메뉴 닫기
            }}
          >
            people
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
                // closeMenu(); // 메뉴 닫기
            }}
          >
            contact
          </a>
        </li>
      </ul>
      
    </div>
  );
}
