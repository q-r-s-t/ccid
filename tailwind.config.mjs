/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'xs-': '0.625rem', // 11px (xs보다 작음)
        'sm+': '0.875rem', // 14px (sm와 base 사이)
        'base+': '0.9375rem', // 15px (sm와 base 사이)
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        playwrite: ['Playwrite VN', 'sans-serif'], // Playwrite VN 추가

      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
