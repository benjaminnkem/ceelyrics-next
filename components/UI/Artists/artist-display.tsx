"use client";

import { ArtistResponse } from "@/app/(public_pages)/artists/page";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./style.css";

const ArtistGrid: React.FC<{ artistsResult: ArtistResponse[] | undefined }> = ({}) => {
  const artistsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.context(() => {
      gsap.to(".artist_letter", { opacity: 1, yPercent: 40, ease: "power1.out", stagger: { amount: 0.5 } });
    }, artistsRef);
  });

  const transitionNames = () => {
    gsap.context(() => {
      gsap.from(".__artist_letter_", {
        opacity: 0,
        yPercent: 10,
        ease: "power4",
        stagger: { amount: 0.3 },
      });
    }, artistsRef);
  };

  return (
    <>
      <div className="relative timeline space-y-8 md:space-y-0 container grid grid-cols-2 items-center gap-y-16 mb-[8rem]">
        <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative">
          <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
            <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
              1
            </span>
            <Image
              src={"/images/artists/burna.jpg"}
              alt="image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
          <p className="font-bold text-lg">Connect Wallet</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam hic distinctio ad, nobis unde
            consectetur veritatis odit molestiae facere!
          </p>
        </div>

        <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
          <p className="font-bold text-lg">New Profile Card</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam hic distinctio ad, nobis unde
            consectetur veritatis odit molestiae facere!
          </p>
        </div>

        <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative right-con">
          <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
            <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
              2
            </span>
            <Image
              src={"/images/artists/burna.jpg"}
              alt="image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="xl:px-[12rem] lg:px-[8rem] md:px-[4rem] px-8 relative">
          <div className="max-h-[20rem] min-h-[12rem] rounded-lg border-zinc-400">
            <span className="hidden duration-200 text-xl text-white font-extrabold bullet-edu sm:block bg-primary group-hover:bg-primary md:grid place-content-center">
              3
            </span>
            <Image
              src={"/images/artists/burna.jpg"}
              alt="image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="xl:px-[12rem] lg:px-[8rem] space-y-3 md:px-[4rem] px-8 relative">
          <p className="font-bold text-lg">Keep or Sell your profile Cards</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam hic distinctio ad, nobis unde
            consectetur veritatis odit molestiae facere!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 container">
        <div className="col-span-2 min-h-10">
          <p className="text-center uppercase font-extrabold text-lg text-primary-600">Suggestions</p>
          <div className="md:flex items-center space-y-3 md:space-y-0 text-center md:text-start flex-wrap gap-4 md:mt-4 mt-2">
            {Array.from({ length: 20 }).map((_, id) => (
              <p key={id} className="font-semibold hover:text-zinc-900 text-zinc-500 duration-200 cursor-pointer">
                Artist Name
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-6 min-h-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {Array.from({ length: 10 }).map((_, id) => (
            <div key={id} className="border border-zinc-400 rounded-lg relative max-h-[12rem] overflow-hidden">
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
          <button className="text-primary font-bold text-purple-500 border-b pb-1 border-primary-500">
            See more...
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center"></div>
    </>
  );
};

export default ArtistGrid;
