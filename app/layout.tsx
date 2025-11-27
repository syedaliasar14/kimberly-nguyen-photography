import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Playfair_Display, Inter, DM_Serif_Display, Jost, Allura } from "next/font/google";
import localFont from "next/font/local";
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/disable-draft-mode'

export const metadata: Metadata = {
  title: "Kimberly Nguyen Photography LLC | Connecticut",
  description: "Wedding Photographer for Connecticut, New York and Massachusetts. Clean, beautiful photography for weddings, engagements, couples, and more.",
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

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable} ${dmSerifDisplay.variable} ${jost.variable} ${moontime.variable} ${allura.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
