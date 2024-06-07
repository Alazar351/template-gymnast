import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import TopScroll from "@/components/TopScroll";

const oswald = Oswald({ subsets: ["latin"], variable: "--oswald" });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gymnast",
  description: "Generated by create next app",
  icons: {
    icon: {
      href: "/assets/dumbbell.png",
      url: "/assets/dumbbell.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} ${oswald.variable} `}>
        <Navbar />
        {children}
        <Footer />
        <TopScroll />
      </body>
    </html>
  );
}
