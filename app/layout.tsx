import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import "./globals.css";
import Testimonals from "./components/Testimonals";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExtraData from "./components/ExtraData";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fonity",
  description: "Fonity pro's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${fontPoppins.variable} antialiased m-0  bg-black text-[#ffffffe8]`}
      >
        <main className="px-[9%]">
          <Navbar />
          {children}
          <IntroSection />
          <About />
          <ExtraData />
          {/* <Testimonals /> */}
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
