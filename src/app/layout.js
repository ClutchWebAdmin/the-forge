import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackToTopButton from "./components/BackToTopButton";
import AnimateOnScroll from "./components/AnimateOnScroll";
import { workSans } from "./styles/fonts";
import Header from "./components/Header";
import TheFooter from "./components/TheFooter";

export const metadata = {
  title: "The Forge",
  description: "Coming soon to 285 Liberty Street",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${workSans.className} antialiased`}
      >
        <Header />
        {children}
        
        <BackToTopButton />
        <AnimateOnScroll />
        <TheFooter />
      </body>
      <GoogleAnalytics gaId="G-JDTFC50BZ6" />
      <Analytics />
    </html>
  );
}
