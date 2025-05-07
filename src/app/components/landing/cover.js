"use client";

import { neuehaas } from "@/fonts/fonts";
import { useState, useEffect } from "react";

export default function Cover() {
  const [mainText, setMainText] = useState(null);
  const [typedWords, setTypedWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [startWaveAnim, setStartWaveAnim] = useState(false);
  const [activeWords, setActiveWords] = useState([]);

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
      setTimeout(() => {
        setStartWaveAnim(true);
      }, 1000);
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
        setTimeout(() => setCurrentWordIndex((prev) => prev + 1), 80);
      }
    };

    typeNextChar();
  }, [currentWordIndex, mainText]);

  useEffect(() => {
    if (startWaveAnim && mainText && mainText[1]) {
      setActiveWords([0]);
    }
  }, [startWaveAnim, mainText]);

  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnim(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  const scaleStyle = startAnim ? { 
    scale: 0.88,
    transformOrigin: 'left center',
    transition: "scale 18s ease-out" 
  } : { transformOrigin: 'left center' };

  return (
    <div className={`flex flex-col w-full h-full lg:pt-[38dvh] pt-[28vh] px-6 lg:px-10`}>
      <div className="text-center lg:text-left relative inline-block w-full lg:h-[24vw] h-[26vw] lg:h-[3.8vw] leading-[1.1] lg:leading-[1.3] text-[7.5vw] lg:text-[3vw]">
        <pre
          className={`${neuehaas.className} tracking-[1px] lg:hidden whitespace-pre-wrap overflow-hidden relative ${
            currentWordIndex === 0 ? "blinking-cursor" : ""
          }`}
          style={{ ...scaleStyle }}
        >
          <span className="first-part" style={{ opacity: 1 }}>{typedWords[0]}</span>
        </pre>
        <p
          className={`${neuehaas.className} tracking-[-1px] hidden lg:block overflow-hidden relative ${
            currentWordIndex === 0 ? "blinking-cursor" : ""
          }`}
          style={{ ...scaleStyle }}
        >
          <span className="first-part" style={{ opacity: 1 }}>{typedWords[0]}</span>
        </p>
      </div>

      <div className="text-center lg:text-left relative inline-block w-full lg:h-[24vw] h-[26vw] lg:h-[3.8vw] leading-[1.1] lg:leading-[1.3] text-[7.5vw] lg:text-[3vw]">
        <pre
          className={`${neuehaas.className} tracking-[1px] lg:hidden whitespace-pre-wrap overflow-hidden relative ${
            currentWordIndex === 1 ? "blinking-cursor" : ""
          }`}
          style={{ ...scaleStyle }}
        >
          {startWaveAnim && mainText && mainText[1] ? (
            <span className={`wave-text ${activeWords.includes(0) ? 'active' : ''}`}>
              {typedWords[1]}
            </span>
          ) : (
            <span className="first-part" style={{ opacity: 1 }}>{typedWords[1]}</span>
          )}
        </pre>
        <p
          className={`${neuehaas.className} tracking-[-1px] hidden lg:block overflow-hidden relative ${
            currentWordIndex === 1 ? "blinking-cursor" : ""
          }`}
          style={{ ...scaleStyle }}
        >
          {startWaveAnim && mainText && mainText[1] ? (
            <span className={`wave-text ${activeWords.includes(0) ? 'active' : ''}`}>
              {typedWords[1]}
            </span>
          ) : (
            <span className="first-part" style={{ opacity: 1 }}>{typedWords[1]}</span>
          )}
        </p>
      </div>
    </div>
  );
}
