import AIRender from "./AIRender";
import vault1 from "../../../public/images/vault1.png";
import vault2 from "../../../public/images/vault2.png";
import vault3 from "../../../public/images/vault3.png";
import vault4 from "../../../public/images/vault4.png";

export default function VaultPhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-vaultPurple-light w-full h-full p-5 md:p-10">
        <AIRender photo={vault1} />
        <AIRender photo={vault2} />
        <AIRender photo={vault3} />
        <AIRender photo={vault4} />
      </div>
    </div>
  );
}
