"use client";

import { useState, useEffect } from "react";
import { neuehaas } from "@/fonts/fonts";

export default function Cover() {
  const [mainText, setMainText] = useState(null);
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

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
        const flatText = data.main?.flat() || []; // `?.flat()` 사용하여 안전 처리
        setMainText(flatText);
        setTypedWords(flatText.map(() => "")); // 초기값 설정
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  console.log(mainText);

  useEffect(() => {
    if (!mainText || currentWordIndex >= mainText.length) return;

    const word = mainText[currentWordIndex];
    let charIndex = 0;

    const typeNextChar = () => {
      setTypedWords((prev) => {
        const newWords = [...prev];
        newWords[currentWordIndex] = word.slice(0, charIndex + 1);
        return newWords;
      });

      charIndex++;

      if (charIndex < word.length) {
        const nextDelay = 10 + (charIndex / word.length) * 140;
        setTimeout(typeNextChar, nextDelay);
      } else {
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 500);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  return (
    
    <div className={`${neuehaas.className} flex flex-col w-full h-full lg:pt-[40dvh] pt-[30vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => (
        <div
          key={index}
          className="text-center lg:text-left relative inline-block w-full h-[20vw] lg:h-[4.5vw] leading-[1.1] text-[7.5vw] lg:text-[3.5vw]"
        >
          <pre className={`${neuehaas.className} lg:hidden whitespace-pre-wrap overflow-hidden relative ${index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""}`}>
            {word}
          </pre>
          <p className={`hidden lg:block overflow-hidden relative ${index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""}`}>
            {word}
          </p>
        </div>
      ))}
    </div>
  );
}
