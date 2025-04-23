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
      className="absolute top-0 flex flex-col gap-1 w-5/6 h-1/2 lg:h-full lg:w-2/3 px-5 pt-5"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      
      <div className="">
              <Image src={MarlaLogo.src} alt="The Forge Logo" width={640} height={108} className="w-32 lg:w-96 fill h-auto  absolute -left-12 -top-24" />
              </div>




    </div>
  );
}
