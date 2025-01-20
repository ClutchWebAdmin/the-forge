import Link from "next/link";
import { aoboshiOne } from "../styles/fonts";

export default function HomePage() {
  return (
    <section
      id="overview"
      className="bg-black p-5 lg:p-10 flex flex-col gap-4 lg:gap-8 justify-center items-center text-forgeGray"
    >
      <div className="flex flex-col gap-2 lg:gap-4 text-center">
        <h1
          className={`${aoboshiOne.className} tracking-wide font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-forgeOrange-light drop-shadow drop-shadow-lg shadow-white`}
        >
          Reviving Liberty Plaza
        </h1>
        <h2 className="text-lg md:text-2xl xl:text-3xl font-semibold mt-4">
          The Birth of The Forge
        </h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 lg:gap-y-0 lg:gap-x-8 text-sm lg:text-base">
        <p className="indent-8 col-span-full lg:pb-8">
          In the heart of North Downtown Salem, where Liberty Plaza once stood,
          now rises a beacon of revitalization - The Forge. With a vision to
          breathe new life into the community, the redevelopment team has
          embarked on a journey to transform the area into a vibrant business
          community. The first significant change is happening with the
          rebranding of the plaza. Shedding its old identity, The Forge
          symbolizes not only a place of creation but also for change and
          progress.
        </p>

        <div className="col-span-full grid lg:grid-cols-4">
          <div className="lg:border-l lg:border-b lg:border-forgeOrange-light lg:pl-4 lg:pb-4 lg:pt-4 lg:text-justify">
            <p
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
              className="indent-8 lg:indent-0"
            >
              At the{" "}
              <Link
                href="/anthem"
                className="text-blue-700 hover:underline hover:underline-offset-4 font-bold"
              >
                top floor
              </Link>
              , a corporate office for professional service firms makes a
              significant milestone in the area's commercial landscape. This
              addition promises not only job opportunities but a sense of
              stability and growth in The Forge.
            </p>
          </div>
        </div>

        <div className="col-span-full grid lg:grid-cols-4">
          <div className="lg:col-start-2 lg:border-l lg:border-b lg:border-forgeOrange-medium lg:pl-4 lg:pb-4 lg:pt-4 lg:text-justify">
            <p
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
              className="indent-8 lg:indent-0"
            >
              Venturing down to the{" "}
              <Link
                href="/the-collective"
                className="text-blue-700 hover:underline hover:underline-offset-4 font-bold"
              >
                second floor
              </Link>
              , the Forge Collective, offering 21 salon suites where beauty
              professionals can collaborate and thrive. Yet, it's the goal of
              creating the “best women's restroom in Salem” that is sparking
              intrigue, a testament to The Forge's commitment to excellence and
              innovation.
            </p>
          </div>
        </div>

        <div className="col-span-full grid lg:grid-cols-4">
          <div className="lg:col-start-3 lg:border-l lg:border-b lg:border-forgeOrange-dark lg:pl-4 lg:pb-4 lg:pt-4 lg:text-justify">
            <p
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
              className="indent-8 lg:indent-0"
            >
              Descending to the{" "}
              <Link
                href="/the-forge"
                className="text-blue-700 hover:underline hover:underline-offset-4 font-bold"
              >
                first floor
              </Link>
              , alongside established favorites like Cozy Taberna and Rudy's
              Steakhouse, plans for a new sports bar and fine dining options.
              New flavors and experiences coming soon!
            </p>
          </div>
        </div>

        <div className="col-span-full grid lg:grid-cols-4 lg:pb-8">
          <div className="lg:col-start-4 lg:border-l lg:border-b lg:border-forgeOrange-light lg:pl-4 lg:pb-4 lg:pt-4 lg:text-justify">
            <p
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
              className="indent-8 lg:indent-0"
            >
              The{" "}
              <Link
                href="/the-vault"
                className="text-blue-700 hover:underline hover:underline-offset-4 font-bold"
              >
                lowest level
              </Link>{" "}
              has sparked the most intrigue. Rumors are circulating that a
              private bourbon and wine lounge may be on the horizon.
              Alternatively, hints of a family friendly entertainment area
              reminiscent of a Dave and Buster's. What will it become?
            </p>
          </div>
        </div>

        <p className="col-span-full indent-8 lg:indent-0">
          Externally, the transformation is taking shape. Fresh renovations
          including spill-out seating on the sidewalks that will invite patrons
          to linger and connect with their surroundings. Momentum grows with
          each passing day! Lease reservations are coming in and remaining
          spaces are filling up! The team anticipates the majority of vacant
          spaces will be committed by summer 2024, and the project is on track
          for completion and grand reopening early 2025. The team remains
          committed to our vision that extends beyond bricks and mortar,
          encompassing a commitment to nurture partnerships with the best
          downtown establishments and forge a legacy that will endure
          generations to come.
        </p>
      </div>
      <div className=" w-full pt-20">
        <div
        className="flex flex-col order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true">
        
          <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4 lg:gap-5">
            <div className="flex md:block justify-between">
              <div className="flex flex-col col-span-full lg:col-span-5 pb-2 pr-2">
                <h6 className="uppercase text-sm lg:text-lg text-forgeOrange-light">
                  Name
                </h6>
                <p className="text-sm lg:text-xl">The Forge</p>
              </div>

              

              <div className="flex flex-col col-span-full lg:col-span-3 pb-2 pr-2">
                <h6 className="uppercase text-sm text-forgeOrange-light lg:text-lg">
                  Address
                </h6>
                <p className="text-sm lg:text-xl">285 Liberty Street</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-forgeOrange-light lg:text-lg">
                  City
                </h6>
                <p className="text-sm lg:text-xl">Salem</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-forgeOrange-light lg:text-lg">
                  State
                </h6>
                <p className="text-sm lg:text-xl">Oregon</p>
              </div>

              <div className="flex flex-col lg:col-span-2 pb-2 pr-2">
                <h6 className="uppercase text-sm text-forgeOrange-light lg:text-lg">
                  Zip Code
                </h6>
                <p className="text-sm lg:text-xl">97301</p>
              </div>
            </div>
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.081984705924!2d-123.04104102339316!3d44.94200127107028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bfff0d1bde0df7%3A0x5aa28f2a05aaa1fa!2s285%20Liberty%20St%20NE%2C%20Salem%2C%20OR%2097301!5e0!3m2!1sen!2sus!4v1730225839465!5m2!1sen!2sus"
              className="h-[400px] border-4 rounded-3xl border-white flex justify-end w-full md:w-1/2  object-cover shadow-inner shadow-white shadow-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </div>
    </section>
  );
}
