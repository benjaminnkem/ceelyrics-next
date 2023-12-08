import LyricsContainer from "@/components/UI/Lyrics/lyrics-container";
import { BASE_API_URL } from "@/lib/constants/variables";
import { Album } from "@/lib/types/response";
import Image from "next/image";
import Link from "next/link";

const getLatestAlbums = async (): Promise<Album[]> => {
  try {
    // await new Promise((resolve) => setTimeout(() => resolve(null), 5000));

    const res = await fetch(`${BASE_API_URL}/albums/lyrics-page`, { next: { revalidate: 60 } });
    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

const Page = async () => {
  const albumsData = await getLatestAlbums();

  return (
    <>
      <main>
        <div className="h-[6rem]"></div>

        <div className="container mb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid gap-5">
          {albumsData.map((album, id) => (
            <>
              {album.lyrics && album.lyrics.length > 0 && (
                <div key={id} className="p-4 dark:bg-background-900 self-start bg-white shadow-xl rounded-lg">
                  <div className="flex flex-col gap-2">
                    <div>
                      <Link href={`#`} title="View Album Info">
                        <div className="border-2 min-h-[10rem] grid place-content-center relative border-zinc-100/20 overflow-hidden rounded-lg">
                          <Image
                            src={"/images/backgrounds/home/music3.jpg"}
                            alt="a musician"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover absolute top-0 left-0"
                            draggable={false}
                          />
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background-900 flex items-end">
                            <div className="text-white p-2">
                              <p className="text-3xl font-extrabold">{album.title}</p>
                              <p className="opacity-80">{album.artist.stageName}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <LyricsContainer album={album} />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </main>
    </>
  );
};

export default Page;
