import type { Metadata } from "next";
import "rc-slider/assets/index.css";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "@/providers/session-provider";
import { getServerSession } from "next-auth";
import GlobalContextProvider from "@/context/global-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kennedy24",
  description: "Declare your independence",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
