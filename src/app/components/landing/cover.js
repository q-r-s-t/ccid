"use client";

import { useState, useEffect } from "react";
import { programme } from "@/fonts/fonts";

export default function Cover({ textColor }) {
  const words = ["Creative Intelligence Center", "We analyze the present to prototype the future",];
  const [typedWords, setTypedWords] = useState(words.map(() => ""));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    let charIndex = 0;
    const word = words[currentWordIndex];

    const interval = setInterval(() => {
      setTypedWords((prev) => {
        const newWords = [...prev];
        newWords[currentWordIndex] = word.slice(0, charIndex + 1);
        return newWords;
      });
      setCurrentCharIndex(charIndex);

      charIndex++;

      if (charIndex === word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div
      style={{
        color: textColor,
        background: "linear-gradient(to top, #f0f0ec, #5f00e1 15%)",
        // fontFeatureSettings: '"salt" 1',
      }}
      className={`${programme.className} flex flex-col w-[100%] h-[100%] overflow-hidden lg:pt-[42vh] pt-[37vh] px-6 lg:px-10`}
    >
      {typedWords.map((word, index) => (
        <div
          key={index}
          style={{ borderColor: textColor }}
          className="text-center relative inline-block w-full h-[10.35vw] lg:h-[4.5vw] leading-[1.1] text-[7vw] lg:text-[3.5vw]"
        >
          <span className={`inline-block ${index === currentWordIndex ? "border-r-2" : ""} ${index < 2 ? 'left-0' : 'right-0'}` }>
            {word}
          </span>
        </div>
      ))}
     
    </div>
  );
}
