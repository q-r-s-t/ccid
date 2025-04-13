import "./globals.css";
// import { Inter } from "next/font/google";
import { pxGrotesk } from "@/fonts/fonts";
import { useEffect } from "react";

useEffect(() => {
  const handleTouchMove = (e) => {
    if (window.innerWidth <= 768 && Math.abs(e.touches[0].clientX) > 0) {
      e.preventDefault();
    }
  };
  document.body.addEventListener('touchmove', handleTouchMove, { passive: false });

  return () => {
    document.body.removeEventListener('touchmove', handleTouchMove);
  };
}, []);

export const metadata = {
  title: "Center for Creative Intelligence Design",
  description: "Shaping the future through insight, innovation and impact",
  keywords: "CCID, creative, intelligence, karts, design, ai, lab, convergence",
  openGraph: {
    title: "Center for Creative Intelligence Design",
    description: "Shaping the future through insight, innovation and impact",
    images: [
      {
        url: "/img/og800400.png",
        width: 800,
        height: 400,
        alt: "CCID",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: "no",
  },
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="ko" className={pxGrotesk.className}>
      <body className={`overflow-x-hidden w-[100%] scrollbar-hide antialiased select-none`}>{children}</body>
    </html>
  );
}
