import forge1 from "../../../public/images/forge1.png";
import forge2 from "../../../public/images/forge2.png";
import forge3 from "../../../public/images/forge3.png";
import forge4 from "../../../public/images/forge4.png";
import AIRender from "./AIRender";

export default function ForgePhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-forgeRed-light w-full h-full p-5 md:p-10">
        <AIRender photo={forge1} />
        <AIRender photo={forge2} />
        <AIRender photo={forge3} />
        <AIRender photo={forge4} />
      </div>
    </div>
  );
}
