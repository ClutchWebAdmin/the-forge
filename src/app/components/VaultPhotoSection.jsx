import placeholderImage from "../../../public/images/placeholder-image.png";
import AIRender from "./AIRender";

export default function VaultPhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-vaultPurple-2 w-full h-full p-5 md:p-10">
        <AIRender photo={placeholderImage} />
        <AIRender photo={placeholderImage} />
        <AIRender photo={placeholderImage} />
        <AIRender photo={placeholderImage} />
      </div>
    </div>
  );
}
