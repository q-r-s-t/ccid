"use client";

import { neuehaas } from "@/fonts/fonts";
import { useState, useEffect } from "react";

export default function Cover() {
  const [mainText, setMainText] = useState(null);
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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
    if (!mainText || currentWordIndex >= mainText.length) {
      setIsTypingComplete(true);
      return;
    }

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
    }, 800);

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
        const isSecondPart = index === 1; // Second part of the text

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
              {isSecondPart && isTypingComplete ? (
                <span>
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="wave-text"
                      style={{
                        animationDelay: `${charIndex * 600}ms`, // Slower timing
                        opacity: 0,
                        display: 'inline-block',
                        width: char === " " ? '0.3em' : 'auto'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="first-part">{word}</span>
              )}
            </pre>
            <p
              className={`${neuehaas.className} tracking-[-1px] hidden lg:block overflow-hidden relative ${
                index === currentWordIndex ? "blinking-cursor" : ""
              }`}
              style={{ ...scaleStyle }}
            >
              {isSecondPart && isTypingComplete ? (
                <span>
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="wave-text"
                      style={{
                        animationDelay: `${charIndex * 600}ms`, // Slower timing
                        opacity: 0,
                        display: 'inline-block',
                        width: char === " " ? '0.3em' : 'auto'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="first-part">{word}</span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
}
