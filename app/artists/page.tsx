import ArtistGrid from "@/components/UI/Artists/artist-names";
import HeroSearch from "@/components/UI/Home/hero-search";
import { BASE_API_URL } from "@/lib/constants";
import { openSans } from "@/lib/fonts";
import { Artist } from "@/lib/types/response";
import Image from "next/image";

export type ArtistResponse = Pick<Artist, "stageName" | "id" | "slug">;

const fetchArtists = async (): Promise<ArtistResponse[]> => {
  try {
    // await new Promise((resolve) => setTimeout(() => resolve(null), 3000));
    const res = await fetch(`${BASE_API_URL}/artists/all`, { next: { revalidate: 60 } });
    return await res.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

const Artists = async () => {
  const artists = await fetchArtists();

  return (
    <>
      <header>
        <div id="jumbo" className="min-h-[40rem] flex items-center relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden h-full select-none">
            <Image
              src={`/images/backgrounds/subscribe_bg.png`}
              alt="home cover"
              id="headCoverImage"
              width={1920}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background-950 to-transparent"></div>

          <div className="absolute top-0 left-0 text-white flex items-center w-full h-full">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-5 gap-2 items-center h-full">
                <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                  <div className="overflow-hidden">
                    <h1
                      className={`${openSans.className} md:text-5xl text-4xl font-extrabold leading-relaxed jumbo-text`}
                    >
                      Find Artists
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <p className="leading-relaxed jumbo-text">Find all available artists.</p>
                  </div>

                  <HeroSearch />
                </div>
                <div className="grid place-content-center"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ArtistGrid artistsResult={artists} />
      </main>
    </>
  );
};

export default Artists;
