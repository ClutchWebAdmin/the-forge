import anthem1 from "../../../public/images/Anthem-Office-View.jpg";
import anthem2 from "../../../public/images/Anthem-Office-View-2.PNG";
import anthem3 from "../../../public/images/Anthem-3rd-Floor.PNG";
import anthem4 from "../../../public/images/Anthem-Featured-Photos-1.png";
import anthem5 from "../../../public/images/Anthem-Featured-Photos-2.png";
import anthem6 from "../../../public/images/Anthem-Featured-Photos-3.png";
import anthem7 from "../../../public/images/Anthem-front-desk-for-website.png";
import AIRender from "./AIRender";
import AnthemVideo from "./AnthemVideo";
import Image from "next/image";

export default function AnthemPhotoSection({ sectionId, sectionBId }) {

  const getPhotos = () => {
    if (sectionId === "section2") {
      return [anthem7,];
    } else if (sectionId === "section3") {
      return [anthem5,];
    } else {
      return [anthem6]; // Default or fallback photos
    }
  };

  const photos = getPhotos();

  

  return (
    // <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-dpwBlue-light">
    //     <div className="grid grid-rows-2 gap-4 md:gap-2 bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] ">
    //         <AIRender photo={anthem1} />
    //         <AIRender photo={anthem3} />
    //     </div>
    //     <div className="bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] flex items-center justify-center">
    //       <AnthemVideo />
    //     </div>
    // </div>

    // sectionId === 'section4' ? (
    //   <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-dpwBlue-light">
    //     <div className="grid grid-rows-2 gap-4 md:gap-2 bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px]">
    //       <AIRender photo={anthem1} />
    //       <AIRender photo={anthem3} />
    //     </div>
    //     <div className="bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] flex items-center justify-center">
    //       <AnthemVideo />
    //     </div>
    //   </div>
    // ) : (
      <div className="h-full lg:w-2/5 gap-4 md:gap-2 bg-dpwBlue-light p-6 flex self-center justify-self-center">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo}
            alt={`photo ${index}`}
            className="w-full h-full rounded-md object-cover"
            quality={60}
          />
        ))}
      </div>
    // )
  );
}
