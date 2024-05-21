import placeholder from "../../../public/images/placeholder.png";
import AIRender from "./AIRender";

export default function DPWPhotoSection() {
  return (
    <div className="flex-1 flex-col items-start justify-between w-full lg:w-3/5">
      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-blue-400 w-full h-full p-5 md:p-10">
        <AIRender photo={placeholder} />
        <AIRender photo={placeholder} />
        <AIRender photo={placeholder} />
        <AIRender photo={placeholder} />
      </div>
    </div>
  );
}
