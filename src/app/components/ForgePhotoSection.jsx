import forge1 from "../../../public/images/Forge-First-Floor-1.png";
import forge2 from "../../../public/images/Forge-First-Floor-2.png";
import forge3 from "../../../public/images/Forge-First-Floor-3.png";
import forge4 from "../../../public/images/Forge-First-Floor-4.png";
import forge5 from "../../../public/images/Forge-First-Floor-5.png";
import forge6 from "../../../public/images/Forge-First-Floor-6.png";
import forge7 from "../../../public/images/Forge-First-Floor-7.png";
import AIRender from "./AIRender";
import Image from "next/image";

export default function ForgePhotoSection({ sectionId, sectionBId }) {

  const sectionImages = {
    section1: [forge1, forge2, forge3, forge4  ],
    section2: [forge5, forge6, forge7, forge1  ],
    
  };
  const images = sectionImages[sectionId] || sectionImages.section1;

  return (
    // <div className="flex-1 flex-col justify-between w-full lg:w-2/5">
    //   <div className="grid grid-cols-2 items-center gap-5 md:gap-10 bg-forgeRed-light w-full h-full p-5 md:p-10">
    //     <AIRender photo={forge1} />
    //     <AIRender photo={forge2} />
    //     <AIRender photo={forge3} />
    //     <AIRender photo={forge4} />
    //   </div>
    // </div>

    <div className="gap-4 w-full md:w-2/5 h-full self-center justify-center p-4">
    {/* Left side with two equal images stacked */}
    <div className="grid grid-cols-2 h-full gap-4 md:gap-2 bg-forgeRed-light p-2 rounded-md flex flex-col">
      {images.map((photo, index) => (
        <div key={index} className="relative w-full h-64 rounded-md overflow-hidden">
          <Image
            key={index}
            src={photo}
            alt={`photo ${index}`}
            className="w-full h-full rounded-md object-cover blur-md"
            quality={60}
          />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <span className="text-white text-lg font-semibold">Images Coming Soon</span>
      </div>
    </div>
      ))}
    </div>
  </div>
  );
}
