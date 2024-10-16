'use client';
import { useState } from "react";
import Link from "next/link";

export default function ElevatorLink({ linkTo, number, name, subtext, activeSection, section}) {
  const isActive = activeSection === section;
  return (
    <li className={`p-2 rounded-2xl  ${
      isActive ? 'bg-none' : ''
    }`}  >
      <Link href={linkTo} className={`flex flex-row items-center gap-3 py-2  `}>
        <div className={`flex justify-center items-center hover:bg-yellow-200 font-semibold w-10 h-10 border border-vaultPurple-dark rounded-full ${
          isActive ? 'bg-yellow-300' : ''
        } `}>
          {number}
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <p className="text-medium">{name}</p>
          <p className="text-xs text-gray-600">{subtext}</p>
        </div>
      </Link>
    </li>
  );
}
