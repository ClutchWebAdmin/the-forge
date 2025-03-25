import collective1 from "../../../public/images/collective-salon.png";
import collective2 from "../../../public/images/collective-balcony.png";
import collective3 from "../../../public/images/collective-cafe.png";
import collective4 from "../../../public/images/collective-storefronts.png";
import collective5 from "../../../public/images/collective-hair-dresser.png";
import collective6 from "../../../public/images/collective-waiting-room.jpeg";
import collective7 from "../../../public/images/collective-salon-room.jpeg";
import collective8 from "../../../public/images/collective-beauty-chair.png";
import collectiveT1 from "../../../public/images/collective-star-chair.webp";
import collectiveT2 from "../../../public/images/collective-vanity-chair.webp";
// import collectiveV1 from "../../../public/videos/CollectiveMassage.mp4";
// import collectiveV2 from "../../../public/videos/CollectiveEyebrow.mp4";
// import collectiveV3 from "../../../public/videos/CollectiveLayout.mp4";
import AIRender from "./AIRender";
import Image from "next/image";

export default function CollectivePhotoSection({ sectionId, sectionBId }) {
  const sectionImages = {
    section1: [collective1],
    section2: [collective3],
    section3: [collective5],
    section4: [collective4],
  };
  const images = sectionImages[sectionId] || sectionImages.section1;

  const sectionTall = {
    section1: [collectiveT1],
    section2: [collectiveT2],
    section3: [collectiveT1],
    section4: [collectiveT2],
  };
  const imagesTall = sectionTall[sectionBId] || sectionTall.section1;

  return (
    <div className="gap-4 w-full md:w-2/5 h-full self-center justify-center p-4">
      {/* Left side with two equal images stacked */}
      <div className="h-full gap-4 md:gap-2 bg-collectivePink-light p-2 rounded-md flex flex-col">
        {images.map((photo, index) => (
          <div key={index} className="relative w-full h-64 rounded-md overflow-hidden">
            <Image
              src={photo}
              alt={`photo ${index}`}
              className="w-full h-full object-cover blur-md"
              quality={60}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
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
