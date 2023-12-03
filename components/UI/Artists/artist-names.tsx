"use client";

import { ArtistResponse } from "@/app/artists/page";
import { letters } from "@/lib/mock";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import classNames from "classnames";
import Link from "next/link";

const ArtistGrid: React.FC<{ artistsResult: ArtistResponse[] | undefined }> = ({ artistsResult }) => {
  const artistsRef = useRef<HTMLDivElement>(null);
  const [selectedLetter, setSelectedLetter] = useState<string>("a");
  const [artists, setArtists] = useState(artistsResult?.filter((artist) => artist.stageName[0] === "a"));

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap.to(".artist_letter", { opacity: 1, yPercent: 40, ease: "power1.out", stagger: { amount: 0.5 } });
    }, artistsRef);
    return () => cxt.revert();
  }, []);

  const filterArtists = (letter: string) => {
    setSelectedLetter(letter);

    const filteredArtists = artistsResult?.filter((artist) => artist.stageName[0] === letter);
    setArtists(filteredArtists);
    transitionNames();
  };

  const transitionNames = () => {
    gsap.context(() => {
      gsap.from(".__artist_letter_", {
        opacity: 0,
        yPercent: 10,
        ease: "power4",
        stagger: { amount: 0.4 },
      });
    }, artistsRef);
  };

  return (
    <div className="container my-16" ref={artistsRef}>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-5 md:gap-4 gap-2">
        {letters.map((letter, id) => {
          const letterClass = classNames([
            "rounded-full border-4 artist_letter opacity-0 md:text-xl md:font-semibold cursor-pointer",
            "duration-200 flex items-center justify-center py-2 bg-white dark:bg-background-900 font-medium",
            { "border-primary-300 shadow-2xl": selectedLetter === letter },
            { "border-transparent hover:shadow-2xl shadow": selectedLetter !== letter },
          ]);
          return (
            <div key={id} className={letterClass} onClick={() => filterArtists(letter)}>
              <span className="capitalize">{letter}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-16 space-y-4">
        <h2 className="text-4xl font-extrabold">
          <span className="capitalize text-primary-400">
            {selectedLetter}{" "}
            <span className="text-sm text-black dark:text-text-500 font-normal">({artists?.length})</span>
          </span>
        </h2>
        {selectedLetter && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4">
            {artists?.map((artist, id) => (
              <div key={id} className="__artist_letter_">
                <Link href={`/artists/${artist.id}`}>
                  <div className="rounded-xl font-semibold cursor-pointer duration-300 hover:shadow-2xl flex items-center justify-center shadow py-4 bg-white dark:bg-background-900">
                    <span>{artist.stageName}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistGrid;
