import AIRender from "./AIRender";
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

        // <div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-vaultPurple-light">
        // <div className="grid grid-rows-2 gap-4 md:gap-2 bg-vaultPurple-light p-2 rounded-md h-full max-h-[500px] ">
        //     <AIRender photo={vault1} />
        //     <AIRender photo={vault3} />
        // </div>
        // <div className="bg-vaultPurple-light p-2 rounded-md w-full h-full max-h-[500px] flex items-center justify-center">
        //   <AIRender photo={vault3}/>
        // </div>
        // </div>

<div className="grid grid-cols-2 gap-4 lg:w-2/5 items-center justify-center p-4 bg-vaultPurple-light">
<div className="grid grid-rows-2 gap-4 md:gap-2 bg-vaultPurple-light p-2 rounded-md h-full max-h-[500px] ">
  {photos.slice(0, 2).map((photo, index) => (
    <AIRender key={index} photo={photo} />
  ))}
</div>
<div className="bg-vaultPurple-light p-2 rounded-md w-full h-full max-h-[500px] flex items-center justify-center">
  {photos[2] && <AIRender photo={photos[2]} />}
</div>
</div>


  );
}
