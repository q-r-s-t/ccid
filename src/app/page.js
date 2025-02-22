"use client";

import { useEffect, useState } from "react";

import Header from "./components/header";
import Nav from "./components/nav";
import Navmobile from "./components/navmobile";

import Cover from "./components/cover";
import Aboutkeywords from "./components/about0215";
// import About from "./components/about";
import Keywords from "./components/keywords";
// import Works from "./components/works/works_";
import Works from "./components/works/works";
import Members from "./components/members";
import Contact from "./components/contact/contact";

export default function Home() {
  const [bgColor, setBgColor] = useState("#f0f0ec");
  const [textColor, setTextColor] = useState("#0f0f13"); // 기본 글자색
  const [angle, setAngle] = useState(25);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [borderRadius, setBorderRadius] = useState(9999); // 초기값: rounded-full


  useEffect(() => {
    const worksSection = document.querySelector("#works");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("#c1b8fb"); // Works 섹션 배경색
          setTextColor("#5d009c"); // Works 섹션 글자색
        } else {
          setBgColor("#f0f0ec"); // 기본 배경
          setTextColor("#0f0f13"); // 기본 글자
        }
      },
      { threshold: 0.1 } // Works 섹션 10% 보이면 작동
    );

    if (worksSection) observer.observe(worksSection);

    return () => {
      if (worksSection) observer.unobserve(worksSection);
    };
  }, []);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");

    if (!contactSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      window.requestAnimationFrame(() => {
        const ratio = Math.min(entry.intersectionRatio, 0.8);
        const maxRadius = 9999; // rounded-full (최대)
        const mappedRadius = Math.round(maxRadius * (1 - ratio / 0.8));

        console.log(`Ratio: ${ratio}, Radius: ${mappedRadius}px`);

        setBorderRadius(mappedRadius); // 상태 업데이트
      });
    }, { threshold: Array.from({ length: 9 }, (_, i) => i * 0.1) });

    observer.observe(contactSection);

    return () => observer.unobserve(contactSection);
  }, []);


  const handleIntroClick = () => {
    setIsFading(true); // fade-out 시작
    setTimeout(() => {
      setShowIntro(false); // 완전히 사라진 후 DOM 제거
    }, 1000); // Tailwind duration과 동일하게 설정 (1초)
  };

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // 마우스 이동 차이 계산
    const deltaX = x - lastPosition.x;
    const deltaY = y - lastPosition.y;

    // 각도 변화율 적용 (적당히 낮은 비율로 천천히 변화)
    const newAngle = angle + (deltaX + deltaY) * 0.2; // 비율을 줄여서 부드럽게

    setAngle(newAngle);
    setLastPosition({ x, y });
  };

  return (
    <div
      className="scrollbar-hide"
      onMouseMove={handleMouseMove}
      // style={{background: `linear-gradient(${angle}deg, #90ff4b 15%, #8adcc7 60%, #d2d5da 90%)`,}}
    >
      <Header textColor={textColor} />
      <Nav textColor={textColor} />
      <Navmobile textColor={textColor} />

      <main
        style={{
          background: bgColor, // linear-gradient 포함해서 그냥 배경으로!
          color: textColor,
          borderColor: textColor,
          transition: "background-color 1s ease-in-out",
        }}
        className={`h-[100dvh] w-screen overflow-y-scroll snap-y snap-mandatory`}
      >
        <section
          id="cover"
          className="w-screen h-[100dvh] snap-start flex items-center justify-center"
        >
          <Cover />
        </section>
        <section
          id="about"
          className="relative w-screen min-h-[100dvh] snap-start pt-20 4xl:pt-[5%] px-6 lg:px-10 content-center"
        >
          <Aboutkeywords />
          <Keywords textColor={textColor}/>
        </section>
        <section
          id="works"
          className={`transition-all duration-1000 w-full relative min-h-[100dvh] snap-start`}
        >
          <Works />
        </section>
        <section
          id="members"
          className="w-screen min-h-[100dvh] snap-start md:p-28 p-6 lg:px-[12%]"
        >
          <Members />
        </section>
        <section
          id="contact"
          className="relative w-screen h-[100dvh] snap-end md:p-28 xl:p-40 p-6 content-center"
        >
          <Contact borderRadius={borderRadius}/>
          <footer className="absolute bottom-0 left-0 w-full h-auto text-center p-4 md:p-8 font-[400] leading-[1.5] text-[2.6vw] md:text-[1.8vw] lg:text-[0.9vw] xl:text-[0.75vw]">
            © 2025 QrST Lab. All rights reserved.
          </footer>
        </section>
      </main>
    </div>
  );
}
