"use client"; // This ensures the component runs on the client side

import { useState } from "react";
import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-close.svg"; // Make sure this file exists in the correct path
import Button from "@/components/Button";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 max-[766px]:backdrop-blur">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          {/* Logo */}
          <a href="#hero">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="w-8 h-8" />
            </div>
          </a>

          {/* Navigation for larger screens */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {/* <a href="#clients" className="text-white/70 hover:text-white transition">
                Pets
              </a> */}
              <a href="#features" className="text-white/70 hover:text-white transition">
                Pets
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition">
                Members 
              </a>
              <a href="#consultation" className="text-white/70 hover:text-white transition">
                Code
              </a>
            </nav>
          </div>

          {/* Button and Hamburger Menu Icon */}
          <div className="flex gap-4 items-center">
              <a href="https://mega.nz/file/acwVRI6S#mjDvAjTrXl6cnnGKeCoCBT7X_8Y9LrmNU7ox_1YC8YI" target="_blank" rel="noopener noreferrer">
                <Button>Download The Apk</Button>
              </a>
            {/* Toggle Menu Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4  rounded-lg">
            <nav className="flex flex-col gap-4 text-center">
              {/* <a href="#clients" className="text-white/70 hover:text-white transition" onClick={toggleMenu}>
                Clients
              </a> */}
              <a href="#features" className="text-white/70 hover:text-white transition" onClick={toggleMenu}>
               Pets
              </a>
              <a href="#testimonials" className="text-white/70 hover:text-white transition" onClick={toggleMenu}>
              Members
              </a>
              <a href="#consultation" className="text-white/70 hover:text-white transition" onClick={toggleMenu}>
              Code
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};