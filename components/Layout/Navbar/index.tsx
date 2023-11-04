"use client";
import Link from "next/link";
import { create } from "zustand";
import WidthClamp from "../Clamp";
import { poppins } from "@/lib/fonts";
import { SearchIcon } from "lucide-react";

interface NavLinks {
  label: string;
  path: string;
  icon?: JSX.Element;
}

interface NavStore {
  links: NavLinks[];
}

const useNavbarStore = create<NavStore>((set) => ({
  links: [
    { label: "Home", path: "/" },
    { label: "Contact Us", path: "/" },
    { label: "About", path: "/" },
    { label: "Search", path: "/", icon: <SearchIcon className="text-text-500" size={16} /> },
  ],
}));

const Navbar = () => {
  const { links } = useNavbarStore();

  return (
    <nav className="mt-4 top-0 left-0 fixed w-full">
      <WidthClamp>
        <div className="w-full flex items-center justify-between bg-white rounded-full py-4 px-6 shadow-xl">
          <Link href={"/"} className={`text-xl ${poppins.className} font-extrabold`}>
            Ceelyrics
          </Link>

          <ul className="flex items-center gap-4">
            {links.map((link, idx) => (
              <li key={idx}>
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
            <button className="bg-primary-600 text-text-50 hover:bg-primary-700 px-4 py-2 rounded-2xl transition-colors duration-200">
              Account
            </button>
          </ul>
        </div>
      </WidthClamp>
    </nav>
  );
};

export default Navbar;
