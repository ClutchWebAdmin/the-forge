import Image from "next/image";
import vault1 from "../../../public/images/Vault-Rendering-1.png";
import vault2 from "../../../public/images/Vault-Rendering-2.png";
import vault3 from "../../../public/images/Vault-Rendering-3.webp";
import vault4 from "../../../public/images/Vault-Rendering-4.png";
import vault6 from "../../../public/images/Vault-Rendering-6.png";
import vault7 from "../../../public/images/Vault-Rendering-7.webp";

export default function VaultPhotoSection({ sectionId, sectionBId }) {
  const getPhotos = () => {
    if (sectionId === "section1" && sectionBId === "section1") {
      return [vault1, vault2, vault3];
    } else if (sectionId === "section2" && sectionBId === "section2") {
      return [vault4, vault6, vault7];
    } else {
      return [vault7]; // Default or fallback photos
    }
  };

  const photos = getPhotos();

  return (
    <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-vaultPurple-light">
      {/* Left side: two stacked images */}
      <div className="grid grid-rows-2 gap-4 md:gap-2 bg-vaultPurple-light p-2 rounded-md h-full max-h-[500px]">
        {photos.slice(0, 2).map((photo, index) => (
          <div key={index} className="relative w-full h-full min-h-[200px] rounded-md overflow-hidden">
            <Image
              src={photo}
              alt={`vault image ${index}`}
              className="w-full h-full object-cover blur-md"
              quality={60}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white text-lg font-semibold text-center px-2">
                Images Coming Soon
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: third image */}
      <div className="bg-vaultPurple-light p-2 rounded-md w-full h-full max-h-[500px] flex items-center justify-center">
        {photos[2] && (
          <div className="relative w-full h-full min-h-[200px] rounded-md overflow-hidden">
            <Image
              src={photos[2]}
              alt="vault image 2"
              className="w-full h-full object-cover blur-md"
              quality={60}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white text-lg font-semibold text-center px-2">
                Images Coming Soon
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
