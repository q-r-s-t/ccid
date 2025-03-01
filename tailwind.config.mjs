// import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   drop: "drop 0.3s ease-in-out forwards",
      //   fadeOut: "fadeOut 1s ease-in-out forwards",
      // },
      // keyframes: {
      //   drop: {
      //     "0%": { opacity: "0", transform: "translateY(-100%)" },
      //     "100%": { opacity: "1", transform: "translateY(0)" },
      //   },
      //   fadeOut: {
      //     "0%": { opacity: "1" },
      //     "100%": { opacity: "0" },
      //   },
      // },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryC: 'rgba(93,0,156,1)',
      },
      fontSize: {
        'xs-': '0.625rem', // 11px (xs보다 작음)
        'sm+': '0.875rem', // 14px (sm와 base 사이)
        'base+': '0.9375rem', // 15px (sm와 base 사이)
      },
      fontFamily: {
        founders: ['FoundersGroteskMono', 'monospace'],
        vtfvictorianna: ['VTFvictoriannaThin', 'sans-serif'],
        tinygothic: ['TinyGothic', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
        // playwrite: ['Playwrite VN', 'sans-serif'], // Playwrite VN 추가
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
