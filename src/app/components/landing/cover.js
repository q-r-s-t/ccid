"use client";

import { useState, useEffect } from "react";
import { neuehaas } from "@/fonts/fonts";

export default function Cover() {
  const words = ["Creative Intelligence Design Center", "Understanding the present, designing the future."];
  const [typedWords, setTypedWords] = useState(words.map(() => ""));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex >= words.length) return;

    const word = words[currentWordIndex];
    let charIndex = 0;

    const typeNextChar = () => {
      setTypedWords((prev) => {
        const newWords = [...prev];
        newWords[currentWordIndex] = word.slice(0, charIndex + 1);
        return newWords;
      });

      charIndex++;

      if (charIndex < word.length) {
        // 타이핑 속도를 점진적으로 느리게 (처음은 50ms, 후반부는 150ms 이상)
        const nextDelay = 20 + (charIndex / word.length) * 140;
        setTimeout(typeNextChar, nextDelay);
      } else {
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 500);
      }
    };

    typeNextChar();
  }, [currentWordIndex]);

  return (
    <div className={`${neuehaas.className} flex flex-col w-full h-full overflow-hidden lg:pt-[40dvh] pt-[30vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => (
        <div
          key={index}
          className="text-center lg:text-left relative inline-block w-full h-[20vw] lg:h-[4.5vw] leading-[1.1] text-[7.5vw] lg:text-[3.5vw]"
        >
          <span className={`relative ${index === currentWordIndex ? "after:content-['|'] after:animate-blink" : ""}`}>
            {word}
          </span>
        </div>
      ))}
    </div>
  );
}
