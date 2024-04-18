import type { Metadata } from "next";
import "rc-slider/assets/index.css";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProvider from "@/providers/session-provider";
import { getServerSession } from "next-auth";
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
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
