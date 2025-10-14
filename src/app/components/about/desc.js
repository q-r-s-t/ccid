"use client";
import { useEffect, useState } from "react";
import { useLanguageStore } from "../../store/languageStore";
import { pxGrotesk } from "@/fonts/fonts";
import { neuehaas } from "@/fonts/fonts";

function DescItem({ id, title, description, imageUrl }) {
  const textStyle =
    "leading-none text-[6vw] md:text-[5vw] lg:text-[2.4vw]";
  const textStyleKr =
    "leading-[1.3] mt-[-0.3vh] text-[5vw] md:text-[4.5vw] lg:text-[2.2vw]";
  const { lang } = useLanguageStore();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image when component mounts
  useEffect(() => {
    if (typeof imageUrl === "string" && imageUrl.startsWith("http")) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <li className="h-auto bg-gradient-to-t from-[rgba(93,0,156,0.2)] via-[rgba(93,0,156,0)] to-[rgba(93,0,156,0)] lg:flex group overflow-hidden transition-all duration-700 ease-out py-2 lg:py-[2vh] lg:px-[5vw]">
      <h3  
        className={`${lang === 'en' ? textStyle : textStyleKr} ${neuehaas.className} lg:w-[52%] tracking-[-0.03] pt-[0.8em] px-[2.1vh] lg:mr-[1vw] mb-[1vh] lg:mb-[2vh]`}
      >
        {title}
      </h3>
      <div className="w-full lg:w-[48%]">
        {typeof imageUrl === "string" && imageUrl.startsWith("http") && (
          <div className="w-full mb-[1.3vw]">
            {imageLoaded ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover rounded-md transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-[200px] bg-gray-200 rounded-md animate-pulse flex items-center justify-center">
                <span className="text-gray-400">Loading...</span>
              </div>
            )}
          </div>
        )}
        <pre className={`whitespace-pre-wrap ${pxGrotesk.className} lg:pt-[2.3em] pt-[.3em] px-[1.8vh] pr-[3.8vh] pb-[3.8vh] ${lang === 'en' ? 'leading-[1.3] lg:leading-[1.38] text-[2.8vw] md:text-[2.4vw] lg:text-[1vw]' : 'leading-[1.8] text-[3.1vw] lg:text-[1.1vw]'} text-primaryB transition-all duration-700 ml-[4px] w-full`}>
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
              ? ""
              : ""
          }/api/sheets`
        );
        const data = await res.json();
        setAboutInfo(data.desc); // desc 시트 데이터
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <ul className="border-primaryB w-full h-full mt-[1.3vw] px-0 text-primaryB pt-[8%] pb-[18%] flex flex-col">
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
