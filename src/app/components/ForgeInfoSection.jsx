import InfoButton from "./InfoButton";

export default function ForgeInfoSection() {
  return (
    <div className="flex flex-col items-start justify-between h-auto w-full lg:w-2/5">
      <div className="flex flex-col gap-1 bg-forgeRed-4 w-full h-fit p-10">
        <h4 className="text-lg text-gray-300">Restaurant & Retail Space</h4>
        <h3 className="text-5xl md:text-7xl 2xl:text-8xl font-medium">
          The Forge
        </h3>
      </div>
      <div className="flex-1 flex flex-col gap-6 lg:gap-10 bg-forgeRed-3 w-full h-auto p-10">
        <h4 className="text-2xl md:text-3xl xl:text-4xl border-b pb-2 w-fit">
          Features & Amenities
        </h4>
        <ul className="list-disc flex flex-col gap-1 pl-8 text-lg lg:text-xl">
          <li>Ground floor and street level</li>
          <li>Spaces ranging from 1470SF to 2800SF</li>
          <li>Roll-up door access for indoor/outdoor seating</li>
          <li>Perfect for food, entertainment, brunch spots, bars & more</li>
        </ul>
        <InfoButton />
      </div>
    </div>
  );
}
