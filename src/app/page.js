'use client'
import HeroImage from "./components/HeroImage";
import CollectivePhotoSection from "./components/CollectivePhotoSection";
import VaultPhotoSection from "./components/VaultPhotoSection";
import ForgePhotoSection from "./components/ForgePhotoSection";
import ElevatorPanel from "./components/ElevatorPanel";
import TheForgeLogo from "./components/TheForgeLogo";
import TheFooter from "./components/TheFooter";
import InfoSectionTextLeft from "./components/InfoSectionTextLeft";
import InfoSectionTextRight from "./components/InfoSectionTextRight";
import DPWPhotoSection from "./components/DPWPhotoSection";
import OverviewSection from "./components/OverviewSection";
import SocialIcons from "./components/SocialIcons";
import { useState, useEffect } from "react";

// export const metadata = {
//   title: "The Forge - Coming soon to 285 Liberty St",
//   description:
//     "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building",
//   keywords:
//     "Salem Oregon commercial real estate, retail space, restaurant space, salon space, spas, downtown salem, commercial, food, entertainment, central business district, parking garage",
//   openGraph: {
//     title: "The Forge",
//     description:
//       "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building.",
//     siteName: "The Forge",
//     type: "website",
//     locale: "en_US",
//     url: "https://forgesalem.com",
//     images: [
//       {
//         url: "https://forgesalem.com/images/og-image.png",
//         alt: "The Forge",
//       },
//     ],
//   },
//   images: [
//     {
//       url: "https://forgesalem.com/images/og-image.png",
//       alt: "The Forge",
//     },
//   ],
// };

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const options = {
      threshold: 0.5, // 50% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set the active section based on the section ID
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <main className="flex flex-col">
      
      
      <div className="fixed bottom-0 right-0 z-50 ">
        <ElevatorPanel activeSection={activeSection}/>
      </div>
      
      
      <section id="hero" className="relative h-svh">
        <HeroImage />
        <SocialIcons placement="header" />
        <div className="flex p-3 lg:p-5 h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <TheForgeLogo />
            
          </div>
        </div>
      </section>
      <section id="overview" >
        <OverviewSection />
      </section>  
      

      <section id="anthem" className="flex flex-col lg:flex-row text-white w-full">
        <InfoSectionTextLeft
          eyebrowText="Tax & Business Advisory Firm"
          headingText="Anthem"
          websiteLink="https://dpwcpas.com/"
          websiteText="www.dpwcpas.com"
          topBackgroundColor="bg-dpwBlue-dark"
          bottomBackgroundColor="bg-dpwBlue-medium"
          description="We are thrilled to welcome Anthem, a distinguished tax and business advisory firm, as the newest tenant on the top floor of The Forge. Headquartered in Salem, Oregon, Anthem offers comprehensive financial services with a reputation for excellence. Their new space at The Forge is a testament to their growth and the trust their clients place in them. We are confident that Anthem's presence will enhance our vibrant business community. We look forward to welcoming you and continuing to serve your financial needs with the professionalism you expect from Anthem."
          floorNumber="3"
        />
        <div id="anthem" className="flex lg:w-3/5">
          <DPWPhotoSection />
        </div>
        
      </section>

      <section
        id="the-collective"
        className="flex flex-col lg:flex-row text-white"
      >
        <InfoSectionTextRight
          eyebrowText="Salon, Spa, & Beauty Space"
          headingText="The Collective"
          topBackgroundColor="bg-collectivePink-dark"
          bottomBackgroundColor="bg-collectivePink-medium"
          description="Connect and belong on Floor 2, a curated haven where beauty and wellness converge with networking and socializing. This vibrant community houses 21 distinct salon suites, each crafted to empower and inspire influential women. Revel in the sophisticated atmosphere at our exclusive champagne and martini bar, designed to complement your luxurious experience."
          floorNumber="2"
        />
        <CollectivePhotoSection />
      </section>

      <section id="the-forge" className="flex flex-col lg:flex-row text-white">
        <InfoSectionTextLeft
          eyebrowText="Restaurant & Retail Space"
          headingText="The Forge"
          topBackgroundColor="bg-forgeRed-dark"
          bottomBackgroundColor="bg-forgeRed-medium"
          description="Welcome to The Forge, Salem's emerging social hub poised to become the city's premier destination for entertainment and dining. This floor is actively seeking vibrant local businesses, from dynamic sports bars to complimentary dining and entertainment."
          floorNumber="1"
        />
        <ForgePhotoSection />
      </section>

      <section id="the-vault" className="flex flex-col lg:flex-row text-white">
        <InfoSectionTextRight
          eyebrowText="Wine Cellar"
          headingText="The Vault"
          topBackgroundColor="bg-vaultPurple-dark"
          bottomBackgroundColor="bg-vaultPurple-medium"
          description="Descend into The Vault, a hidden gem beneath the bustling activity of the floors above. This versatile basement space offers two distinct possibilities: a private underground event venue perfect for exclusive gatherings, or a sophisticated bourbon and wine lounge tailored for connoisseurs. Both options provide a secure and private setting, ideal for those seeking to enjoy their favorite beverages in an atmosphere of exclusivity and refinement."
          floorNumber="B"
        />
        <VaultPhotoSection />
      </section>

      <TheFooter />
    </main>
  );
}
