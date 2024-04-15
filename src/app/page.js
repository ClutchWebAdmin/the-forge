import HeroImage from "./components/HeroImage";
import CollectivePhotoSection from "./components/CollectivePhotoSection";
import VaultPhotoSection from "./components/VaultPhotoSection";
import ForgePhotoSection from "./components/ForgePhotoSection";
import ElevatorPanel from "./components/ElevatorPanel";
import TheForgeLogo from "./components/TheForgeLogo";
import TheFooter from "./components/TheFooter";
import InfoSectionTextLeft from "./components/InfoSectionTextLeft";
import InfoSectionTextRight from "./components/InfoSectionTextRight";

export const metadata = {
  title: "The Forge - Coming soon to 285 Liberty St",
  description:
    "The Forge is a remarkable redevelopment project in downtown Salem's former Liberty Plaza building",
  keywords:
    "Salem Oregon commercial real estate, retail space, restaurant space, salon space, spas, downtown salem, commercial, food, entertainment, central business district, parking garage",
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
        url: "https://the-forge-salem.vercel.app/images/og-image.png",
        alt: "The Forge",
      },
    ],
  },
  images: [
    {
      url: "https://the-forge-salem.vercel.app/images/og-image.png",
      alt: "The Forge",
    },
  ],
};

const theForgeFeatures = [
  "Ground floor and street level",
  "Spaces ranging from 1470SF to 2800SF",
  "Roll-up door access for indoor/outdoor seating",
  "Perfect for food, entertainment, brunch spots, bars & more",
];

const theVaultFeatures = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Spaces ranging from XXXXSF to XXXXSF",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
];

const theCollectiveFeatures = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Spaces ranging from XXXXSF to XXXXSF",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
];

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative h-svh">
        <HeroImage />
        <div className="flex p-3 lg:p-5 h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <TheForgeLogo />
            <ElevatorPanel />
          </div>
        </div>
      </section>

      <section id="the-forge" className="flex flex-col lg:flex-row text-white">
        <InfoSectionTextLeft
          eyebrowText="Restaurant & Retail Space"
          headingText="The Forge"
          topBackgroundColor="bg-forgeRed-4"
          bottomBackgroundColor="bg-forgeRed-3"
          featuresArray={theForgeFeatures}
        />
        <ForgePhotoSection />
      </section>

      <section
        id="the-collective"
        className="flex flex-col lg:flex-row text-white"
      >
        <CollectivePhotoSection />
        <InfoSectionTextRight
          eyebrowText="Salon, Spa, & Beauty Space"
          headingText="The Collective"
          topBackgroundColor="bg-collectivePink-5"
          bottomBackgroundColor="bg-collectivePink-4"
          featuresArray={theCollectiveFeatures}
        />
      </section>

      <section id="the-vault" className="flex flex-col lg:flex-row text-white">
        <InfoSectionTextLeft
          eyebrowText="Wine Cellar"
          headingText="The Vault"
          topBackgroundColor="bg-vaultPurple-4"
          bottomBackgroundColor="bg-vaultPurple-3"
          featuresArray={theVaultFeatures}
        />
        <VaultPhotoSection />
      </section>

      <TheFooter />
    </main>
  );
}
