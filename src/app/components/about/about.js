"use client";
import { useEffect, useState } from "react";
import { useLanguageStore } from "../../store/languageStore";
import { programme, pxGrotesk } from "@/fonts/fonts";

export default function About() {
  const [aboutInfo, setAboutInfo] = useState([]);
  const { lang } = useLanguageStore();

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
        setAboutInfo(data.about); // about 시트 데이터
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className=" lg:flex gap-[4vw] items-start justify-start w-full min-h-[40dvh] py-[6vh] lg:py-[14vh] leading-[1.1] text-[6vw] md:text-[5vw] lg:text-[3.5vw]">
      <h1 className={`${programme.className} text-primaryB mb-4 flex-1 leading-none text-[6vw] mt-[-0.5vh] lg:mt-[-3.5vh]`}>
        Who We Are
      </h1>

      <div className={`${pxGrotesk.className} text-primaryB flex-1`}>
        {aboutInfo.length > 0 ? (
          <pre className={`${pxGrotesk.className} ${lang === 'en' ? 'leading-[1.55] text-[3vw] md:text-[2.85vw] lg:text-[1.15vw]' : 'leading-[1.8] text-[3.1vw] lg:text-[1.1vw]'} whitespace-pre-wrap mb-[4vh]`}>{lang === 'en' ? aboutInfo[0][0] : aboutInfo[0][1]}</pre>
        ) : (
          <p className='leading-[1.55] text-[3vw] md:text-[2.85vw] lg:text-[1.15vw]'>Loading...</p>
        )}
      </div>
    </div>
  );
}