"use client";
import { useEffect, useState } from "react";
import { useLanguageStore } from "../../store/languageStore";
import { programme } from "@/fonts/fonts";
import { pxGrotesk } from "@/fonts/fonts";

function DescItem({ id, title, description, imageUrl }) {
  const textStyle =
    "leading-none text-[6vw] md:text-[5vw] lg:text-[2.4vw]";
  const textStyleKr =
    "font-[450] leading-[1.3] mt-[-0.3vh] text-[5vw] md:text-[4.5vw] lg:text-[2.2vw]";
  const { lang } = useLanguageStore();

  return (
    <li className="h-auto bg-gradient-to-t from-[rgba(93,0,156,0.2)] via-[rgba(93,0,156,0)] to-[rgba(93,0,156,0)] lg:flex group overflow-hidden transition-all duration-700 ease-out py-2 lg:py-[2vh] lg:px-[5vw]">
      <h3  
        className={`${lang === 'en' ? textStyle : textStyleKr} ${pxGrotesk.className} transition-all duration-700 w-full lg:w-[52%] tracking-[0.03] pt-[0.8em] px-[8px] lg:px-[1.3em] lg:pr-[1vw] mb-[2vh]`}
      >
        {title}
      </h3>
      <div className="w-full lg:w-[48%]">
        {typeof imageUrl === "string" && imageUrl.startsWith("http") && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover rounded-md mb-[1.8vw]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        )}
        <pre className={`whitespace-pre-wrap ${pxGrotesk.className} lg:pt-[2em] pt-[.3em] px-[8px] lg:px-[1.3em] pb-[3.8vh] ${lang === 'en' ? 'leading-[1.3] lg:leading-[1.38] text-[3vw] md:text-[2.85vw] lg:text-[1.15vw]' : 'leading-[1.8] text-[3.1vw] lg:text-[1.1vw]'} text-primaryB transition-all duration-700 ml-[4px] w-full`}>
          {description}
        </pre>
      </div>
    </li>
  );
}

export default function Desc() {
  const [aboutInfo, setAboutInfo] = useState([]);
  const { lang } = useLanguageStore();

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
        setAboutInfo(data.desc); // desc 시트 데이터
        console.log("desc\n" + data.desc);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <ul className="border-primaryB w-full h-full mt-[1vw] px-[4vw] lg:px-0 text-primaryB pt-[8%] pb-[18%] flex flex-col">
      {aboutInfo.map((item, i) => (
        <DescItem
          key={i}
          id={String(i + 1).padStart(2, "0")}
          title={lang === 'en' ? item[0] : item[2]}
          description={lang === 'en' ? item[1] : item[3]}
          imageUrl={item[4]}
        />
      ))}
    </ul>
  );
}
