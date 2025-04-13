
"use client";

import { useState, useEffect } from "react";
import { pxGrotesk } from "@/fonts/fonts";

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
        const flatText = data.main?.flat() || [];
        setMainText(flatText);
        setTypedWords(flatText.map(() => ""));
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

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
        const nextDelay = 18 + (charIndex / word.length) * 88;
        setTimeout(typeNextChar, nextDelay);
      } else {
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 380);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  return (
    <div className={`${pxGrotesk.className} flex flex-col w-full h-full lg:pt-[38dvh] pt-[30vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => {
        const shouldApplyColor = index <= currentWordIndex;
        const colorStyle = shouldApplyColor
          ? {
              color: "#fff",
              transition: "color 3.8s ease-in-out",
            }
          : {};

        return (
          <div
            key={index}
            className="text-center lg:text-left relative inline-block w-full lg:h-[24vw] h-[28vw] lg:h-[3.8vw] leading-[1.3] lg:leading-[1.3] text-[7.5vw] lg:text-[3vw]"
          >
            <pre
              className={`text-black ${pxGrotesk.className} lg:hidden whitespace-pre-wrap overflow-hidden relative ${
                index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""
              }`}
              style={colorStyle}
            >
              {word}
            </pre>
            <p
              className={`text-black hidden lg:block overflow-hidden relative ${
                index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""
              }`}
              style={colorStyle}
            >
              {word}
            </p>
          </div>
        );
      })}
    </div>
  );
}
