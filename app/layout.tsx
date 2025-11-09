import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Playfair_Display, Inter, DM_Serif_Display, Jost, Allura } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Kimberly Nguyen Photography Connecticut",
  description: "Capturing love stories with flow, balance, and heart. Wedding photography that celebrates diversity and community with a bright, minimalist aesthetic.",
};

const playfairDisplay = Playfair_Display({ variable: "--playfair-display", subsets: ["latin"] });
const inter = Inter({ variable: "--inter", subsets: ["latin"] });
const dmSerifDisplay = DM_Serif_Display({ variable: "--dm-serif-display", subsets: ["latin"], weight: "400" });
const jost = Jost({ variable: "--jost", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const allura = Allura({ variable: "--allura", subsets: ["latin"], weight: "400" });
const moontime = localFont({
  src: [{
    path: "../public/fonts/MoonTime-Regular.ttf",
    weight: "400",
    style: "normal",
  }],
  variable: "--moontime",
  display: "swap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable} ${dmSerifDisplay.variable} ${jost.variable} ${moontime.variable} ${allura.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
