import Image from "next/image";

export default function AIRender({ photo }) {
  return (
    <Image
      src={photo}
      alt="sample rendering of space"
      className="object-cover h-auto w-full aspect-square rounded-md"
      // placeholder="blur"
      quality={60}
    />
  );
}
