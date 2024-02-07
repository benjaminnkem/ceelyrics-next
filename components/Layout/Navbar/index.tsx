"use client";
import Link from "next/link";
import { create } from "zustand";
import { openSans } from "@/lib/fonts";
import { HomeIcon, MenuIcon, SearchIcon, User2Icon, XIcon } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

interface NavLink {
  label: string;
  path: string;
  icon?: JSX.Element;
  notLink?: boolean;
}

interface NavStore {
  links: NavLink[];
}

export const useNavbarStore = create<NavStore>(() => ({
  links: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Artists", path: "/artists" },
    { label: "", path: "/search", icon: <SearchIcon className="text-text-600 dark:text-text-300" size={16} /> },
  ],
}));

const Navbar = () => {
  const { links } = useNavbarStore();
  const { user, clearUser } = useStore();
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(".navContainer", { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 100, ease: "power4.inOut" })
        .fromTo("#logo", { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 100 }, 0)
        .fromTo(".navLink", { xPercent: 20, opacity: 0 }, { xPercent: 0, opacity: 100, stagger: { amount: 0.4 } });

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

  if (pathname?.startsWith("/account")) return null;

  // const noshowRoutes = ["/account/register/", "/account/login/"];

  // for (const route of noshowRoutes) {
  //   if (pathname === route) return null;
  // }

  const renderLink = (link: NavLink) => {
    if (link.notLink) {
      return (
        <div className="flex gap-1 duration-200 items-center cursor-pointer">
          <span>{link.label}</span> {link.icon && link.icon}
        </div>
      );
    } else {
      return (
        <Link href={link.path} className="duration-200 hover:animate-pulse">
          {link.label} {link.icon ?? link.icon}
        </Link>
      );
    }
  };

  const logout = () => {
    clearUser();
    signOut({ redirect: false });
    toast.success("Logged out successfully");
    6;
    router.replace("/");
  };

  return (
    <>
      <nav className="mt-4 top-0 left-0 fixed z-[500] w-full" ref={navbarRef}>
        <div className="container mx-auto">
          <div className="w-full flex items-center justify-between overflow-hidden bg-white dark:bg-background-800 rounded-full py-3 px-5 shadow-xl navContainer">
            <Link
              href={"/"}
              className={`text-xl ${openSans.className} text-black dark:text-white font-extrabold`}
              id="logo"
            >
              Ceelyrics
            </Link>

            <ul className="items-center gap-4 sm:flex hidden">
              {links.map((link, idx) => (
                <li key={idx} className="navLink">
                  {renderLink(link)}
                </li>
              ))}
              <li className="navLink">
                <div>
                  {user ? (
                    <>
                      <div className="flex items-center gap-4">
                        {/* <div className="text-primary-300 font-bold">
                          <Link href={"/dashboard"}>Dashboard</Link>
                        </div> */}

                        <div>
                          <Link href={"/dashboard"}>
                            <button className="bg-primary-700 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-primary-600">
                              Dashboard
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={"/account/login"} target="_blank">
                      <button className="bg-primary-700 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-primary-600">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </li>
            </ul>

            <div className="flex items-center md:gap-6 gap-4 sm:hidden mr-4">
              <Link href={"/"} className="duration-200 hover:animate-pulse">
                <HomeIcon size={20} />
              </Link>
              <SearchIcon size={20} />
              <MenuIcon className="cursor-pointer" onClick={toggleMobileNav} />
            </div>
          </div>
        </div>
      </nav>

      {/* mobile sidebar */}
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
          {links
            .filter((item) => item.path !== "/search")
            .slice(0, links.length - 2)
            .map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="text-xl duration-200 hover:border-white/90 border-2 px-6 py-2 rounded-2xl border-transparent font-semibold"
                onClick={toggleMobileNav}
              >
                {link.label}
              </Link>
            ))}
          <Link href={"/account/register"}>
            <button className="text-xl text-text-50 hover:border-primary-700 px-4 py-2 rounded-3xl border border-transparent font-semibold transition-colors duration-200">
              Account
            </button>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
