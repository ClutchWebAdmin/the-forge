import Image from "next/image";
import Link from "next/link";
import theForgeLogo from "../../../public/logos/the-forge-logo.svg";
import { MdArrowDownward } from "react-icons/md";
import NewLogo from "../../../public/logos/The-Forge-inside-orb-on-black.png"
import { aoboshiOne } from "../styles/fonts";

export default function TheForgeLogo() {
  return (
    <div
      className="absolute top-0 flex flex-col gap-1 w-5/6 h-1/2 lg:h-full lg:w-2/3 px-5 pt-5"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      
      

      <p className={`${aoboshiOne.className} text-3xl md:text-4xl lg:text5xl xl:text-6xl font-extrabold text-amber-800 font-medium mb-2 text-outline`}>
        Coming soon to{" "}
      </p>
      <span className={`${aoboshiOne.className} text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-forgeOrange-medium mb-2 text-outline`}>
          285 Liberty Street
        </span>
      <Link
        href="#overview"
        className="flex flex-row gap-2 font-medium items-center bg-orange-800 hover:bg-amber-700 transition duration-300 w-fit h-fit text-white px-4 py-2 rounded-md"
      >
        Read more
        <MdArrowDownward />
      </Link>
    </div>
  );
}
