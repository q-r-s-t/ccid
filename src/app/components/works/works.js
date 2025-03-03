"use client";
import { useEffect, useState } from "react";
import { useLanguageStore } from "@/app/store/languageStore";
import { pretendardB } from "@/fonts/fonts";
export default function Works({ textColor }) {
  const [worksInfo, setWorksInfo] = useState([]);
  const { lang } = useLanguageStore();
  
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
    <div
      className={`text-primaryB pt-[12%] pb-[80%] lg:pt-[8%] lg:pb-[10%] w-full h-full font-[400]`}
    >
      {worksInfo.length > 0 ? (
        worksInfo.map((row, i) =>
          i % 3 === 0
            ? row.map((col, j) => (
                <div key={`${i}-${j}`} className="relative">
                  <div
                    key={`${i}-${j}`}
                    className={`relative flex lg:hover:text-[#ff0] text-[3vw] md:text-[2.4vw] lg:text-[1vw] leading-[2] ${
                      j === 0
                        ? pretendardB.className +
                          " text-primaryC lg:pl-10 lg:h-[7dvh] lg:absolute lg:top-0 pl-6 lg:left-0 lg:w-[20vw]"
                        : ""
                    }`}
                  >
                    {/* 년도 */}
                    <div
                      className={`${
                        j === 0 ? "hidden" : ""
                      } flex-[0.35] lg:flex-[0.5] lg:pl-[20%] lg:text-[1.1vw] font-founders lg:flex-[0.085] pl-6 lg:pl-12`}
                    >
                      {worksInfo[i][j]}
                    </div>

                    {/* 국내 + 해외 */}
                    <p
                      className={`flex-1 pr-6 ${
                        j === 0
                          ? "text-primaryC lg:block flex items-end text-[3.3vw] md:text-[2.6vw] lg:text-[1.03vw] pt-[8dvh] lg:pt-[0dvh] pb-[1dvh] lg:pb-[0.7dvh]"
                          : ""
                      }`}
                    >
                      {lang === 'en' ? worksInfo[i + 1]?.[j] : worksInfo[i + 2]?.[j]}
                    </p>
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
