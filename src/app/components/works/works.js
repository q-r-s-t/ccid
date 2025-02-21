"use client";
import { useEffect, useState } from "react";

export default function Works() {
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
    <div className="text-primaryC pt-[12%] pb-[40%] lg:pt-[8%] lg:pb-[10%] w-full h-full font-[400]">
      {worksInfo.length > 0 ? (
        worksInfo.map((row, i) =>
          i % 2 === 0
            ? row.map((col, j) => (
                <div key={`${i}-${j}`} className="relative">
                  <div
                    key={`${i}-${j}`}
                    className={`relative flex lg:hover:text-[#ff0] text-[3vw] md:text-[2.4vw] lg:text-[1vw] leading-[1.8] ${
                      j === 0 ? "lg:pl-10 lg:h-[7dvh] lg:w-full lg:absolute lg:top-0 lg:left-0 lg:w-[10vw]" : ""
                    }`}
                  >
                    {/* 국내 + 해외 + 논문 */}
                    <div className={`${j === 0 ? 'hidden': ''} flex-[0.35] lg:flex-[0.5] lg:pl-[20%] lg:text-[1.1vw] font-founders lg:flex-[0.085] pl-6 lg:pl-12`}>
                      {worksInfo[i][j]}
                    </div>
                    <span
                      className={`flex-1 pr-6 ${
                        j === 0
                          ? "font-[600] lg:block flex items-end text-[3.3vw] md:text-[2.6vw] lg:text-[1.03vw] pt-[8dvh] lg:pt-[0dvh] pb-[1dvh] lg:pb-[0.7dvh]"
                          : ""
                      }`}
                    >
                      {worksInfo[i + 1]?.[j]}
                    </span>
                  </div>
                </div>
              ))
            : null
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
