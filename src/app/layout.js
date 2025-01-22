import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "QrST LAB",
  description: "DESIGN CONVERGENCE COLLECTIVE QrST",
  keywords:
    "cooperativeblue, 협조적블루, 장은아, 한예종, QRST, 디자인, 컨버전스, karts, design, 디자이너, 심규하, Q shim",
  openGraph: {
    title: "QrST Lab",
    description: "DESIGN CONVERGENCE COLLECTIVE QrST",
    images: [
      {
        url: "/img/og.png",
        width: 600,
        height: 315,
        alt: "DESIGN CONVERGENCE COLLECTIVE QrST",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scrollbar-hide">
      <body
        className="scrollbar-hide antialiased scrollbar-hide"
        style={{ fontFamily: "var(--font-pretendard)" }}
      >
        {children}
      </body>
    </html>
  );
}
