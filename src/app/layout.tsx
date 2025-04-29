import type { Metadata } from "next";
import {  Amarante, Audiowide, Syncopate } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const amarante = Amarante({
  variable: "--font-amarante",
  subsets: ["latin"],
  weight: "400"
});

const audioWide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
 weight: "400"
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Night Raider",
  description: "This is a Band Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amarante.variable} antialiased flex-col `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
