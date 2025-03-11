/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        gothic: ['var(--font-gothic)'],
        bigillaBold: ['var(--font-bigillaBold)'],
        bigilla: ['var(--font-bigilla)'], 
        autography:['var(--font-autography)'],
        carpethen:['var(--font-carpethen)'],
        carpethenRegular: ['var(--font-carpethenRegular)']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize:{
        // header:'clamp(0.875rem,  1.4861vw, 2.875rem);',
        // marquee:'clamp(0.875rem,  0.8861vw, 1.875rem);',
        // sideBar:'clamp(0.875rem,  0.8861vw, 1.875rem);',
        // dropDown:'clamp(0.875rem, -0.3131rem + 1.3201vw, 1.875rem);',
        // heroSection:'clamp(0.875rem, -0.3131rem + 1.3201vw, 1.875rem);',
        // container:'clamp(1.5625rem, -1.7791rem + 3.7129vw, 4.375rem);',
      },
      screens:{
        "3xl": "1750px", // 1080p screens
        "4xl": "2800px", // Full 4K resolution
        
      }
    },
  },
  plugins: [],
};
