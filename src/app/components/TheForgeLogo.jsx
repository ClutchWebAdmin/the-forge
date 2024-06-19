import Image from "next/image";
import Link from "next/link";
import theForgeLogo from "../../../public/logos/the-forge-logo.svg";
import { MdArrowDownward } from "react-icons/md";

export default function TheForgeLogo() {
  return (
    <div
      className="flex flex-col gap-1 w-full h-1/2 lg:h-full lg:w-1/2 px-5 pt-5"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <Image
        src={theForgeLogo}
        alt="The Forge logo"
        className="w-3/4 md:w-2/3"
        priority
      />

      <p className="text-sm xl:text-lg 2xl:text-xl text-amber-700 font-medium mb-2">
        Coming soon to{" "}
        <span className="font-semibold text-orange-800 md:text-lg xl:text-2xl">
          285 Liberty Street
        </span>
      </p>
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
