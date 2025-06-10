import type { Metadata } from "next/types";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "sonner"

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrackCode",
  description: "An AI-Powered platform for preparing Technical interviews.",
};

export default function RootLayout({
                                        children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern-dots`}>
      {children}

      <Toaster />
      </body>
    </html>
  );
}
