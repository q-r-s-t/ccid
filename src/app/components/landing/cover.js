
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
        const nextDelay = 8 + (charIndex / word.length) * 80;
        setTimeout(typeNextChar, nextDelay);
      } else {
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 380);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  const getGradientColor = (index) => {
    if (index <= 10) return "#fff"; // light green
    else if (index <= 30) return "#888"; // medium green
    else if (index <= 60) return "#000"; // dark green
    
    
    
    return undefined;
  };

  return (
    <div className={`${neuehaas.className} flex flex-col w-full h-full lg:pt-[38dvh] pt-[30vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => {
        const shouldApplyColor = index <= currentWordIndex;
        const color = shouldApplyColor ? getGradientColor(index) : undefined;
        const colorStyle = {
          color || "#000",
          transition: color ? "color 3s ease-in-out" : undefined,
        };

        return (
          <div
            key={index}
            className="text-center lg:text-left relative inline-block w-full h-[20vw] lg:h-[4.5vw] leading-[1.2] text-[7.5vw] lg:text-[3.5vw]"
          > 
            <pre
              className={`${neuehaas.className} lg:hidden whitespace-pre-wrap overflow-hidden relative ${
                index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""
              }`}
              style={colorStyle}
            > 
              {word}
            </pre>
            <p
              className={`hidden lg:block overflow-hidden relative ${
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
