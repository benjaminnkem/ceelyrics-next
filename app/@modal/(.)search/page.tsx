"use client";
import WidthClamp from "@/components/Layout/Clamp";
import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const SearchModal = () => {
  const router = useRouter();

  useLayoutEffect(() => {
    gsap.fromTo(".search_con", { opacity: 0 }, { opacity: 100 });
    gsap.fromTo(".search_con_on", { yPercent: -100 }, { yPercent: 0 });
  });

  return (
    <WidthClamp>
      <div className="bg-black/50 search_con flex items-center z-[4000] justify-center fixed top-0 left-0 w-full h-screen overflow-y-auto overflow-x-hidden">
        <div className="lg:max-w-[40rem] w-11/12 shadow-lg search_con_on rounded-lg bg-white dark:bg-background-800 p-4 relative">
          <XIcon
            className="cursor-pointer absolute -right-3 -top-10 text-white dark:text-text-500"
            onClick={() => router.back()}
          />

          <div className="border-background-900 transition-colors rounded-lg dark:bg-background-900 bg-background-100 justify-between flex items-center w-full p-4">
            <input type="text" className="flex-grow bg-transparent outline-none" placeholder="Search Ceelyrics..." />
            <SearchIcon />
          </div>
        </div>
      </div>
    </WidthClamp>
  );
};

export default SearchModal;
