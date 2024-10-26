import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        header: "0px 4px 8.8px 0px #6D97BA12",
      },
      fontFamily: {
        livvic: "var(--font-livvic)",
        orengano: "var(--font-orengano)",
        libreFranklin: "var(--font-libre-franklin)",
      },
      backgroundImage: {
        banner: "url('/images/banner-background.png')",
        "3dViewHouseModel1": "url('/images/3d-view-house-model1.svg')",
        "3dViewHouseModel2": "url('/images/3d-view-house-model2.svg')",
        "3dViewHouseModel1Desktop":
          "url('/images/3d-view-house-model1-desktop.svg')",
        "3dViewHouseModel2Desktop":
          "url('/images/3d-view-house-model2-desktop.svg')",
        start: "url('/images/start.svg')",
        startDesktop: "url('/images/start-desktop.svg')",
        "start-text": "url('/images/start-text.jpeg')",
        booking: "url('/images/booking.png')",
        bookingDesktop: "url('/images/booking-desktop.png')",
        bannerDesktop: "url('/images/banner-desktop.svg')",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 20px))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
