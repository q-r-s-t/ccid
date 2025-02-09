import "./globals.css";
import { Playwrite_CU, Inter } from "next/font/google";

const playwrite = Playwrite_CU({ subsets: ["latin"], weight: ["100", "200", "300", "400"] });
const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "QrST LAB",
  description: "DESIGN CONVERGENCE COLLECTIVE QrST",
  keywords:
    "cooperativeblue, graphic, web, development, designer, karts, design, 협조적블루, 장은아, 웹, 그래픽, 디자인, 디자이너, 한예종",
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
        className={`${inter.className} scrollbar-hide antialiased`}
       
      >
        {children}
      </body>
    </html>
  );
}
