import Image from "next/image";

export default function AIRender({ photo }) {
  return (
    <Image
      src={photo}
      alt="sample rendering of space"
      className="object-cover h-full w-full"
      placeholder="blur"
    />
  );
}
