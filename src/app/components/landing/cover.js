'use client'
import { programme } from "@/fonts/fonts";
import { useEffect, useState } from 'react';

const AnimatedText = ({ text, className, delay = 0 }) => {
  const [animatedText, setAnimatedText] = useState([]);

  useEffect(() => {
    const chars = text.split('').map((char, index) => (
      <span
        key={index}
        className="opacity-0 translate-y-[-100%] inline-block animate-drop"
        style={{ animationDelay: `${delay + index * 0.05}s` }}
      >
        {char}
      </span>
    ));
    setAnimatedText(chars);
  }, [text]);

  return (
    <div className={`${className} overflow-y-hidden relative w-full`}>
      {animatedText}
    </div>
  );
};

export default function Cover() {
  return (
    <div
      className={`${programme.className} mix-blend-difference text-white z-[-1] fixed leading-[0.9] text-[11.5vw] lg:text-[9vw] flex flex-col justify-center items-center h-full w-full px-6 lg:px-10`}
    >
      <AnimatedText text="DESIGN" className="text-left" delay={0}/>
      <AnimatedText text="CONVERGENCE" className="text-left" delay={0.4}/>
      <AnimatedText text="COLLECTIVE" className="text-right" delay={1.1}/>
      <AnimatedText text="QrST" className="text-right" delay={1.8}/>
    </div>
  );
}
