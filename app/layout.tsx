import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Atmosphere from "@/components/Atmosphere";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Gulab Singh Film City | Premium Shooting Location & Resort",
  description:
    "Gulab Singh Film City is a cinematic destination for film shoots, events, and agri-tourism experiences in India.",
  metadataBase: new URL("https://gulabsinghfilmcity.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} text-[#F1FAEE] antialiased`}>
        <Atmosphere />
        <Navbar />
        <main className="relative z-10 space-y-10 px-2 pb-8 pt-3 sm:space-y-12 sm:px-4 sm:pb-10 sm:pt-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
