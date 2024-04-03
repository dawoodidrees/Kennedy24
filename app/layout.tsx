import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PocketWatcher Solana",
  description: "PocketWatcher Solana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body
        className={clsx(
          inter.className,
          "min-h-screen text-white font-inter bg-[#11121c]"
        )}
      >
        {children}
      </body>
    </html>
  );
}
