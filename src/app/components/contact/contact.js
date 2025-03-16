"use client";
import { useEffect, useState } from "react";
import "./contact.css";

export default function Contact({ borderRadius, sectionOn }) {
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NODE_ENV === "production"
              ? "https://cidc.vercel.app"
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

  // 🔹 원의 색상만 랜덤하게 변경 (배경색 유지)
  useEffect(() => {
    function getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function changeColor1And2() {
      const root = document.documentElement;
      root.style.setProperty("--color1", `${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}`);
      root.style.setProperty("--color2", `${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}`);
    }

    function changeColor3And4() {
      const root = document.documentElement;
      root.style.setProperty("--color3", `${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}`);
      root.style.setProperty("--color4", `${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}, ${getRandomValue(0, 255)}`);
    }

    // color1, color2 변경: 8초 & 13초 간격
    changeColor1And2();
    const interval1 = setInterval(changeColor1And2, 8000);
    const interval2 = setInterval(changeColor1And2, 13000);

    // color3, color4 변경: 처음 3초 pause 후, 8초 & 13초 간격
    setTimeout(() => {
      changeColor3And4();
      const interval3 = setInterval(changeColor3And4, 8000);
      const interval4 = setInterval(changeColor3And4, 13000);

      return () => {
        clearInterval(interval3);
        clearInterval(interval4);
      };
    }, 3000); // 3초 후 실행 시작

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className={`transition-all duration-[1000ms] ease-out absolute top-0 left-0 w-full h-full gradient-bg`}>
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

      <div className="bg-[rgba(164,106,251,0.3)] absolute top-0 left-0 w-full h-full" style={{ mixBlendMode: "darker" }}></div>

      <div className={` ${sectionOn === 'contact' ? 'opacity-0' : 'opacity-100'} transition-opacity delay-[0.5s] duration-[1s] ease-in-out bg-gradient-to-b from-primaryW via-[rgba(93,0,156,0)] via-[rgba(93,0,156,0)] to-[rgba(93,0,156,0)]  absolute top-0 left-0 w-full h-full`}></div>

      <div className="text-primaryB absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center font-[400] leading-[1.8] text-[3.5vw] md:text-[3vw] lg:text-[1.05vw]">
        <p className="leading-snug z-[1]">
          For business inquiries please contact:
        </p>
        <div className="z-[1]">
          <a href={`mailto:${aboutInfo?.[0]?.[2] || ""}`} className="leading-snug pb-1 relative hover:text-primaryB group">
            {aboutInfo?.[0]?.[2] || "Loading..."}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryB transition-all duration-300 ease-in-out group-hover:w-full inline-block"></span>
          </a>
        </div>
      </div>
    </div>
  );
}


// "use client";
// import { useEffect, useState } from "react";
// import "./contact.css";
// export default function Contact({ borderRadius, sectionOn }) {
//   const [aboutInfo, setAboutInfo] = useState([]);

//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await fetch(
//           `${
//             process.env.NODE_ENV === "production"
//               ? "https://cidc.vercel.app"
//               : ""
//           }/api/sheets`
//         );
//         const data = await res.json();
//         setAboutInfo(data.about); // about 시트 데이터
//       } catch (error) {
//         console.error("Error fetching about data:", error);
//       }
//     };

//     fetchAboutData();
//   }, []);

//   useEffect(() => {
//     const interBubble = document.querySelector(".interactive");
//     if (!interBubble) return;
//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     function move() {
//       curX += (tgX - curX) / 10;
//       curY += (tgY - curY) / 10;
//       interBubble.style.transform = `translate(${Math.round(
//         curX
//       )}px, ${Math.round(curY)}px)`;
//       requestAnimationFrame(move);
//     }

//     function onMouseMove(event) {
//       tgX = event.clientX;
//       tgY = event.clientY;
//     }

//     window.addEventListener("mousemove", onMouseMove);
//     move();

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       // style={{ borderRadius: `${borderRadius}px` }}
//       className={`transition-all duration-[1000ms] ease-out absolute top-0 left-0 w-full h-full gradient-bg`}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>
//       <div className="gradients-container">
//         <div className="g1"></div>
//         <div className="g2"></div>
//         <div className="g5"></div>
//         <div className="interactive"></div>
//       </div>

//       {/* purple tone layer */}
//       <div
//         className="bg-[rgba(164,106,251,0.3)] absolute top-0 left-0 w-full h-full"
//         style={{ mixBlendMode: "darker" }}
//       ></div>

//       {/* gradient layer */}
//       <div
//         className={` ${sectionOn === 'contact' ? 'opacity-0' : 'opacity-100'} transition-opacity delay-[0.5s] duration-[1s] ease-in-out bg-gradient-to-b from-primaryW via-[rgba(93,0,156,0)] via-[rgba(93,0,156,0)] to-[rgba(93,0,156,0)]  absolute top-0 left-0 w-full h-full`}
//       ></div>

//       {/* 텍스트 */}
//       <div className="text-primaryB absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center font-[400] leading-[1.8] text-[3.5vw] md:text-[3vw] lg:text-[1.05vw]">
//         <p className="leading-snug z-[1]">
//           For business inquiries please contact:
//         </p>

//         <div className="z-[1]">
//           <a
//             href={`mailto:${aboutInfo?.[0]?.[2] || ""}`}
//             className="leading-snug pb-1 relative hover:text-primaryB group"
//           >
//             {aboutInfo?.[0]?.[2] || "Loading..."}
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primaryB transition-all duration-300 ease-in-out group-hover:w-full inline-block"></span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
