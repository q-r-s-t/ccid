import "./globals.css";
// import { Inter } from "next/font/google";
import { pxGrotesk } from "@/fonts/fonts";

export const metadata = {
  title: "Creative Intelligence Design Center",
  description: "We analyze the present to prototype the future",
  keywords: "cidc, creative, karts, design, ai, lab, convergence",
  openGraph: {
    title: "Creative Intelligence Design Center",
    description: "We analyze the present to prototype the future",
    images: [
      {
        url: "/img/og_0305.png",
        width: 600,
        height: 315,
        alt: "CIDC",
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
      <body className={`overflow-x-hidden w-[100%] scrollbar-hide antialiased cursor-help select-none`}>{children}</body>
    </html>
  );
}
