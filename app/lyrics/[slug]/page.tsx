import ShareLyrics from "@/components/UI/Lyrics/share";
import { publicApi } from "@/lib/configs/axiosInstance";
import { Lyrics } from "@/lib/types/response";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Params {
  slug: string;
}

interface Props {
  params: Params;
}

const getLyricsDetails = async (slug: string): Promise<Lyrics> => {
  try {
    const res = await publicApi.get(`/lyrics/${slug}`);
    return res.data;
  } catch (error) {
    return notFound();
  }
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  try {
    const lyricsData = await getLyricsDetails(slug);

    const displayTitle = (): string => {
      const featuredArtists = lyricsData.featuredArtists;
      if (!featuredArtists || featuredArtists.length === 0)
        return `${lyricsData.artist.stageName} - ${lyricsData.title} Lyrics`;

      if (featuredArtists.length === 1)
        return `${lyricsData.artist.stageName} - ${lyricsData.title} x ${featuredArtists[0].stageName} Lyrics`;

      const formattedStr = featuredArtists
        .slice(0, featuredArtists.length - 1)
        .map((artist) => `${artist.stageName}`)
        .join(", ");

      return `${lyricsData.artist.stageName} - ${lyricsData.title} x ${formattedStr} & ${
        featuredArtists[featuredArtists.length - 1].stageName
      } Lyrics`;
    };

    return {
      title: displayTitle(),
      description: `${lyricsData.title} by ${lyricsData.artist.stageName} Lyrics: ${lyricsData.lyrics
        .replace(/\n/g, "")
        .slice(0, 120)}...`,
    };
  } catch (error) {
    return {
      title: "Page Not Found",
      description: "Sorry, This page was not found",
    };
  }
}

const LyricsDetails: FC<Props> = async ({ params: { slug } }) => {
  const lyricsData = await getLyricsDetails(slug);

  const renderFeatured = () => {
    const { featuredArtists } = lyricsData;
    if (!featuredArtists || featuredArtists.length === 0) return null;

    if (featuredArtists.length === 1)
      return (
        <>
          <span>
            <Link href={`/artists/${featuredArtists[0].slug}`}>{featuredArtists[0].stageName}</Link>
          </span>
        </>
      );

    const firstPart = featuredArtists.slice(0, featuredArtists.length - 1);

    return (
      <>
        {firstPart.map((artist, index) => (
          <>
            <span key={artist.id}>
              <Link
                href={`/artists/${artist.slug}`}
                className="font-medium border-b border-primary-700 pb-1 duration-300 hover:border-primary-600"
              >
                {artist.stageName}
              </Link>
              {index <= featuredArtists.length - 1 && ", "}
            </span>
          </>
        ))}
        <span>
          <Link
            href={`/artists/${featuredArtists[featuredArtists.length - 1].slug}`}
            className="font-medium border-b border-primary-700 pb-1 duration-300 hover:border-primary-600"
          >
            {featuredArtists[featuredArtists.length - 1].stageName}
          </Link>
        </span>
      </>
    );
  };

  return (
    <>
      <header className="min-h-[20rem] pt-8 bg-primary-800 text-white flex items-center justify-center text-center">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold">{lyricsData.title} Lyrics</h1>
          <div>
            {lyricsData.featuredArtists && lyricsData.featuredArtists.length > 0 && (
              <>
                <p>Other Artist(s)</p>
                <p className="space-x-1 max-w-2xl mx-auto">{renderFeatured()}</p>
              </>
            )}
          </div>
        </div>
      </header>
      <main>
        <div className="container my-[4rem]">
          <div className="text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="whitespace-pre-line rounded-lg">{lyricsData.lyrics}</div>
                <div className="fle items-center justify-center">
                  <div>
                    <Link
                      href={`/artists/${lyricsData.artist.slug}`}
                      className="font-semibold text-primary-400 text-sm"
                    >
                      All {lyricsData.artist.stageName} Albums
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="w-1/2 h-[1px] dark:bg-background-800 bg-background-400 mx-auto"></div>

                <ShareLyrics lyrics={lyricsData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LyricsDetails;
