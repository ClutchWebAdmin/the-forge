'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ElevatorLink({ linkTo, number, name,  subtext, activeSection, section}) {
  const pathname = usePathname()
  const getTextColor = () => {
    if (pathname === '/anthem') {
      return 'text-dpwBlue-light'; // Anthem page color
    } else if (pathname === '/the-collective') {
      return 'text-collectivePink-light'; // The Collective page color
    } else if (pathname === '/the-forge') {
      return 'text-forgeRed-light'; // The Forge page color
    } else if (pathname === '/the-vault') {
      return 'text-vaultPurple-light'; // The Vault page color
    } else {
      return 'text-forgeGray'; // Default color
    }
  };

  const getHomeColor = () => {
    if (pathname === '/anthem') {
      return 'text-forgeBrown'; // Anthem page color
    } else if (pathname === '/the-collective') {
      return 'text-forgeBrown'; // The Collective page color
    } else if (pathname === '/the-forge') {
      return 'text-forgeBrown'; // The Forge page color
    } else if (pathname === '/the-vault') {
      return 'text-forgeBrown'; // The Vault page color
    } else {
      return 'text-forgeOrange-medium'; // Default color
    }
  };

  const getBorderColor = () => {
    if (pathname === '/anthem') {
      return 'border-dpwBlue-light'; // Anthem page color
    } else if (pathname === '/the-collective') {
      return 'border-collectivePink-light'; // The Collective page color
    } else if (pathname === '/the-forge') {
      return 'border-forgeRed-light'; // The Forge page color
    } else if (pathname === '/the-vault') {
      return 'border-vaultPurple-light'; // The Vault page color
    } else {
      return 'border-forgeOrange-dark'; // Default color
    }
  };

  const getShadowColor = () => {
    return pathname === linkTo ? 'shadow-black' : 'shadow-white';
  };

  return (
    <li className={`p-2 rounded-2xl group`}>
      <Link href={linkTo} className="flex flex-row items-center gap-3 py-2">
      <div className={`flex justify-center items-center w-10 h-10 font-semibold border ${getHomeColor()} ${getBorderColor()} ${getShadowColor()} shadow-inner rounded-full transition-colors duration-300 ${
          pathname === linkTo ? 'bg-amber-300' : 'group-hover:bg-amber-300 group-hover:shadow-black'
        }`}>
          {number}
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <p className={`text-medium ${getHomeColor()} `}>{name}</p>
          <p className={`text-xs ${getTextColor()}`}>{subtext}</p>
        </div>
      </Link>
    </li>
  );
}
