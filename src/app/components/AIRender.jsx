import Image from "next/image";

export default function AIRender({ photo }) {
  return (
    <div className="h-full">
      <Image
      src={photo}
      alt="sample rendering of space"
      className="object-cover w-full h-full rounded-md"
      // placeholder="blur"
      quality={60}
    />
    </div>
    
  );
}
