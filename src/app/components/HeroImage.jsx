import Image from "next/image";
import homeRender from "../../../public/images/the-forge-rendering.png";

export default function HeroImage() {
  return (
    <div className="absolute h-svh w-full -z-20 p-3 lg:p-5">
      <Image
        src={homeRender}
        alt="The Forge"
        className="object-cover h-full w-full opacity-85 -z-20 rounded-3xl"
        priority
      />
    </div>
  );
}
