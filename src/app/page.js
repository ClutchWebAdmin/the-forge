import HeroImage from "./components/HeroImage";
import ForgeInfoSection from "./components/ForgeInfoSection";
import VaultInfoSection from "./components/VaultInfoSection";
import CollectiveInfoSection from "./components/CollectiveInfoSection";
import CollectivePhotoSection from "./components/CollectivePhotoSection";
import VaultPhotoSection from "./components/VaultPhotoSection";
import ForgePhotoSection from "./components/ForgePhotoSection";
import ElevatorPanel from "./components/ElevatorPanel";
import TheForgeLogo from "./components/TheForgeLogo";
import TheFooter from "./components/TheFooter";

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
        <ForgeInfoSection />
        <ForgePhotoSection />
      </section>

      <section
        id="the-collective"
        className="flex flex-col lg:flex-row text-white"
      >
        <CollectivePhotoSection />
        <CollectiveInfoSection />
      </section>

      <section id="the-vault" className="flex flex-col lg:flex-row text-white">
        <VaultInfoSection />
        <VaultPhotoSection />
      </section>

      <TheFooter />
    </main>
  );
}
