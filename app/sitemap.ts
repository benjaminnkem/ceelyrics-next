import { publicApi } from "@/lib/configs/axiosInstance";
import { SITE_URL } from "@/lib/constants/variables";
import { Artist } from "@/lib/types/response";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const artistsData = (await publicApi.get<Pick<Artist, "slug">[]>("/artists/sitemap/all")).data;
  const siteArtists: MetadataRoute.Sitemap = artistsData.map((artist) => ({
    url: `${SITE_URL}/artists/${encodeURIComponent(artist.slug)}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...siteArtists,
  ];
}
