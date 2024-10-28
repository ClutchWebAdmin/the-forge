import { FaArrowRight } from "react-icons/fa6";

export default function AnthemVideo() {
  return (
    <div className="relative w-full h-full max-h-[500px] aspect-w-16 aspect-h-9 ">
      <video
        className="object-cover h-full w-full rounded-md "
        src="/images/Anthem-Layout-Vid.mp4" // Make sure to put the correct path to your video file
        loop
        autoPlay
        muted
        playsInline // Helps autoplay on mobile devices
      />
    </div>
  );
}