"use client";
import { useEffect} from "react";
import "./contact.css"
export default function Contact({ className = '' }) {
  const email = "qrstlab@gmail.com";

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
    <div className={`${className} transition-all duration-[1000ms] ease-out absolute top-0 left-0 w-full h-full bg-gray-200 gradient-bg`}>
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
      <div className="g5"></div>
      <div className="interactive"></div>
    </div>

    <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center font-[400] leading-[1.8] text-[3.5vw] md:text-[3vw] lg:text-[1.05vw]">
      <p className="leading-snug">For business inquiries please contact:</p>

      <div>
        <a
          href={`mailto:${email}`}
          className="leading-snug pb-1 relative hover:text-white group"
        >
          {email}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full inline-block"></span>
        </a>
      </div>
    </div>
  </div>


    
  );
}
