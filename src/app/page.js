"use client";

import { useEffect, useState } from "react";

import Header from "./components/header";
import Nav from "./components/nav";
import Navmobile from "./components/navmobile";

import Cover from "./components/cover";
import Works from "./components/works";
import About from "./components/about";
import Members from "./components/members";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white"); // 기본 글자색
  const [showIntro, setShowIntro] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const worksSection = document.querySelector("#works");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("bg-gray-300"); // Works 섹션 배경색
          setTextColor("text-gray-700"); // Works 섹션 글자색
        } else {
          setBgColor("bg-transparent"); // 기본 배경색
          setTextColor("text-white"); // 기본 글자색
        }
      },
      { threshold: 0.1 } // Works 섹션 10% 보이면 작동
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
      <Header />
      <Nav textColor={textColor} />
      <Navmobile textColor={textColor} />

      {showIntro && (
        <div
          className={`intro-overlay flex items-center justify-center fixed inset-0 bg-black z-[990] transition-opacity duration-1000 ${
            isFading ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={handleIntroClick}
        >
          <div className="fixed top-0 left-0">
            <Header />
          </div>
          <Cover />
        </div>
      )}

      <main
        className={`h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory transition-colors duration-1000 ${bgColor} ${textColor}`}
      >
        <section
          id="about"
          className="w-screen h-[100dvh] snap-start md:pt-20 md:px-28 xl:px-52 px-6 content-center"
        >
          <About />
        </section>
        <section
          id="works"
          className="w-screen h-[100dvh] snap-start md:p-28 xl:p-52 px-6 content-center"
        >
          <Works />
        </section>
        <section
          id="members"
          className="w-screen snap-start md:p-28 xl:p-40 p-6"
        >
          <Members />
        </section>
        <footer className="w-screen h-auto snap-end text-center text-xs p-12">
          © 2025 QrST Lab. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
