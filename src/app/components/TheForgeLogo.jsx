import Image from "next/image";
import Link from "next/link";
import theForgeLogo from "../../../public/logos/the-forge-logo.svg";
import { MdArrowDownward } from "react-icons/md";
import NewLogo from "../../../public/logos/The-Forge-inside-orb-on-black.png"
import { aoboshiOne } from "../styles/fonts";
import MarlaLogo from "../../../public/logos/MarlaLogo.png";

export default function TheForgeLogo() {
  return (
    <div
      className="flex flex-row gap-3 text-white absolute -top-10 lg:-top-40 -left-2 lg:-left-10 z-10"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      
      <div className="">
              <Image src={MarlaLogo.src} alt="The Forge Logo" width={800} height={108} className="w-2/3 lg:w-full fill h-auto" />
              </div>




    </div>
  );
}
