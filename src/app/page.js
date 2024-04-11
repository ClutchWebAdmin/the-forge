import Image from "next/image";
import homeRender from "../../public/images/the-forge-rendering.png";
import theForgeLogo from "../../public/logos/the-forge-logo.svg";
import Link from "next/link";
import ElevatorLink from "./components/ElevatorLink";

export default function Home() {
  return (
    <main>
      <section className="relative h-svh">
        <div className="absolute h-svh w-full -z-20 p-3 lg:p-5">
          <Image
            src={homeRender}
            alt="The Forge"
            className="object-cover h-full w-full opacity-85 -z-20 rounded-3xl"
            priority
          />
        </div>

        <div className="flex p-3 lg:p-5 h-full">
          <div className="flex flex-col lg:flex-row h-full w-full">
            <div className="flex flex-col gap-4 w-full h-1/2 lg:h-full lg:w-1/2 p-3 lg:p-5">
              <Image
                src={theForgeLogo}
                alt="The Forge logo"
                className="w-2/3"
              />
              <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl font-medium">
                Coming soon to 285 Liberty Street.
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

      <section id="the-forge" className="h-svh bg-[#B12D10]">
        The Forge
      </section>
      <section id="the-collective" className="h-svh bg-[#D07BAE]">
        The Collective
      </section>
      <section id="the-vault" className="h-svh bg-[#10040E]">
        The Vault
      </section>
    </main>
  );
}
