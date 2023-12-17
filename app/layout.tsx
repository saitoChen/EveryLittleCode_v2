import type { Metadata } from "next";
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
      <body className={`${LXGW.className} flex justify-center relative`}>
        <section className="header-bg h-48 bg-primary w-full absolute -z-10 sm:h-64"></section>
        <div className="h-screen max-w-screen-lg w-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
