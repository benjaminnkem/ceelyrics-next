import ArtistGrid from "@/components/UI/Artists/artist-names";
import ArtistsHeader from "@/components/UI/Artists/header";
import { BASE_API_URL } from "@/lib/constants";
import { Artist } from "@/lib/types/response";

export type ArtistResponse = Pick<Artist, "stageName" | "id" | "slug">;

const fetchArtists = async (): Promise<ArtistResponse[]> => {
  try {
    // await new Promise((resolve) => setTimeout(() => resolve(null), 3000));
    const res = await fetch(`${BASE_API_URL}/artists/all`, { next: { revalidate: 60 } });
    return await res.json();
  } catch (e) {
    return [];
  }
};

const Artists = async () => {
  const artists = await fetchArtists();

  return (
    <>
      <ArtistsHeader />
      <main>
        <ArtistGrid artistsResult={artists} />
      </main>
    </>
  );
};

export default Artists;
