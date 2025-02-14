"use client";

import { publicApi } from "@/lib/configs/axiosInstance";
import { Album, Artist } from "@/lib/types/response";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { gsap } from "gsap";
import toast from "react-hot-toast";
import { determineAlbumType } from "@/lib/helpers";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  artistId: string;
  artist: Omit<Artist, "albums">;
}

const ArtistAlbums: FC<Props> = ({ artistId, artist }) => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[] | null>(null);

  const [infoLoading, setInfoLoading] = useState(false);
  const [_, setSelectedAlbum] = useState<Album>();
  const [albumInfo, setAlbumInfo] = useState<Album>();

  const [windowSize, setWindowSize] = useState(0);

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

  useEffect(() => {
    setWindowSize(window.innerWidth);

    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    return () => window.removeEventListener("resize", () => {});
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
        .set(".__album_songs", { display: "block", yPercent: -10, opacity: 0 })
        .to(".__album_songs", { opacity: 1, ease: "power4", yPercent: 0 })
        .from(".__lyrics_child", { opacity: 0, stagger: { amount: 1 } });
    }, ref);

    // fetch album details
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
      tl.to(".__album_d_child", { opacity: 0, yPercent: -10, ease: "power4.out", stagger: { amount: 0.3 } })
        .to(
          ".__lyrics_child",
          windowSize < 768
            ? { opacity: 0, ease: "power4.out", stagger: { amount: 0.3 } }
            : { opacity: 0, xPercent: 10, ease: "power4.out", stagger: { amount: 0.3 } },
          0
        )
        .set(".__album_songs", { display: "none" })
        .set(".__albums_container", { display: "grid", yPercent: -10, opacity: 0 })
        .to(".__albums_container", {
          opacity: 1,
          yPercent: 0,
        });
    }, ref);
  };

  return (
    <div ref={ref}>
      <div className="md:grid flex flex-col-reverse md:grid-cols-2 mt-[8rem] gap-8 container __albums_container md:mt-10">
        <div className="self-start">
          <p className="font-extrabold md:text-3xl text-2xl mb-1">Details</p>

          <div className="w-fit bg-background-100 dark:bg-background-900 p-4 rounded-lg space-y-3">
            <div>
              <p className="font-bold text-lg">Stage Name</p>{" "}
              <p className="dark:text-text-200 text-text-700">{artist.stageName}</p>
            </div>
            <div>
              <p className="font-bold text-lg">Full Name</p>
              <p className="dark:text-text-200 text-text-700">
                {artist.firstName} {artist.middleName} {artist.lastName}
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">Date Of Birth</p>
              <p className="dark:text-text-200 text-text-700">
                {new Intl.DateTimeFormat("en-GB").format(new Date(artist.dateOfBirth as string))}
              </p>
            </div>
            <div>
              <p className="font-bold text-lg">About Artist</p>
              <p className="whitespace-pre-line dark:text-text-200 text-text-700">{artist.bio}</p>
            </div>
            <div className="">
              {artist.wikipediaLink && (
                <Link href={"/"} target="_blank">
                  <button className="flex font-bold items-center gap-1">
                    <ExternalLink size={16} />
                    <span>On Wikipedia</span>
                  </button>
                </Link>
              )}
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
                  <p className="font-extrabold md:text-3xl text-2xl mb-1">Albums/EPs&lsquo;</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {albums.map((album, id) => (
                      <div
                        key={id}
                        className="bg-white relative min-h-[7rem] cursor-pointer group rounded-lg overflow-hidden border border-zinc-100 dark:border-background-600"
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

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t p-4 from-background-950 via-transparent to-background-900 text-white">
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

        <div className="md:h-[5rem]"></div>
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
            <div className="container mt-[10rem] mb-[6rem]">
              {albumInfo ? (
                <div className="md:grid grid-cols-2 flex flex-col lg:gap-40 md:gap-24 gap-10">
                  <div className="max-w-xl">
                    <div className="w-full md:h-64 h-52 __album_d_child rounded-xl bg-background-100 dark:bg-background-900 overflow-hidden">
                      <Image
                        src={`/images/backgrounds/home/music${1}.jpg`}
                        alt={`${albumInfo.title} album cover`}
                        width={1920}
                        height={800}
                        className="w-full h-full object-cover group-hover:scale-105 duration-200"
                        draggable={false}
                      />
                    </div>
                    <div className="space-y-4 mt-2">
                      <div className="__album_d_child">
                        <p className="md:text-3xl text-2xl font-extrabold">
                          {albumInfo.title} ({albumInfo.albumType})
                        </p>
                        <p className="font-medium text-text-400">{albumInfo.releaseDate}</p>
                      </div>
                      <div className="__album_d_child">
                        <p className="whitespace-pre-line max-w-md">{albumInfo.description}</p>
                      </div>
                    </div>

                    <div
                      className="flex items-center __album_d_child text-primary-500 cursor-pointer mt-6 gap-2 font-semibold text-sm"
                      onClick={revertAnimation}
                    >
                      <ArrowLeft size={16} /> <span>Go Back</span>
                    </div>
                  </div>

                  <div>
                    {albumInfo.lyrics.length > 0 ? (
                      <div>
                        <p className="text-xl font-bold mb-2 __lyrics_child">Available Songs Lyrics</p>
                        <div className="space-y-2">
                          {albumInfo.lyrics.map((lyric, id) => (
                            <div key={id} className="__lyrics_child">
                              <Link href={`/lyrics/${lyric.slug}`}>
                                <div className="dark:bg-background-900 bg-white duration-200 dark:hover:bg-background-800 shadow-xl rounded-md py-2 px-4">
                                  <p>{lyric.title}</p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="__lyrics_child">No Available lyrics.</p>
                    )}
                  </div>
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
