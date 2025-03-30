import { Open_Sans, Orbitron } from "next/font/google";

export const openSans = Open_Sans({
  weight: ["700", "400"],
  variable: "--font-open-sans",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});
