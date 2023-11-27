import { openSans } from "@/lib/fonts";
import useCustomSlider from "@/lib/hooks/useSlider";
import { TrackItem } from "@/lib/types/pages";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Props {
  trackList: TrackItem[];
}

const HorizontalTrackList: React.FC<Props> = ({ trackList }) => {
  // const { slideLeft, slideRight, slider } = useCustomSlider(500);

  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-3"></div>

        {/* <h2 className={`${openSans.className} text-4xl font-bold text-center mb-10`}>Popular Lyrics 🔥</h2>
          <div className="flex items-center gap-2">
            <ChevronLeft className="text-white/50 cursor-pointer" size={30} onClick={slideLeft} />

            <div className="flex items-center gap-7 overflow-x-auto" ref={slider}>
              {trackList.map((track) => (
                <div
                  key={track.track.album_id}
                  className="w-80 h-40 p-2 bg-background-100 dark:bg-background-900 flex-shrink-0 rounded-lg flex justify-end flex-col"
                >
                  <div className="w-full p-4 space-y-2">
                    <p className={`font-bold text-3xl ${openSans.className}`}>{track.track.album_name}</p>
                    <p className="text-sm">{track.track.artist_name}</p>
                  </div>
                </div>
              ))}
            </div>

            <ChevronRight className="text-white/50 cursor-pointer" size={30} onClick={slideRight} />
          </div> */}

        <div></div>

        <div className="flex flex-col gap-2 w-full">
          {trackList.map((track) => (
            <div
              key={track.track.album_id}
              className="p-1 bg-background-100 dark:bg-background-900 hover:dark:bg-background-800 duration-300 cursor-pointer transition-colors flex-shrink-0 rounded-lg"
            >
              <div className="w-full p-4 space-y-2">
                <p className={`font-bold ${openSans.className}`}>{track.track.album_name}</p>
                <p className="text-sm">{track.track.artist_name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalTrackList;
