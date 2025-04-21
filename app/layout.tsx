import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SportsSelector from "./components/SportsSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DreamIQ",
  description: "Fantasy Sports App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <SportsSelector />
          <main className="flex-grow bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
