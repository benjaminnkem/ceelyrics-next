import { publicApi } from "@/lib/configs/axiosInstance";
import { Lyrics } from "@/lib/types/response";
import { Metadata } from "next";
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
      <header></header>
      <main></main>
    </>
  );
};

export default LyricsDetails;
