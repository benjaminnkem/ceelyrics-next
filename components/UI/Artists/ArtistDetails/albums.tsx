"use client";

import { publicApi } from "@/lib/configs/axiosInstance";
import { Album, ArtistData } from "@/lib/types/response";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { gsap } from "gsap";
import toast from "react-hot-toast";
import { determineAlbumType } from "@/lib/helpers";
import { ArrowLeft } from "lucide-react";

interface Props {
  artistId: string;
  artist: Omit<ArtistData, "albums">;
}

const ArtistAlbums: FC<Props> = ({ artistId, artist }) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[] | null>(null);

  const [infoLoading, setInfoLoading] = useState(false);
  const [_, setSelectedAlbum] = useState<Album>();
  const [albumInfo, setAlbumInfo] = useState<Album>();

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

  const ref = useRef<HTMLDivElement | null>(null);

  const playAnimation = async (album: Album) => {
    gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".__albums_container", {
        opacity: 0,
        yPercent: -10,
      })
        .set(".__albums_container", {
          display: "none",
        })
        .set(".__album_songs", { yPercent: -10, opacity: 0, display: "block" })
        .to(".__album_songs", { opacity: 1, ease: "power4", yPercent: 0 });
    }, ref);

    try {
      setSelectedAlbum(album);
      setInfoLoading(true);
      const res = await publicApi.get<Album>(`/albums/${album.id}`);
      setAlbumInfo(res.data);
    } catch {
      toast.error("Couldn't get album information");
    } finally {
      setInfoLoading(false);
    }
  };

  const revertAnimation = () => {
    gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".__album_songs", { yPercent: -10, opacity: 0 })
        .set(".__album_songs", { display: "none" })
        .set(".__albums_container", {
          display: "grid",
          yPercent: -10,
          opacity: 0,
        })
        .to(".__albums_container", {
          opacity: 1,
          yPercent: 0,
        });
    }, ref);
  };

  return (
    <div ref={ref}>
      <div className="md:grid flex flex-col-reverse grid-cols-2 mt-10 gap-8 container __albums_container">
        <div className="self-start">
          <p className="font-extrabold text-3xl mb-1">Details</p>

          <div className="w-fit bg-background-100 p-4 rounded-lg space-y-3">
            <p>
              <span className="font-semibold">Stage Name:</span> {artist.stageName}
            </p>
            <p>
              <span className="font-semibold">Full Name</span>: {artist.firstName} {artist.middleName} {artist.lastName}
            </p>
            <p>
              <span className="font-semibold">Date Of Birth:</span>{" "}
              {new Intl.DateTimeFormat("en-GB").format(new Date(artist.dateOfBirth as string))}
            </p>
            <div>
              <p className="font-semibold">About Artist:</p>
              <p className="whitespace-pre-line">{artist.bio}</p>
            </div>
          </div>
        </div>
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
                  <p className="font-extrabold text-3xl mb-1">Albums/EPs&lsquo;</p>
                  <div className="grid grid-cols-2 gap-3">
                    {albums.map((album, id) => (
                      <div
                        key={id}
                        className="bg-white relative min-h-[7rem] cursor-pointer group rounded-lg overflow-hidden border border-zinc-100"
                        onClick={() => playAnimation(album)}
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

        <div className="h-[5rem]"></div>
      </div>

      <div className="__album_songs hidden">
        {infoLoading ? (
          <div>
            <ProgressBar borderColor="#dd99ff" barColor="#cc66ff" wrapperClass="mx-auto" />
            <p className="text-sm text-center">
              Loading {albumInfo ? determineAlbumType(albumInfo.albumType) : "Album"} Info
            </p>
          </div>
        ) : (
          <div>
            <div className="container my-[4rem]">
              {albumInfo ? (
                <div className="flex gap-4">
                  <div className="max-w-xl">
                    <div className="w-64 h-64 rounded-xl bg-background-100"></div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold">{albumInfo.title}</p>
                        <p className="font-medium">{albumInfo.releaseDate}</p>
                      </div>
                      <div>
                        <p className="whitespace-pre-line">{albumInfo.description}</p>
                      </div>
                    </div>

                    <div
                      className="flex items-center text-primary-500 cursor-pointer mt-6 gap-2 font-semibold text-sm"
                      onClick={revertAnimation}
                    >
                      <ArrowLeft size={16} /> <span>Go Back</span>
                    </div>
                  </div>

                  <div></div>
                </div>
              ) : (
                <p>No Info found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistAlbums;
