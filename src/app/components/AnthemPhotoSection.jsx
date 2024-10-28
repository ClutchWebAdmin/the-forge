import anthem1 from "../../../public/images/Anthem-Office-View.jpg";
import anthem2 from "../../../public/images/Anthem-Office-View-2.PNG";
import anthem3 from "../../../public/images/Anthem-3rd-Floor.PNG";
// import anthem4 from "../../../public/images/Anthem-Forge-Office.mp4";
import AIRender from "./AIRender";
import AnthemVideo from "./AnthemVideo";
import Image from "next/image";

export default function AnthemPhotoSection() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-dpwBlue-light">
        <div className="grid grid-rows-2 gap-4 md:gap-2 bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] ">
            <AIRender photo={anthem1} />
            <AIRender photo={anthem3} />
        </div>
        <div className="bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] flex items-center justify-center">
          <AnthemVideo />
        </div>
    </div>
  );
}
