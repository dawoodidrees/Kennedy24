import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import SessionProvider from "@/providers/session-provider";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import Footer from "@/components/common/Layout/Footer";
import Header from "@/components/common/Layout/Header";
import Modal from "@/components/common/Modal";
import { store } from "@/redux/store";
import Wrapper from "@/components/common/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kennedy24",
  description: "Kennedy24",
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
          "min-h-screen text-black font-inter bg-white"
        )}
      >
        <SessionProvider>
          <Wrapper>{children}</Wrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
