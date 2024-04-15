import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackToTopButton from "./components/BackToTopButton";

const sofiaSans = Sofia_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "The Forge",
  description: "Coming soon to 285 Liberty Street",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${sofiaSans.className} antialiased`}
      >
        {children}
        <BackToTopButton />
      </body>
      <GoogleAnalytics gaId="G-JDTFC50BZ6" />
      <Analytics />
    </html>
  );
}
