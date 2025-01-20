import { MdOutlineArrowOutward } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function InfoButton() {

  const pathname = usePathname();
  const getHoverColor = () => {
    if (pathname === '/anthem') {
      return 'bg-vaultPurple-dark hover:border-b-forgeGray hover:border-r-forgeGray hover:text-forgeGray'; // Anthem page color
    } else if (pathname === '/the-collective') {
      return 'bg-blush-light text-forgeGray hover:border-b-vaultPurple-dark hover:border-r-vaultPurple-dark hover:text-blush-light'; // The Collective page color
    } else if (pathname === '/the-forge') {
      return 'bg-forgeOrange-light hover:border-b-forgeGray hover:border-r-forgeGray hover:text-forgeOrange-light'; // The Forge page color
    } else if (pathname === '/the-vault') {
      return 'bg-forgeRed-dark hover:border-b-forgeGray hover:border-r-forgeGray hover:text-forgeRed-dark'; // The Vault page color
    } else {
      return 'hover:border-white hover:text-forgeBrown'; // Default color
    }
  };

  return (
    <a
      href="https://traditionrep.com/commercial/?propertyId=1198195-lease"
      target="_blank"
      className={`flex flex-row items-center gap-2  border border-t-2 border-t-white border-l-2 border-l-white border-transparent ${getHoverColor()} hover:bg-transparent text-white h-fit w-fit px-6 py-4 font-medium text-sm md:text-md xl:text-lg 2xl:text-xl transition-colors duration-300 rounded-md shadow-black shadow-md`}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      Availability & info
      <MdOutlineArrowOutward />
    </a>
  );
}
