import ElevatorLink from "./ElevatorLink";

export default function ElevatorPanel() {
  return (
    <nav
      className="flex flex-col items-end justify-end text-forgeBrown w-full h-1/2 lg:h-full lg:w-1/2"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <ul className="flex flex-col m-3 lg:m-5 p-3 rounded-2xl bg-white/70 backdrop-blur-xs text-xl lg:text-2xl font-medium">
        <ElevatorLink
          linkTo="#the-collective"
          number="2"
          name="The Collective"
          subtext="Second Floor"
        />
        <ElevatorLink
          linkTo="#the-forge"
          number="1"
          name="The Forge"
          subtext="Ground Floor"
        />
        <ElevatorLink
          linkTo="#the-vault"
          number="B"
          name="The Vault"
          subtext="Basement Floor"
        />
      </ul>
    </nav>
  );
}
