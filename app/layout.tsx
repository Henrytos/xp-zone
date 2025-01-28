import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["700", "400"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Xp zone",
  description:
    "Nunca foi tão fácil conseguir aquele jogo ou console tão sonhado com a XP Zone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} antialiased`}>{children}</body>
    </html>
  );
}
