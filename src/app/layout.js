import "./globals.css";
import { Playwrite_CU, Inter } from "next/font/google";

const playwrite = Playwrite_CU({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="ko" className="scrollbar-hide">
      <body className={`scrollbar-hide antialiased`}>
        {children}
      </body>
    </html>
  );
}
