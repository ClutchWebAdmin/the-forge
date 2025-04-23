import HeroImage from "./components/HeroImage";
import TheForgeLogo from "./components/TheForgeLogo";
import HomePage from "./components/HomePage";
import SocialIcons from "./components/SocialIcons";


export const metadata = {
  title: "The Forge - Revitalizing Downtown Salem, Oregon",
  description:
    "The Forge is a transformative redevelopment project in downtown Salem's historic Liberty Plaza, offering premium retail, restaurant, salon, and office spaces in a vibrant business hub.",
  keywords:
    "The Forge, Liberty Plaza Salem, downtown Salem redevelopment, Salem Oregon commercial real estate, retail and restaurant spaces Salem, salon suites for beauty professionals, rooftop event venue Salem, bourbon and wine lounge, tenant leasing Salem Oregon, business spaces downtown Salem, mixed-use development, food and entertainment Salem Oregon, Salem Oregon investment opportunities",
  openGraph: {
    title: "The Forge - Revitalizing Downtown Salem",
    description:
      "Discover The Forge, a redevelopment project breathing new life into downtown Salem's Liberty Plaza. Explore retail, restaurant, salon, and office spaces designed to foster community and growth.",
    siteName: "The Forge",
    type: "website",
    locale: "en_US",
    url: "https://forgesalem.com",
    images: [
      {
        url: "https://forgesalem.com/images/og-image.png",
        alt: "The Forge - Revitalizing Downtown Salem",
      },
      {
        url: "https://forgesalem.com/images/forge-front.jpg",
        alt: "Front view of The Forge redevelopment project",
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
    description:
      "The Forge is a transformative redevelopment project in downtown Salem's historic Liberty Plaza, creating a vibrant hub for retail, dining, and professional services.",
    sameAs: [
      "https://www.instagram.com/theforgesalem",
      "https://www.facebook.com/TheForgeSalem",
    ], // Link your social media accounts
  },
  images: [
    {
      url: "https://forgesalem.com/images/og-image.png",
      alt: "The Forge - Revitalizing Downtown Salem",
    },
    {
      url: "https://forgesalem.com/images/forge-front.jpg",
      alt: "Front view of The Forge redevelopment project",
    },
    {
      url: "https://forgesalem.com/images/interior-view.jpg",
      alt: "Interior view of The Forge in Salem",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};


export default function Home() {
  
  return (
    <main className="flex flex-col">
      <section id="hero" className="relative h-full bg-forgeGray border-b border-new-light">
      
        <HeroImage />
        {/* <SocialIcons placement="header" /> */}
        <div className="flex  h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <TheForgeLogo />
            <SocialIcons placement="header" className=' top-0 lg:-top-6 text-white' />
          </div>
        </div>
      </section>
      <section id="overview" >
        <HomePage />
      </section>  
    </main>
  );
}
