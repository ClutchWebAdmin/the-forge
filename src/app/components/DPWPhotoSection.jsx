import dpw1 from "../../../public/images/dpw1.png";
import dpw2 from "../../../public/images/dpw2.png";
import dpw3 from "../../../public/images/dpw3.png";
import dpw4 from "../../../public/images/dpw4.png";
import AIRender from "./AIRender";

export default function DPWPhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-blue-400 w-full h-full p-5 md:p-10">
        <AIRender photo={dpw1} />
        <AIRender photo={dpw2} />
        <AIRender photo={dpw3} />
        <AIRender photo={dpw4} />
      </div>
    </div>
  );
}
