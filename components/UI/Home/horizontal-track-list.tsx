import { openSans } from "@/lib/fonts";
import { TrackItem } from "@/lib/types/pages";
import Image from "next/image";

export interface Props {
  trackList: TrackItem[];
}

const HorizontalTrackList: React.FC<Props> = ({ trackList }) => {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-2 gap-2 text-white">
        <div className="col-span-2 relative group cursor-pointer overflow-hidden bg-background-800 rounded-lg row-span-2">
          <Image
            src={"/images/backgrounds/home/music1.jpg"}
            alt="a musician"
            width={500}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute  flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
            <div className="space-y-2 p-4 mb-3">
              <p className="font-black text-3xl">Artist Name</p>
              <p>Song/Album Title</p>
            </div>
          </div>
        </div>

        <div className="bg-background-700 relative group cursor-pointer overflow-hidden rounded-lg">
          <Image
            src={"/images/backgrounds/home/music2.jpg"}
            alt="a musician"
            width={500}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute  flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
            <div className="space-y-2 p-4 mb-3">
              <p className="font-black text-3xl">Artist Name</p>
              <p>Song/Album Title</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-2 gap-2 w-full relative group cursor-pointer overflow-hidden overflow-y-auto h-[18rem] rounded-lg bg-background-900">
          <Image
            src={"/images/backgrounds/home/music3.jpg"}
            alt="a musician"
            width={500}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute  flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
            <div className="space-y-2 p-4 mb-3">
              <p className="font-black text-3xl">Artist Name</p>
              <p>Song/Album Title</p>
            </div>
          </div>
          {/* {trackList.map((track) => (
            <div
              key={track.track.album_id}
              className="bg-background-100 dark:bg-background-900 hover:dark:bg-background-800 duration-300 cursor-pointer transition-colors flex-shrink-0 rounded-lg"
            >
              <div className="w-full p-1 space-y-2">
                <p className={`font-bold ${openSans.className}`}>{track.track.album_name}</p>
                <p className="text-sm">{track.track.artist_name}</p>
              </div>
            </div>
          ))} */}
        </div>
        <div className="col-span-2 rounded-lg relative group cursor-pointer overflow-hidden bg-background-600">
          <Image
            src={"/images/backgrounds/home/music4.jpg"}
            alt="a musician"
            width={500}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top  flex items-end-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
            <div className="space-y-2 p-4 mb-3">
              <p className="font-black text-3xl">Artist Name</p>
              <p>Song/Album Title</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg relative group cursor-pointer overflow-hidden bg-background-700">
          <Image
            src={"/images/backgrounds/home/music5.jpg"}
            alt="a musician"
            width={500}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top  flex items-end-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
            <div className="space-y-2 p-4 mb-3">
              <p className="font-black text-3xl">Artist Name</p>
              <p>Song/Album Title</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default HorizontalTrackList;
