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

  
  // 가장 긴 items 배열 길이(9)
  const maxItemsLength =
  worksInfo.length > 0
    ? Math.max(...worksInfo.map((work) => work.length - 1))
    : 0;

    // console.log(worksInfo[0][0]);
  
    return (
      <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full z-[1000] font-[400] lg:font-[200]">
        {worksInfo.length < 6 ? (
          <div>Loading...</div>
        ) : (
          Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className={`scene h-[12vw] overflow-hidden ${i === 0 ? 'lg:h-[30dvh]' : 'lg:h-[5dvh]' }`}
            >
              <div className="triangle" style={{ animationDelay: `${(i * 75)}ms` }}>
                {/* front */}
                <div className="flex triangle-face flex triangle-face-front leading-none text-[6vw] lg:text-[1.25vw] lg:leading-[1.3] bg-[#90ff4b] text-[#000]">
                  <div className=" flex-[0.09]">{worksInfo[0][i]}</div>
                  <div className={`flex-1 ${i === 0 ? 'font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[1][i]}</div>
                </div>
                {/* left */}
                <div className="flex triangle-face flex triangle-face-left leading-none text-[6vw] lg:text-[1.25vw] lg:leading-[1.3] bg-[#0f0f13] text-[#90ff4b]">
                  <div className="flex-[0.09]">{worksInfo[2][i]}</div>
                  <div className={`flex-1 ${i === 0 ? 'font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[3][i]}</div>
                </div>
                {/* right */}
                <div className="flex triangle-face flex triangle-face-right leading-none text-[6vw] lg:text-[1.25vw] lg:leading-[1.3] bg-[#8ADCC8] text-[#fff]">
                  <div className="flex-[0.09]">{worksInfo[4][i]}</div>
                  <div className={`flex-1 ${i === 0 ? 'font-[600] flex items-end pb-[3dvh]' : ''}`}>{worksInfo[5][i]}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
    
}
