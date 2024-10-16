'use client';
import ElevatorLink from "./ElevatorLink";
import { useState } from "react";

export default function ElevatorPanel({ activeSection }) {

  return (
    <nav
      className="flex flex-col items-end justify-end text-forgeBrown w-full h-1/2 lg:h-full "
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      <ul className="flex flex-col m-3 lg:m-5 p-3 rounded-2xl bg-white/70 backdrop-blur-xs text-xl lg:text-2xl font-medium">
        <ElevatorLink
          id="1"
          linkTo="#anthem"
          section="anthem"
          number="3"
          name="Anthem"
          subtext="Third Floor"
          activeSection={activeSection}
        />
        <ElevatorLink
          id='2'
          linkTo="#the-collective"
          section="the-collective"
          number="2"
          name="The Collective"
          subtext="Second Floor"
          activeSection={activeSection}
        />
        <ElevatorLink
          id='3'
          linkTo="#the-forge"
          section="the-forge"
          number="1"
          name="The Forge"
          subtext="Ground Floor"
          activeSection={activeSection}
        />
        <ElevatorLink
          id='4'
          linkTo="#the-vault"
          section="the-vault"
          number="B"
          name="The Vault"
          subtext="Basement Floor"
          activeSection={activeSection}
        />
      </ul>
    </nav>
  );
}
