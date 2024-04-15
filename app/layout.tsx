import type { Metadata } from "next";
import cx from "classnames";
import "rc-slider/assets/index.css";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kennedy24",
  description: "Declare your independence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(inter.className)}>{children}</body>
    </html>
  );
}
