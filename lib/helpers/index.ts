import { AlbumType } from "../types/response";

export const determineAlbumType = (albumType: AlbumType) => {
  let result = "";
  switch (albumType) {
    case "Album":
      result = "Album";
      break;
    case "EP":
      result = "EP";
      break;
    case "Single":
      result = "Single";
      break;
    default:
      result = "Album";
      return "Album";
  }

  return result;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
