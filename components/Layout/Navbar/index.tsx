"use client";
import Link from "next/link";
import { create } from "zustand";
import WidthClamp from "../Clamp";
import { poppins } from "@/lib/fonts";
import { HomeIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({ delay: pathname === "/" ? 2 : 1 });

      tl.fromTo(".navContainer", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 100, ease: "bounce.out" })
        .fromTo(
          "#logo",
          { xPercent: -100, opacity: 0, color: "white" },
          { xPercent: 0, opacity: 100, color: "black" },
          0
        )
        .fromTo(
          ".navLink",
          { xPercent: 20, opacity: 0 },
          { xPercent: 0, opacity: 100, stagger: { amount: 0.2, from: "start" } }
        );

      return () => cxt.revert();
    }, navbarRef);
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNavOpen]);

  return (
    <>
      <nav className="mt-4 top-0 left-0 fixed z-[500] w-full" ref={navbarRef}>
        <WidthClamp>
          <div className="w-full flex items-center justify-between overflow-hidden bg-white rounded-full py-3 px-5 shadow-xl navContainer">
            <Link href={"/"} className={`text-xl ${poppins.className} font-extrabold`} id="logo">
              Ceelyrics
            </Link>

            <ul className="items-center gap-4 sm:flex hidden select-none">
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
              <button className="bg-primary-600 text-text-50 hover:bg-primary-700 px-4 py-2 rounded-3xl transition-colors duration-200 navLink">
                Get Started
              </button>
            </ul>

            <div className="flex items-center gap-6 sm:hidden mr-4">
              <Link href={"/"} className="duration-200 hover:animate-pulse">
                <HomeIcon size={20} />
              </Link>
              <SearchIcon size={20} />
              <MenuIcon className="cursor-pointer" onClick={toggleMobileNav} />
            </div>
          </div>
        </WidthClamp>
      </nav>

      <aside
        className={`z-[2000] text-white overflow-auto fixed right-0 flex items-center justify-center top-0 bg-black min-h-screen sm:hidden ${
          mobileNavOpen ? "w-full opacity-100 bg-opacity-80" : "w-0 opacity-0"
        } duration-200`}
      >
        <XIcon
          className="absolute top-4 right-4 font-bold cursor-pointer text-xl"
          size={30}
          onClick={toggleMobileNav}
        />

        <div className="flex flex-col gap-4 text-center">
          {links.slice(0, links.length - 1).map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-xl duration-200 hover:border-white/90 border-2 px-6 py-2 rounded-2xl border-transparent font-semibold"
              onClick={toggleMobileNav}
            >
              {link.label}
            </Link>
          ))}
          <button className="text-xl text-text-50 hover:border-primary-700 px-4 py-2 rounded-3xl border border-transparent font-semibold transition-colors duration-200">
            Get Started
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
