import "./globals.css";
import { Playwrite_CU, Inter } from "next/font/google";
import localFont from 'next/font/local';

const inter = Inter({ subsets: ["latin"] });

const pxGrotesk = localFont({
  src: '../fonts/Px-Grotesk-Regular.woff', // 경로 확인 (src 내부에서 접근)
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const metadata = {
  title: "QrST LAB",
  description: "DESIGN CONVERGENCE COLLECTIVE QrST",
  keywords: "qrst, karts, design, ai, lab, convergence",
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
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: 'no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pxGrotesk.className}>
      <body className={`scrollbar-hide antialiased`}>
        {children}
      </body>
    </html>
  );
}
