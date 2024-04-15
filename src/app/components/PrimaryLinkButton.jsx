import Link from "next/link";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="flex flex-row items-center gap-2 bg-gray-200 hover:bg-gray-500 hover:text-white h-fit w-fit px-8 py-4 font-medium text-forgeBrown text-xl md:text-2xl xl:text-3xl 2xl:text-4xl transition duration-300"
    >
      {buttonText}
    </Link>
  );
}
