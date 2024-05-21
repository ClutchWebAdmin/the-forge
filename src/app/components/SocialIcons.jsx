import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialIcons({ placement }) {
  if (placement === "header") {
    return (
      <div
        className="flex flex-row gap-3 text-orange-800 absolute top-10 right-10 text-3xl z-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <a
          href="https://www.facebook.com/people/The-Forge/61557014067513/"
          target="_blank"
          className="hover:text-amber-700 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/theforgesalem/"
          target="_blank"
          className="hover:text-amber-700 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    );
  } else if (placement === "footer") {
    return (
      <div className="flex flex-row items-center gap-3 text-orange-800 text-3xl">
        <a
          href="https://www.facebook.com/people/The-Forge/61557014067513/"
          target="_blank"
          className="hover:text-amber-700 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/theforgesalem/"
          target="_blank"
          className="hover:text-amber-700 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    );
  } else {
    return <div>Invalid placement type</div>;
  }
}
