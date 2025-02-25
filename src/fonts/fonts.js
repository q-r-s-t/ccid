import localFont from "next/font/local";

export const programme = localFont({
  src: "../Programme-Light.woff",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const pxGrotesk = localFont({
  src: '../fonts/Px-Grotesk-Regular.woff', // 경로 확인 (src 내부에서 접근)
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const pretendardB = localFont({
  src: '../fonts/Pretendard-Bold.subset.woff2', // 경로 확인 (src 내부에서 접근)
  weight: '800',
  style: 'normal',
  display: 'swap',
});