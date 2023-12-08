"use client";

import { Album } from "@/lib/types/response";
import Link from "next/link";
import { FC } from "react";

const LyricsContainer: FC<{ album: Album }> = ({ album }) => {
  return (
    <div className="text-center sm:text-start space-y-1">
      {album.lyrics.length > 5 ? (
        <div>
          {album.lyrics.slice(0, 5).map((lyric) => (
            <div
              key={lyric.id}
              className="text-text-800 self-start dark:text-text-200 duration-200 hover:bg-background-800 rounded-md p-[2px] hover:text-text-700 dark:hover:text-text-300"
            >
              <Link href={`/lyrics/${lyric.slug}`}>
                <p>Some random text {Math.ceil(Math.random() * 1000)}</p>
              </Link>
            </div>
          ))}

          <button className="text-sm font-bold text-primary-700 dark:text-primary-400">Visit Album</button>
        </div>
      ) : (
        <>
          {album.lyrics.map((lyric) => (
            <div
              key={lyric.id}
              className="text-text-800 self-start dark:text-text-200 duration-200 hover:bg-background-800 rounded-md p-[2px] hover:text-text-700 dark:hover:text-text-300"
            >
              <Link href={`/lyrics/${lyric.slug}`}>
                <p>{lyric.title}</p>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default LyricsContainer;
