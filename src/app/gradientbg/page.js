"use client";

import "./style.css";
import { useEffect } from "react";
import Header from "../components/header";
import Nav from "../components/nav/nav";
import Navmobile from "../components/nav/navmobile";
import Works from "../components/works/works_";

export default function BgPage() {
  useEffect(() => {
    const interBubble = document.querySelector(".interactive");
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    }

    function onMouseMove(event) {
      tgX = event.clientX;
      tgY = event.clientY;
    }

    window.addEventListener("mousemove", onMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="w-[100%] h-screen bg-gray-200 gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        {/* <div className="g3"></div> */}
        {/* <div className="g4"></div> */}
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>

      <Header />
      <Nav />
      <Navmobile />

      <section
        id="works"
        className={`absolute top-0 z-10 w-screen min-h-[100dvh] px-6 lg:px-28 xl:pl-52 xl:pr-44 4xl:px-[12%] content-center `}
      >
        <Works />
      </section>
    </div>
  );
}
