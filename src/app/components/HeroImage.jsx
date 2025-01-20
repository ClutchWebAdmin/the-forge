import Image from "next/image";
import homeRender from "../../../public/images/Forge-Hero.png";

export default function HeroImage() {
  return (
    <div className="h-[75vh] w-full p-3 lg:p-5">
      <Image
        src={homeRender}
        alt="The Forge"
        className="object-cover h-full w-full opacity-85  rounded-3xl"
        priority
        placeholder="blur"
      />
    </div>
  );
}
