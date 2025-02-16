"use client";
import { useEffect, useState } from "react";
import "./triangularPrism.css";

export default function WorksMotion() {
  const [worksInfo, setWorksInfo] = useState([]);

  console.log(worksInfo);
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

  // 가장 긴 items 배열 길이를 구함
  const maxItemsLength =
  worksInfo.length > 0
    ? Math.max(...worksInfo.map((work) => work.length - 1))
    : 0;

  return (
    <div className="flex flex-col items-center w-full h-full pt-20 z-[1000] font-[400]">
      {[...Array(maxItemsLength)].map((_, i) => (
        <div key={`scene-${i}`} className="scene h-[4vw]">
          <div className="triangle" style={{ animationDelay: `${(i * 200)}ms` }}>
            {worksInfo.map((work, index) => (
              <div
                key={`item-${index}-${i}`}
                className={`triangle-face triangle-face-${['front', 'left', 'right'][index]} leading-[1.3] text-[6vw] lg:text-[1.5vw] `}
              >
                {/* i === 0일 때는 제목(work[0]), 나머지는 내용 */}
                {i === 0 ? work[0] : work[i] || ''}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
