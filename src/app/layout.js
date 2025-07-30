import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import BackToTopButton from "./components/BackToTopButton";
import AnimateOnScroll from "./components/AnimateOnScroll";
import { lexend } from "./styles/fonts";
import Header from "./components/Header";
import TheFooter from "./components/TheFooter";
import Script from "next/script";

export const metadata = {
  title: "The Forge",
  description: "Coming soon to 285 Liberty Street",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Pixel Loader Script */}
        <Script
          id="sa-dynamic-optimization"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var script = document.createElement("script");
              script.setAttribute("nowprocket", "");
              script.setAttribute("nitro-exclude", "");
              script.src = "https://dashboard.blacklabel.com/scripts/dynamic_optimization.js";
              script.dataset.uuid = "2b4b7508-8914-47c8-b594-672775c0eb76";
              script.id = "sa-dynamic-optimization-loader";
              document.head.appendChild(script);
            `,
          }}
        />
      </head>
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${lexend.className} antialiased`}
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
