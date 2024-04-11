import { MdOutlineArrowOutward } from "react-icons/md";

export default function VaultInfoSection() {
  return (
    <div className="flex flex-col items-start justify-between h-auto w-full lg:w-2/5">
      <div className="flex flex-col gap-1 bg-vaultPurple-4 w-full h-fit p-10">
        <h4 className="text-lg text-gray-300">Wine Cellar</h4>
        <h3 className="text-6xl lg:text-8xl font-medium">The Vault</h3>
      </div>
      <div className="flex-1 flex flex-col gap-6 lg:gap-10 bg-vaultPurple-3 w-full h-auto p-10">
        <h4 className="text-2xl lg:text-4xl border-b pb-2 w-fit">
          Features & Amenities
        </h4>
        <ul className="list-disc flex flex-col gap-1 pl-8 text-lg lg:text-xl">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Spaces ranging from XXXXSF to XXXXSF</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        </ul>
        <a
          href="https://traditionrep.com/commercial/?propertyId=1198195-lease"
          target="_blank"
          className="flex flex-row items-center gap-2 bg-gray-200 hover:bg-gray-500 hover:text-white h-fit w-fit px-8 py-4 text-forgeBrown text-xl md:text-2xl xl:text-4xl transition duration-300"
        >
          Availability & info
          <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}
