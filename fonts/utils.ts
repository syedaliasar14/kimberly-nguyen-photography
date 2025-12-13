import { Montserrat, Jost, Allura, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";

export const instrumentSerif = Instrument_Serif({ variable: "--instrument-serif", subsets: ["latin"], weight: "400" });
export const montserrat = Montserrat({ variable: "--montserrat", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const jost = Jost({ variable: "--jost", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
export const allura = Allura({ variable: "--allura", subsets: ["latin"], weight: "400" });

export const moontime = localFont({
  src: [{ path: "../fonts/MoonTime-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--moontime",
  display: "swap",
});

export const canela = localFont({
  src: [
    { path: "../fonts/Canela-Thin-Trial.otf", weight: "100", style: "normal" },
    { path: "../fonts/Canela-Light-Trial.otf", weight: "300", style: "normal" },
    { path: "../fonts/Canela-Regular-Trial.otf", weight: "400", style: "normal" },
    { path: "../fonts/Canela-Medium-Trial.otf", weight: "500", style: "normal" },
    { path: "../fonts/Canela-Bold-Trial.otf", weight: "700", style: "normal" },
    { path: "../fonts/Canela-Black-Trial.otf", weight: "900", style: "normal" },
  ],
  variable: "--canela",
  display: "swap",
});