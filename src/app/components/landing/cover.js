"use client";

import { neuehaas } from "@/fonts/fonts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Cover() {
  const [mainText, setMainText] = useState(null);
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

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
        setTimeout(() => {
          if (currentWordIndex + 1 >= mainText.length) {
            setIsTypingFinished(true);
          } else {
            setCurrentWordIndex((prev) => prev + 1);
          }
        }, 380);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  return (
    <div className={`${neuehaas.className} flex flex-col w-full h-full lg:pt-[38dvh] pt-[28vh] px-6 lg:px-10`}>
      {typedWords.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className="text-center lg:text-left relative inline-block w-full lg:h-[24vw] h-[26vw] lg:h-[3.8vw] leading-[1.1] lg:leading-[1.3] text-[7.5vw] lg:text-[3vw]"
        >
          <div className="flex flex-wrap justify-center lg:justify-start overflow-hidden">
            {Array.from(word).map((char, charIndex) => {
              const isFixedColor =
                "cciD.".includes(char) || (char >= "A" && char <= "Z") || char === ".";

              return (
                <motion.span
                  key={charIndex}
                  className={`${neuehaas.className} ${
                    isFixedColor ? "text-white" : ""
                  }`}
                  animate={
                    !isFixedColor && isTypingFinished
                      ? {
                          color: [
                            "#ffffff", // start white
                            "#a175ff", // purple
                            "#ffffff", // back to white
                          ],
                        }
                      : {}
                  }
                  transition={
                    !isFixedColor && isTypingFinished
                      ? {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 6,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                  style={{
                    whiteSpace: "pre",
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
