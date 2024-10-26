import type { Metadata } from "next";
import "react-phone-input-2/lib/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";
import { Lexend_Deca, Livvic, Oregano, Libre_Franklin } from "next/font/google";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend-deca",
});

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-livvic",
});

const orengano = Oregano({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orengano",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "WOODEN HOUSING",
  description: "Our Crafted Wooden house is the future of Modern Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lexendDeca.variable} ${livvic.variable} ${orengano.variable} ${libreFranklin.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
