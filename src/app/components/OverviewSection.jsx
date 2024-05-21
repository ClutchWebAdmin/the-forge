import Link from "next/link";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="min-h-svh bg-gray-100 p-5 lg:p-10 flex flex-col gap-4 lg:gap-8 justify-center items-center"
    >
      <div className="flex flex-col gap-2 lg:gap-4 text-center">
        <h1 className="font-extrabold text-3xl md:text-7xl lg:text-8xl text-forgeBrown">
          Reviving Liberty Plaza
        </h1>
        <h2 className="text-lg lg:text-3xl font-semibold italic">
          The Birth of The Forge
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:text-lg">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p className="lg:indent-8">
            In the heart of North Downtown Salem, where Liberty Plaza once
            stood, now rises a beacon of revitalization - The Forge. With a
            vision to breathe new life into the community, the redevelopment
            team has embarked on a journey to transform the area into a vibrant
            business community.
          </p>
          <p>
            The first significant change is happening with the rebranding of the
            plaza. Shedding its old identity, The Forge symbolizes not only a
            place of creation but also for change and progress.
          </p>
          <p>
            At the{" "}
            <Link
              href="#dpw"
              className="text-blue-900 hover:underline hover:underline-offset-4 font-bold"
            >
              top floor
            </Link>
            , a corporate office for professional service firms makes a
            significant milestone in the area's commercial landscape. This
            addition promises not only job opportunities but a sense of
            stability and growth in The Forge.
          </p>
          <p>
            Venturing down to the{" "}
            <Link
              href="#the-collective"
              className="text-blue-900 hover:underline hover:underline-offset-4 font-bold"
            >
              second floor
            </Link>
            , the Forge Collective, offering 21 salon suites where beauty
            professionals can collaborate and thrive. Yet, it's the goal of
            creating the “best women's restroom in Salem” that is sparking
            intrigue, a testament to The Forge's commitment to excellence and
            innovation.
          </p>
          <p>
            Descending to the{" "}
            <Link
              href="#the-forge"
              className="text-blue-900 hover:underline hover:underline-offset-4 font-bold"
            >
              first floor
            </Link>
            , alongside established favorites like Cozy Taberna and Rudy's
            Steakhouse, plans for a new sports bar and fine dining options. New
            flavors and experiences coming soon!
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <p>
            The{" "}
            <Link
              href="#the-vault"
              className="text-blue-900 hover:underline hover:underline-offset-4 font-bold"
            >
              lowest level
            </Link>{" "}
            has sparked the most intrigue. Rumors are circulating that a private
            bourbon and wine lounge may be on the horizon. Alternatively, hints
            of a family friendly entertainment area reminiscent of a Dave and
            Buster's. What will it become?
          </p>
          <p>
            Externally, the transformation is taking shape. Fresh renovations
            including spill-out seating on the sidewalks that will invite
            patrons to linger and connect with their surroundings.
          </p>
          <p>
            Momentum grows with each passing day! Lease reservations are coming
            in and remaining spaces are filling up! The team anticipates the
            majority of vacant spaces will be committed by summer 2024, and the
            project is on track for completion and grand reopening early 2025.
          </p>
          <p>
            The team remains committed to our vision that extends beyond bricks
            and mortar, encompassing a commitment to nurture partnerships with
            the best downtown establishments and forge a legacy that will endure
            generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}