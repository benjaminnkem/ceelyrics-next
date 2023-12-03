export interface ArtistData {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  stageName: string;
  bio: string;
  profileImage: string;
  coverImage: string;
  dateOfBirth: string;
  wikipediaLink: string;
  createdAt: string;
  updatedAt: string;
  albums: [];
}

export type AlbumType = "Album" | "EP" | "Single";

export interface Album {
  id: string;
  title: string;
  coverImage: string | null;
  description: string;
  releaseDate: string;
  albumType: AlbumType;
  additionalQuote: string | null;
  createdAt: string;
  updatedAt: string;
}
