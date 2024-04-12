import HeroImage from "./components/HeroImage";
import ForgeInfoSection from "./components/ForgeInfoSection";
import VaultInfoSection from "./components/VaultInfoSection";
import CollectiveInfoSection from "./components/CollectiveInfoSection";
import CollectivePhotoSection from "./components/CollectivePhotoSection";
import VaultPhotoSection from "./components/VaultPhotoSection";
import ForgePhotoSection from "./components/ForgePhotoSection";
import ElevatorPanel from "./components/ElevatorPanel";
import TheForgeLogo from "./components/TheForgeLogo";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
