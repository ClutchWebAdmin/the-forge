import { FaArrowRight } from "react-icons/fa6";

export default function AnthemVideo() {
  return (
    <section className="">
      {/* <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover brightness-105"
        preload="auto"
        playsInline
      >
        <source src="/images/Anthem-Forge.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      
      <video
        className="rounded-md"
        src="/images/AnthemTest3.mp4" // Make sure to put the correct path to your video file
        loop
        autoPlay
        muted
        playsInline // Helps autoplay on mobile devices
      />

    </section>
  );
}