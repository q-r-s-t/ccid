"use client";

import { neuehaas } from "@/fonts/fonts";
import { useState, useEffect } from "react";

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

  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnim(true);
    }, 800); // 3 seconds

    return () => clearTimeout(timeout);
  }, []);
  const scaleStyle = startAnim ? { 
    scale: 0.95,
    transformOrigin: 'left center',
    transition: "scale 11s ease-in-out" 
  } : { transformOrigin: 'left center' };

  return (
    <div className={`flex flex-col w-full h-full lg:pt-[38dvh] pt-[28vh] px-6 lg:px-10`}>
      {typedWords.map((word, index) => {
        const shouldApplyColor = index <= currentWordIndex;
        const [firstPart, secondPart] = word.split('.').filter(Boolean);

        return (
          <div
            key={index}
            className="text-center lg:text-left relative inline-block w-full lg:h-[24vw] h-[26vw] lg:h-[3.8vw] leading-[1.1] lg:leading-[1.3] text-[7.5vw] lg:text-[3vw]"
          >
            <pre
              className={`${neuehaas.className} tracking-[1px] lg:hidden whitespace-pre-wrap overflow-hidden relative ${
                index === currentWordIndex ? "blinking-cursor" : ""
              }`}
              style={{ ...scaleStyle }}
            >
              {firstPart && <span className="first-part">{firstPart}</span>}
              {secondPart && (
                <span>
                  {secondPart.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="wave-text"
                      style={{
                        animationDelay: `${charIndex * 400}ms`,
                        opacity: 0,
                        display: 'inline-block',
                        width: char === " " ? '0.3em' : 'auto'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
            </pre>
            <p
              className={`${neuehaas.className} tracking-[-1px] hidden lg:block overflow-hidden relative ${
                index === currentWordIndex ? "blinking-cursor" : ""
              }`}
              style={{ ...scaleStyle }}
            >
              {firstPart && <span className="first-part">{firstPart}</span>}
              {secondPart && (
                <span>
                  {secondPart.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="wave-text"
                      style={{
                        animationDelay: `${charIndex * 400}ms`,
                        opacity: 0,
                        display: 'inline-block',
                        width: char === " " ? '0.3em' : 'auto'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
