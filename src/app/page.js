"use client";

import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Navmobile from "./components/nav/navmobile";

import Cover from "./components/landing/cover";
import About from "./components/about/about";
import Keywords from "./components/about/keywords";
import Desc from "./components/about/desc";
import Works from "./components/works/works";
import Members from "./components/members";
import Contact from "./components/contact/contact";

export default function Home() {
  const [bgColor, setBgColor] = useState("#f0f0ec");
  const [textColor, setTextColor] = useState("#0f0f13");
  const [borderRadius, setBorderRadius] = useState(9999);
  const [sectionOn, setSectionOn] = useState("cover");
  const [aboutInfo, setAboutInfo] = useState([]);

  // 📦 fetch content
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NODE_ENV === "production"
              ? "https://c-c-i-d.vercel.app"
              : ""
          }/api/sheets`
        );
        const data = await res.json();
        setAboutInfo(data.about);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // 👀 Section detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionOn(entry.target.id);
        }
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 🎨 Works 색상 설정
  useEffect(() => {
    const worksSection = document.querySelector("#works");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("#c1b8fb");
          setTextColor("#5d009c");
        } else {
          setBgColor("#f0f0ec");
          setTextColor("#f0f0ec");
        }
      },
      { threshold: 0.1 }
    );

    if (worksSection) observer.observe(worksSection);
    return () => {
      if (worksSection) observer.unobserve(worksSection);
    };
  }, []);

  // 🟣 Contact 라운드 처리
  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.requestAnimationFrame(() => {
          const ratio = Math.min(entry.intersectionRatio, 0.8);
          const maxRadius = 9999;
          const mappedRadius = Math.round(maxRadius * (1 - ratio / 0.8));
          setBorderRadius(mappedRadius);
        });
      },
      { threshold: Array.from({ length: 9 }, (_, i) => i * 0.1) }
    );

    observer.observe(contactSection);
    return () => observer.unobserve(contactSection);
  }, []);

  // 🌈 시간 기반 그라디언트 배경 애니메이션
  useEffect(() => {
    let hue = 0;
    const interval = setInterval(() => {
      hue = (hue + 1) % 360;
      const bg = `linear-gradient(135deg, hsl(${hue}, 70%, 85%), hsl(${(hue + 60) % 360}, 70%, 85%))`;
      const bgElement = document.getElementById("animated-bg");
      if (bgElement) {
        bgElement.style.backgroundImage = bg;
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[100%] absolute scrollbar-hide bg-white z-[-2] overflow-x-hidden">
      <Header sectionOn={sectionOn} />
      <Nav sectionOn={sectionOn} />
      <Navmobile sectionOn={sectionOn} />

      {/* 🌈 animated gradient background */}
      <div
        id="animated-bg"
        style={{
          transition: "top 0.5s ease-in-out, opacity 3s ease-in-out",
          opacity: sectionOn === "cover" ? "1" : "0",
          top: sectionOn === "cover" ? "0" : "-100%",
        }}
        className="left-0 fixed w-full h-[118dvh] z-[-1]"
      ></div>

      <main
        style={{
          background: bgColor,
          color: textColor,
          borderColor: textColor,
          transition: "background-color 1s ease-in-out",
        }}
        className="scrollbar-hide z-10 h-[100dvh] w-[100%] overflow-y-scroll snap-y snap-mandatory"
      >
        <section
          id="cover"
          className="relative w-[100%] h-[100%] snap-start flex items-center justify-center"
        >
          <Cover textColor={textColor} />
        </section>

        <section
          id="about"
          className="relative w-[100%] min-h-[100dvh] snap-start pt-20 4xl:pt-[5%] px-0 lg:px-0 content-center"
        >
          {/* <About /> */}
          {/* <Keywords /> */}
          <Desc />
        </section>

        <section
          id="works"
          className="transition-all duration-1000 lg:content-center w-full relative min-h-[100dvh] snap-start"
        >
          <Works textColor={textColor} />
        </section>

        <section
          id="members"
          className="w-[100%] min-h-[100dvh] snap-start md:p-28 p-6 lg:px-[12%]"
        >
          <Members />
        </section>

        <section
          id="contact"
          className="relative w-[100%] h-[100dvh] snap-end md:p-28 xl:p-40 p-6 content-center"
        >
          <Contact borderRadius={borderRadius} sectionOn={sectionOn} />
          <footer className="transition duration-500 text-primaryB absolute bottom-0 left-0 w-full h-auto text-center p-4 md:p-8 font-[400] leading-[1.5] text-[2.6vw] md:text-[1.8vw] lg:text-[0.9vw] xl:text-[0.75vw]">
            {aboutInfo?.[0]?.[3] || "© 2025. All rights reserved."}
          </footer>
        </section>
      </main>
    </div>
  );
}
