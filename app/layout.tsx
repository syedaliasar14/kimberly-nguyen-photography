import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity/visual-editing'
import { DisableDraftMode } from '@/components/disable-draft-mode'
import { allura, canela, instrumentSerif, jost, montserrat, moontime } from "@/fonts/utils";

export const metadata: Metadata = {
  title: "Kimberly Nguyen Photography LLC",
  description: "Wedding Photographer for Connecticut, New York, Boston and Destination. Beautiful photography for weddings, engagements, couples, and more.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${jost.variable} ${moontime.variable} ${allura.variable} ${instrumentSerif.variable} ${canela.variable} antialiased`}>
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
