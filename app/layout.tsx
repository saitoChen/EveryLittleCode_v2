/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-12-16 11:11:23
 * @Description:
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

import localFont from "next/font/local";

const LXGW = localFont({
  src: "./font/LXGWWenKaiMono-Bold.woff2",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  title: "EveryLittleCode",
  description: "A Blog created by jeff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${LXGW.className} flex justify-center`}>
        <div className="h-screen max-w-screen-lg w-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
