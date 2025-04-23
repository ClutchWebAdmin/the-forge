import Image from "next/image";
import homeRender from "../../../public/images/Forge-Hero.png";


export default function HeroImage() {
  return (
    <div className="h-[100vh] w-full">
      {/* <Image
        src={homeRender}
        alt="The Forge"
        className="object-cover h-full w-full opacity-85  rounded-3xl"
        priority
        placeholder="blur"
      /> */}

      <video 
          className="object-cover h-full w-full opacity-85"
          src="/videos/Hero.mp4" // Path to your video file
          loop
          autoPlay
          muted
          playsInline // Helps autoplay on mobile devices
      />
      
    </div>
  );
}
