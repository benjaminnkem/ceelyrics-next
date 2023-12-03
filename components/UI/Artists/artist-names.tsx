"use client";

import { ArtistResponse } from "@/app/artists/page";
import { letters } from "@/lib/mock";
import { Search } from "lucide-react";
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
  };

  const showHidden = () => {};

  return (
    <div className="container my-16" ref={artistsRef}>
      <div className="grid grid-cols-12 gap-4">
        {letters.map((letter, id) => {
          const letterClass = classNames([
            "rounded-full border-4 border-transparent artist_letter opacity-0 text-xl font-semibold cursor-pointer",
            "duration-200 hover:shadow-2xl flex items-center justify-center shadow py-2 bg-white",
            { "border-primary-300 shadow-2xl": selectedLetter === letter },
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
          <span className="capitalize text-primary-400">{selectedLetter}</span>
        </h2>
        {selectedLetter && (
          <div className="grid grid-cols-4 gap-4">
            {artists?.map((artist, id) => (
              <div key={id}>
                <Link href={`/artists/${artist.id}`}>
                  <div className="rounded-xl font-semibold cursor-pointer duration-300 hover:shadow-2xl flex items-center justify-center shadow py-4 bg-white">
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
