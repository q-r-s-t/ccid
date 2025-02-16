"use client";
import { useEffect, useState } from "react";
import "./triangularPrism.css";

export default function WorksMotion() {
  const [worksInfo, setWorksInfo] = useState([]);

  useEffect(() => {
    const fetchWorksData = async () => {
      try {
        const res = await fetch(
          `${
            process.env.NODE_ENV === "production"
              ? "https://qrstlab.vercel.app"
              : ""
          }/api/sheets`
        );
        const data = await res.json();
        setWorksInfo(data.works); // works 시트 데이터 저장
      } catch (error) {
        console.error("Error fetching works data:", error);
      }
    };

    fetchWorksData();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center pt-20 z-[1000] font-[500]">
      <div className="scene">
        <div className="triangle">
          <div className="triangle-face triangle-face-front leading-none text-[6vw] lg:text-[2vw]">주요 국내 R&D 프로젝트</div>
          <div className="triangle-face triangle-face-left leading-none text-[6vw] lg:text-[2vw]">주요 해외 R&D 프로젝트</div>
          <div className="triangle-face triangle-face-right leading-none text-[6vw] lg:text-[2vw]">주요 논문 및 발표</div>
        </div>
      </div>
    </div>
  );
}
