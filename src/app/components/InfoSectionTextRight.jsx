import { FiExternalLink } from "react-icons/fi";
import InfoButton from "./InfoButton";

export default function InfoSectionTextRight({
  eyebrowText,
  headingText,
  description,
  topBackgroundColor,
  bottomBackgroundColor,
  floorNumber,
  websiteLink,
  websiteText,
}) {
  return (
    <div className="flex flex-col items-start justify-between h-auto w-full lg:w-2/5 lg:order-last">
      <div
        className={`flex flex-col gap-1 ${topBackgroundColor} w-full h-fit p-10`}
      >
        <div className="flex flex-row items-center gap-2 text-gray-300">
          <div className="flex justify-center items-center border w-6 h-6 rounded-full text-white text-sm">
            {floorNumber}
          </div>
          <h4 className="text-lg">{eyebrowText}</h4>
        </div>

        <h3 className="text-5xl md:text-7xl 2xl:text-8xl font-medium">
          {headingText}
        </h3>
      </div>

      <div
        className={`flex-1 flex flex-col gap-6 ${bottomBackgroundColor} w-full h-auto p-10`}
      >
        <h4
          className="text-2xl md:text-3xl xl:text-4xl border-b pb-2 w-fit"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          About The Space
        </h4>
        <p
          className="text-lg lg:text-xl"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {description}
        </p>
        {websiteLink && (
          <a
            href={websiteLink}
            target="_blank"
            className="flex flex-row gap-2 items-center text-lg lg:text-xl hover:underline decoration-1 underline-offset-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <FiExternalLink />
            {websiteText}
          </a>
        )}

        <InfoButton />
      </div>
    </div>
  );
}
