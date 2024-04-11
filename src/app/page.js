import Image from "next/image";
import theForgeLogo from "../../public/logos/the-forge-logo.svg";
import ElevatorLink from "./components/ElevatorLink";
import HeroImage from "./components/HeroImage";
import ForgeInfoSection from "./components/ForgeInfoSection";
import VaultInfoSection from "./components/VaultInfoSection";
import CollectiveInfoSection from "./components/CollectiveInfoSection";
import placeholderImage from "../../public/images/placeholder-image.png";

export default function Home() {
  return (
    <main>
      <section className="relative h-svh">
        <HeroImage />

        <div className="flex p-3 lg:p-5 h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="flex flex-col gap-4 w-full h-1/2 lg:h-full lg:w-1/2 p-5">
              <Image
                src={theForgeLogo}
                alt="The Forge logo"
                className="w-3/4 md:w-2/3"
              />
              <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl">
                Coming soon at 285 Liberty Street
              </p>
            </div>

            <nav className="flex flex-col items-end justify-end text-forgeBrown w-full h-1/2 lg:h-full lg:w-1/2">
              <ul className="flex flex-col m-3 lg:m-5 p-3 rounded-2xl bg-white/70 backdrop-blur-xs text-2xl font-medium">
                <ElevatorLink
                  linkTo="#the-collective"
                  number="2"
                  name="The Collective"
                  subtext="Second Floor"
                />
                <ElevatorLink
                  linkTo="#the-forge"
                  number="1"
                  name="The Forge"
                  subtext="Ground Floor"
                />
                <ElevatorLink
                  linkTo="#the-vault"
                  number="B"
                  name="The Vault"
                  subtext="Basement Floor"
                />
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section id="the-forge" className="flex flex-col lg:flex-row text-white">
        <ForgeInfoSection />
        <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
          <div className="grid grid-cols-2 gap-5 md:gap-10 bg-forgeRed-2 w-full h-full p-5 md:p-10">
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>

      <section
        id="the-collective"
        className="flex flex-col lg:flex-row text-white"
      >
        <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5 order-last lg:order-first">
          <div className="grid grid-cols-2 gap-5 md:gap-10 bg-collectivePink-2 w-full h-full p-5 md:p-10">
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        <CollectiveInfoSection />
      </section>

      <section id="the-vault" className="flex flex-col lg:flex-row text-white">
        <VaultInfoSection />
        <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
          <div className="grid grid-cols-2 gap-5 md:gap-10 bg-vaultPurple-2 w-full h-full p-5 md:p-10">
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
            <Image
              src={placeholderImage}
              alt="placeholder"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
