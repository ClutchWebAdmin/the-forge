import anthem1 from "../../../public/images/Anthem-Office-View.jpg";
import anthem2 from "../../../public/images/Anthem-Office-View-2.PNG";
import anthem3 from "../../../public/images/Anthem-3rd-Floor.PNG";
import anthem4 from "../../../public/images/Anthem-team1.png";
import anthem5 from "../../../public/images/Anthem-team2.png";
import anthem6 from "../../../public/images/Anthem-team3.png";
import AIRender from "./AIRender";
import AnthemVideo from "./AnthemVideo";
import Image from "next/image";

export default function AnthemPhotoSection({ sectionId, sectionBId }) {

  const getPhotos = () => {
    if (sectionId === "section1" && sectionBId === "section1") {
      return [anthem1, anthem2, anthem3];
    } else if (sectionId === "section2") {
      return [anthem4,];
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

    sectionId === 'section1' ? (
      <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-dpwBlue-light">
        <div className="grid grid-rows-2 gap-4 md:gap-2 bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px]">
          <AIRender photo={anthem1} />
          <AIRender photo={anthem3} />
        </div>
        <div className="bg-dpwBlue-light p-2 rounded-md h-full max-h-[500px] flex items-center justify-center">
          <AnthemVideo />
        </div>
      </div>
    ) : (
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
    )
  );
}
