import ShareLyrics from "@/components/UI/Lyrics/share";
import { publicApi } from "@/lib/configs/axiosInstance";
import { Lyrics } from "@/lib/types/response";
import { Metadata } from "next";
import Image from "next/image";
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

    return {
      title: `${lyricsData.artist.stageName} - ${lyricsData.title} Lyrics | Ceelyrics`,
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

  return (
    <>
      <header className="min-h-[20rem] bg-primary-800 text-white flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-extrabold">{lyricsData.title} Lyrics</h1>
        </div>
      </header>
      <main>
        <div className="container my-[4rem]">
          <div className="text-center">
            <div className="space-y-8">
              <div className="whitespace-pre-line rounded-lg">{lyricsData.lyrics}</div>

              <div className="space-y-2">
                <div className="w-1/2 h-[1px] dark:bg-background-800 bg-background-400 mx-auto"></div>

                <ShareLyrics />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LyricsDetails;
