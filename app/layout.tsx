import { cn } from "@/lib/utils";
import "./globals.css";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(sans.variable, serif.variable)}>
      <body>{children}</body>
    </html>
  );
}
