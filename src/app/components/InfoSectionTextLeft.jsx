import InfoButton from "./InfoButton";

export default function InfoSectionTextLeft({
  eyebrowText,
  headingText,
  featuresArray,
  topBackgroundColor,
  bottomBackgroundColor,
}) {
  return (
    <div className="flex flex-col items-start justify-between h-auto w-full lg:w-2/5">
      <div
        className={`flex flex-col gap-1 ${topBackgroundColor} w-full h-fit p-10`}
      >
        <h4 className="text-lg text-gray-300">{eyebrowText}</h4>
        <h3 className="text-5xl md:text-7xl 2xl:text-8xl font-medium">
          {headingText}
        </h3>
      </div>
      <div
        className={`flex-1 flex flex-col gap-6 lg:gap-10 ${bottomBackgroundColor} w-full h-auto p-10`}
      >
        <h4
          className="text-2xl md:text-3xl xl:text-4xl border-b pb-2 w-fit"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          Features & Amenities
        </h4>
        <ul
          className="list-disc flex flex-col gap-1 pl-8 text-lg lg:text-xl"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          {featuresArray.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <InfoButton />
      </div>
    </div>
  );
}
