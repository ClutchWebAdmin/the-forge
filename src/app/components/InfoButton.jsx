import { MdOutlineArrowOutward } from "react-icons/md";

export default function InfoButton() {
  return (
    <a
      href="https://traditionrep.com/commercial/?propertyId=1198195-lease"
      target="_blank"
      className="flex flex-row items-center gap-2 bg-vaultPurple-dark border border-transparent hover:border-white hover:bg-transparent text-white h-fit w-fit px-8 py-4 font-medium text-lg md:text-xl xl:text-2xl 2xl:text-3xl transition-colors duration-300"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      Availability & info
      <MdOutlineArrowOutward />
    </a>
  );
}
