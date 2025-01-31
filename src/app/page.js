"use client";

import { useEffect, useState } from "react";

import Header from "./components/header";
import Nav from "./components/nav";
import Navmobile from "./components/navmobile";

import Cover from "./components/cover";
import Works from "./components/works";
import About from "./components/about";
import Members from "./components/members";
import Contact from "./components/contact";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-[#0f0f13]");
  const [textColor, setTextColor] = useState("text-white"); // 기본 글자색
  const [borderColor, setBorderColor] = useState("border-white"); // 기본 border

  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const worksSection = document.querySelector("#works");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("bg-gray-300"); // Works 섹션 배경색
          setTextColor("text-gray-700"); // Works 섹션 글자색
          setBorderColor("border-gray-700");
        } else {
          setBgColor("bg-[#0f0f13]"); // 기본 배경색
          setTextColor("text-white"); // 기본 글자색
          setBorderColor("border-white");
        }
      },
      { threshold: 0.1 } // Works 섹션 15% 보이면 작동
    );

    if (worksSection) observer.observe(worksSection);

    return () => {
      if (worksSection) observer.unobserve(worksSection);
    };
  }, []);

  const handleIntroClick = () => {
    setIsFading(true); // fade-out 시작
    setTimeout(() => {
      setShowIntro(false); // 완전히 사라진 후 DOM 제거
    }, 1000); // Tailwind duration과 동일하게 설정 (1초)
  };

  return (
    <div className="scrollbar-hide">
      <Header textColor={textColor}/>
      <Nav textColor={textColor} />
      <Navmobile textColor={textColor} />

      {/* showintro comp */}

      <main
        className={`h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${bgColor} ${textColor} ${borderColor}`}
      >
        <section
          id="cover"
          className="w-screen h-[100dvh] snap-start flex items-center justify-center"
        >
          <Cover />
        </section>
        <section
          id="about"
          className="w-screen h-[100dvh] snap-start md:pt-10 md:px-28 xl:px-52 px-6 content-center"
        >
          <About />
        </section>
        <section
          id="works"
          className="w-screen min-h-[100dvh] snap-start md:px-28 xl:px-52 px-6 content-center"
        >
          <Works />
        </section>
        <section
          id="members"
          className="w-screen snap-start md:p-20 xl:p-40 p-6"
        >
          <Members />
        </section>
        <section
          id="contact"
          className="relative w-screen h-screen snap-end md:p-28 xl:p-40 p-6 content-center"
        >
          <Contact />
          <footer className="absolute bottom-0 left-0 w-full h-auto text-center text-xs p-4 md:p-12">
            © 2025 QrST Lab. All rights reserved.
          </footer>
        </section>
      </main>
    </div>
  );
}
