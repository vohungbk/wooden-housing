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
      screens: {
        "375": "375px",
        "430": "430px",
      },
      boxShadow: {
        header: "0px 4px 8.8px 0px #6D97BA12",
        dropdownMenu: "0px 4px 32.3px 0px #0000001A",
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
        "infinite-scroll-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        ring: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        "bg-change-red": {
          "0%": { backgroundColor: "white" },
          "100%": { backgroundColor: "#D75337" },
        },
        "bg-change-white": {
          "0%": { backgroundColor: "#D75337" },
          "100%": { backgroundColor: "white" },
        },
      },
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 25s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 25s linear infinite",
        ring: "ring 2s infinite",
        "bg-red": "bg-change-red 0.5s forwards",
        "bg-white": "bg-change-white 0.5s forwards",
      },
    },
  },
};
export default config;
