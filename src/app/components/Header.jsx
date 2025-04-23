'use client';
import ElevatorLink from "./ElevatorLink";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { archivoBlack, lexend } from "../styles/fonts";
import MobileMenu from "./MobileMenu";
import NewLogo from "../../../public/logos/The-Forge-Final.png"
import NewLogo1 from "../../../public/logos/The-Collective-Final2.png"
import VaultLogo from "../../../public/logos/The_Vault_Transparent.png"
import AnthemLogo from "../../../public/logos/Anthem-Logo.png"
import Image from "next/image";
import MarlaLogo from "../../../public/logos/MarlaLogo.png";
import { MdArrowDownward } from "react-icons/md";
 import SocialIcons from "./SocialIcons";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getBackgroundColor = () => {
    if (pathname === '/anthem') {
      return 'bg-dpwBlue-dark text-dpwBlue-light border-b border-dpwBlue-light'; // Anthem page color
    } else if (pathname === '/the-collective') {
      return 'bg-collectivePink-dark text-collectivePink-light border-b border-collectivePink-light'; // The Collective page color
    } else if (pathname === '/the-forge') {
      return 'bg-forgeRed-dark text-forgeRed-light border-b border-forgeRed-light'; // The Forge page color
    } else if (pathname === '/the-vault') {
      return 'bg-vaultPurple-dark text-vaultPurple-light border-b border-vaultPurple-light'; // The Vault page color
    } else {
      return 'bg-white text-forgeOrange-medium  '; // Default color
    }
  };

  const getLogo = () => {
    if (pathname === '/anthem') {
      return <div className="">
      <Image src={AnthemLogo.src} alt="The Forge Logo" width={208} height={108} className="w-32 lg:w-42 h-auto margin-10 absolute top-2 lg:top-6 left-2 lg:left-4" />
      </div>;
    } else if (pathname === '/the-collective') {
      return <div className="">
      <Image src={NewLogo1.src} alt="The Forge Logo" width={208} height={108} className="w-32 lg:w-40 h-auto margin-10 absolute -top-6 left-0" />
      </div>;
    } else if (pathname === '/the-forge') {
      return <div className="">
      <Image src={NewLogo.src} alt="The Forge Logo" width={208} height={108} className="w-32 lg:w-40 h-auto margin-10 absolute -top-6 left-0" />
      </div>;
    } else if (pathname === '/the-vault') {
      return <div className="">
      <Image src={VaultLogo.src} alt="The Forge Logo" width={208} height={108} className="w-32 lg:w-40 h-auto margin-10 absolute -top-6 left-0" />
      </div>;
    } else {
      return <div className="">
        {/* <Image src={MarlaLogo.src} alt="The Forge Logo" width={208} height={108} className="w-32 lg:w-96 fill h-auto  absolute  left-0" /> */}
        </div>;
    }
  };

  return (
    <header className={`sticky top-0 z-50 h-16 lg:h-20 w-full ${getBackgroundColor()} backdrop-blur-sm bg-opacity-75`}>
      <section className="p-2 pl-6 flex justify-between items-center h-full">
          {/* <div className={`${lexend.className} text-4xl lg:text-5xl uppercase  p-2 flex justify-between items-center h-full`}>
            {getLogo()}
          </div> */}


          
        <nav
          className="space-x-4 text-forgeBrown text-sm lg:text-md xl:text-lg font-medium flex-grow h-full"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <ul className={` hidden lg:flex justify-between items-center space-x-8 font-archivoBlack`}>
            <ElevatorLink linkTo="/" section="" number="R" name="MAIN" subtext="Home | News" />
            <ElevatorLink id="1" linkTo="/anthem" section="anthem" number="3" name="WEALTH AND FINANCE" subtext="Anthem Strategists | Floor 3" />
            <ElevatorLink id="2" linkTo="/the-collective" section="the-collective" number="2" name="THE WOMEN'S COLLECTIVE" subtext="Floor 2" />
            <ElevatorLink id="3" linkTo="/the-forge" section="the-forge" number="1" name="FOOD, WINE, & RETAIL" subtext="Floor 1" />
            <ElevatorLink id="4" linkTo="/the-vault" section="the-vault" number="B" name="EVENTS & ENTERTAINMENT" subtext="Lower Level"/>
          </ul>

          {/* Pass the mobile menu toggle and state */}
          <MobileMenu setMobileMenuOpen={setMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} getBackgroundColor={getBackgroundColor}/>
        </nav>
        
      </section>
    </header>
  );
}
