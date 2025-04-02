import type { Metadata } from "next";
import "./globals.css";
import { openSans, orbitron } from "./fonts";
import { SingInOpenProvider } from "./_providers/sing-in-open-provider";

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
      <body
        className={`${orbitron.variable} ${openSans.variable}  antialiased`}
      >
        <SingInOpenProvider>{children}</SingInOpenProvider>
      </body>
    </html>
  );
}
