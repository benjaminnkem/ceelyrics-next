"use client";

import { ArtistResponse } from "@/app/(public_pages)/artists/page";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { generateRandomNumber } from "@/lib/helpers";

const ArtistGrid: React.FC<{ artistsResult: ArtistResponse[] | undefined }> = ({}) => {
  const artistsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.context(() => {
      gsap.to(".artist_letter2", { opacity: 1, yPercent: 40, ease: "power1.out", stagger: { amount: 0.5 } });
    }, artistsRef);
  });

  const transitionNames = () => {
    gsap.context(() => {
      gsap.from(".__artist_letter2_", {
        opacity: 0,
        yPercent: 10,
        ease: "power4",
        stagger: { amount: 0.3 },
      });
    }, artistsRef);
  };

  return (
    <div className="grid grid-cols-8 gap-4 container">
      <div className="col-span-2 min-h-10">
        <p className="text-center uppercase font-extrabold text-lg text-primary-600">Suggestions</p>
        <div className="md:flex items-center space-y-3 md:space-y-0 text-center md:text-start flex-wrap gap-4 md:mt-4 mt-2">
          {Array.from({ length: 20 }).map((_, id) => (
            <p
              key={id}
              className="font-semibold hover:text-zinc-900 text-zinc-500 duration-200 cursor-pointer"
              style={{ fontSize: `${generateRandomNumber(12, 20)}px` }}
            >
              Artist Name
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-6 min-h-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {Array.from({ length: 10 }).map((_, id) => (
          <div
            key={id}
            className="border border-zinc-400 dark:border-zinc-700 rounded-lg relative max-h-[12rem] overflow-hidden"
          >
            <Image
              src={
                id % 2 === 0
                  ? "/images/artists/burna.jpg"
                  : id % 3 === 0
                  ? "/images/artists/wizkid.png"
                  : "/images/artists/davido.jpg"
              }
              alt=""
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>
            <div className="absolute overflow-hidden top-0 text-white flex cursor-pointer group items-end justify-center py-4 left-0 w-full h-full">
              <p className="font-extrabold text-lg">Burna Boy</p>
              <ArrowUpRight className="opacity-0 scale-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 duration-300" />
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <div></div>
      <div className="mb-10">
        <button className="text-primary font-bold text-purple-500 border-b pb-1 border-primary-500">See more...</button>
      </div>
    </div>
  );
};

export default ArtistGrid;
