"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ElevatorLink from "./ElevatorLink";

export default function MobileMenu({ isMobileMenuOpen, setMobileMenuOpen, getBackgroundColor }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    
      useEffect(() => {
        const toggleBodyScroll = () => {
          document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
        };
    
        toggleBodyScroll();
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isMobileMenuOpen]);
    
      const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
      };

  return (
    <>
      {/* Menu button when closed */}
      
    <div className={isMobileMenuOpen ? "hidden" : "lg:hidden flex absolute top-2 right-2 flex-row gap-4 text-forgeGray"}>
        <button
        id="open-mobile-menu"
        aria-label="open-mobile-menu"
        onClick={toggleMobileMenu}
        >
            <AiOutlineMenu className="h-10 w-10 hover:text-vaultPurple-dark" />
        </button>
        </div>
      

    {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          data-aos="slide-down"
          data-aos-duration="800"
          data-aos-once="true"
          className={`lg:hidden z-[9999] transition duration-300 text-forgeGray hover:text-vaultPurple-dark p-2 fixed top-2 right-2 animate__animated animate__rotateIn`}
        >
          <AiOutlineClose className="h-8 w-10" />
        </button>
      )}

      {/* Fullscreen menu when open */}
      {isMobileMenuOpen && (
          <nav className={`fixed -top-2 -left-14 w-[120vw] h-[100vh] ${getBackgroundColor()} z-[9998] flex flex-col justify-center items-center p-10 font-medium text-2xl`} data-aos="slide-down"
          data-aos-duration="800"
          data-aos-once="true">
            <ul className="space-y-8 text-start text-forgeBrown" onClick={{toggleMobileMenu}}>
              <ElevatorLink linkTo="/" section="" number="R" name="Roof Top" subtext="Main Page" />
              <ElevatorLink linkTo="/anthem" section="anthem" number="3" name="Anthem" subtext="Third Floor" />
              <ElevatorLink linkTo="/the-collective" section="the-collective" number="2" name="The Collective" subtext="Second Floor" />
              <ElevatorLink linkTo="/the-forge" section="the-forge" number="1" name="The Forge" subtext="Ground Floor" />
              <ElevatorLink linkTo="/the-vault" section="the-vault" number="B" name="The Vault" subtext="Basement Floor" />
            </ul>
          </nav>   
      )}
    </>
  );
}