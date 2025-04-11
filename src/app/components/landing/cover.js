"use client";

import { useState, useEffect } from "react";
import { neuehaas } from "@/fonts/fonts";

export default function Cover() {
  const [mainText, setMainText] = useState(null);
  const [typedWords, setTypedWords] = useState([]);
  const [coloredWords, setColoredWords] = useState([]);
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
        setColoredWords(flatText.map(() => false)); // 초기값 false
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
        // delay color change after full word typed
        setTimeout(() => {
          setColoredWords((prev) => {
            const updated = [...prev];
            updated[currentWordIndex] = true;
            return updated;
          });
        }, 800);

        // move to next word
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 380);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  return (
    <div className={`${neuehaas.className} flex flex-col w-full h-full lg:pt-[38dvh] pt-[30vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => {
        const colorStyle = {
          color: coloredWords[index] ? "#000" : undefined,
          transition: "color 3s ease-in-out",
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
