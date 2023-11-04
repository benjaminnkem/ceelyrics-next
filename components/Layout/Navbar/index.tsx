"use client";
import Link from "next/link";
import { create } from "zustand";
import WidthClamp from "../Clamp";
import { poppins } from "@/lib/fonts";
import { SearchIcon } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

interface NavLinks {
  label: string;
  path: string;
  icon?: JSX.Element;
}

interface NavStore {
  links: NavLinks[];
}

export const useNavbarStore = create<NavStore>((set) => ({
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Search", path: "/", icon: <SearchIcon className="text-text-500" size={16} /> },
  ],
}));

const Navbar = () => {
  const { links } = useNavbarStore();
  const navbarRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.5 });

      tl.fromTo(
        "#logo",
        { xPercent: -100, opacity: 0, color: "white" },
        { xPercent: 0, opacity: 100, color: "black" },
        0
      ).fromTo(
        ".navLink",
        { yPercent: 20, opacity: 0, stagger: { amount: 0.2, from: "start" } },
        { yPercent: 0, opacity: 100 }
      );

      return () => cxt.revert();
    }, navbarRef);
  });

  return (
    <nav className="mt-4 top-0 left-0 fixed z-[500] w-full" ref={navbarRef}>
      <WidthClamp>
        <div className="w-full flex items-center justify-between overflow-hidden bg-white rounded-full py-3 px-5 shadow-xl">
          <Link href={"/"} className={`text-xl ${poppins.className} font-extrabold`} id="logo">
            Ceelyrics
          </Link>

          <ul className="flex items-center gap-4">
            {links.map((link, idx) => (
              <li key={idx} className="navLink">
                {link.icon ? (
                  <Link href={link.path} className="flex gap-1 duration-200 hover:animate-pulse items-center">
                    <span>{link.label}</span> {link.icon}
                  </Link>
                ) : (
                  <Link href={link.path} className="duration-200 hover:animate-pulse">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <button className="bg-primary-600 text-text-50 hover:bg-primary-700 px-4 py-2 rounded-3xl transition-colors duration-200">
              Get Started
            </button>
          </ul>
        </div>
      </WidthClamp>
    </nav>
  );
};

export default Navbar;
