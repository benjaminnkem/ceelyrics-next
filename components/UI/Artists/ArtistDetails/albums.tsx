"use client";

import { publicApi } from "@/lib/configs/axiosInstance";
import { Album } from "@/lib/types/response";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";

interface Props {
  artistId: string;
}

const ArtistAlbums: FC<Props> = ({ artistId }) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[] | null>(null);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      const res = await publicApi.get<Album[]>(`/artists/albums/${artistId}`);
      setAlbums(res.data);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="self-start w-full">
      {loading ? (
        <div>
          <ProgressBar borderColor="#dd99ff" barColor="#cc66ff" wrapperClass="mx-auto" />
          <p className="text-sm text-center">Loading Albums...</p>
        </div>
      ) : (
        <div>
          {albums && albums.length > 0 ? (
            <div>
              <p className="font-extrabold text-3xl mb-1">Albums</p>
              <div className="grid grid-cols-2 gap-3">
                {albums.map((album, id) => (
                  <div
                    key={id}
                    className="bg-white relative min-h-[7rem] cursor-pointer group rounded-lg overflow-hidden border border-zinc-100"
                  >
                    <div className="absolute top-0 left-0 w-full overflow-hidden h-full select-none">
                      <Image
                        src={`/images/backgrounds/home/music${id < 5 ? id + 1 : "1"}.jpg`}
                        alt={`${album.title} album cover`}
                        width={1920}
                        height={800}
                        className="w-full h-full object-cover group-hover:scale-105 duration-200"
                        draggable={false}
                      />
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t p-4 from-background-950 to-transparent text-white">
                      <p className="text-xl font-extrabold">{album.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Albums Available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ArtistAlbums;
