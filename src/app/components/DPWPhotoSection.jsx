import anthem1 from "../../../public/images/Anthem-Office-View.jpg";
import anthem2 from "../../../public/images/Anthem-Office-View-2.PNG";
import anthem3 from "../../../public/images/Anthem-3rd-Floor.PNG";
// import anthem4 from "../../../public/images/Anthem-Forge-Office.mp4";
import AIRender from "./AIRender";
import AnthemVideo from "./AnthemVideo";
import Image from "next/image";

export default function DPWPhotoSection() {
  return (
    <div className="flex-1 flex-cols items-start justify-between w-full lg:w-3/5 bg-dpwBlue-light pt-2 pb-2">
      <div className="grid grid-cols-2 gap-5  bg-dpwBlue-light p-3  ">
        <div className="grid grid-rows-2  object-cover pr-2 ml-4 pr-2">
          <div className="pb-2">
            <AIRender photo={anthem1} />
          </div>
          <div className="pt-2">
            <AIRender photo={anthem3} />
          </div>
        </div>
        <div className=" ml-2 pr-2 object-cover">
          <AnthemVideo />
        </div>
      </div>
    </div>
  );
}
