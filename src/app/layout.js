import { Manrope, Instrument_Serif, DM_Mono } from "next/font/google";
import "./globals.css";
import Scrollreveal from "./Components/Scrollreveal"
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Instrument Serif ships regular + italic only. Never add font-bold to it.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

// If you already have metadata, keep yours.
export const metadata = {
  title: "Muhammad Hamzah | Web Developer",
  description:
    "Portfolio of Muhammad Hamzah, a web developer building with React, Next.js, and Node.js.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body>{children}
          <Scrollreveal/>
      </body>
    </html>
  );
}