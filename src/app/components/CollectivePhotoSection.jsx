import collective1 from "../../../public/images/collective1.webp";
import collective2 from "../../../public/images/collective2.webp";
import collective3 from "../../../public/images/collective3.webp";
import collective4 from "../../../public/images/collective4.jpg";
import AIRender from "./AIRender";

export default function CollectivePhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5 order-last lg:order-first">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-collectivePink-2 w-full h-full p-5 md:p-10">
        <AIRender photo={collective1} />
        <AIRender photo={collective2} />
        <AIRender photo={collective3} />
        <AIRender photo={collective4} />
      </div>
    </div>
  );
}
