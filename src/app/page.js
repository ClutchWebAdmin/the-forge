import HeroImage from "./components/HeroImage";
import TheForgeLogo from "./components/TheForgeLogo";
import HomePage from "./components/HomePage";
import SocialIcons from "./components/SocialIcons";


export const metadata = {
  title: "The Forge - Coming soon to 285 Liberty St",
  description:
    "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building",
  keywords:
    "Salem Oregon commercial real estate, retail space, restaurant space, salon space, spas, downtown salem, commercial, food, entertainment, central business district, parking garage, Liberty Plaza Salem redevelopment, downtown Salem real estate opportunities",
  openGraph: {
    title: "The Forge",
    description:
      "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building.",
    siteName: "The Forge",
    type: "website",
    locale: "en_US",
    url: "https://forgesalem.com",
    images: [
      {
        url: "https://forgesalem.com/images/og-image.png",
        alt: "The Forge",
      },
    ],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Forge",
    url: "https://forgesalem.com",
    logo: "https://forgesalem.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "285 Liberty St",
      addressLocality: "Salem",
      addressRegion: "OR",
      postalCode: "97301",
      addressCountry: "US",
    },
    description: "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building.",
  },
  images: [
    {
      url: "https://forgesalem.com/images/og-image.png",
      alt: "The Forge redevelopment project in Salem",
    },
    {
      url: "https://forgesalem.com/images/forge-front.jpg",
      alt: "Front view of The Forge in downtown Salem",
    },
  ],
  robots: {
    index: true,   // Allows the page to be indexed.
    follow: true,  // Allows search engines to follow the links.
  },
};

export default function Home() {
  
  return (
    <main className="flex flex-col">
      <section id="hero" className="relative h-full bg-forgeGray border-b border-forgeOrange-light">
        <HeroImage />
        <SocialIcons placement="header" />
        <div className="flex p-3 lg:p-5 h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <TheForgeLogo />
          </div>
        </div>
      </section>
      <section id="overview" >
        <HomePage />
      </section>  
    </main>
  );
}
