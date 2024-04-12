import Image from "next/image";
import theForgeLogo from "../../../public/logos/the-forge-logo.svg";

export default function TheForgeLogo() {
  return (
    <div className="flex flex-col gap-0.5 w-full h-1/2 lg:h-full lg:w-1/2 px-5 pt-5">
      <Image
        src={theForgeLogo}
        alt="The Forge logo"
        className="w-3/4 md:w-2/3"
        priority
      />
      <p className="text-sm xl:text-xl 2xl:text-2xl text-amber-700 font-medium">
        coming soon to{" "}
        <span className="font-bold text-orange-800 text-lg md:text-xl xl:text-3xl">
          285 Liberty Street
        </span>
      </p>
    </div>
  );
}
