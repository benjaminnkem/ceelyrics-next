import { openSans } from "@/lib/fonts";
import { SearchIcon } from "lucide-react";
import { TrackItem } from "@/lib/types/pages";
import ArtistHomeGrid from "./horizontal-track-list";
import Hero from "./hero";
import SubscribeSection from "./subscribe";

export interface Props {
  trackList: TrackItem[];
}

const HomeContent: React.FC<Props> = ({ trackList }) => {
  return (
    <>
      <Hero />

      <main>
        <section className="my-16">
          <div className="container">
            <ArtistHomeGrid trackList={trackList} />

            <div className="mx-auto flex items-center justify-center mt-16">
              <button className="border-background-600 border-b-2 flex items-center gap-2 hover:bg-background-200 px-4 py-2 shadow-md rounded-lg transition-colors duration-200">
                <span>Discover More</span> <SearchIcon size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="md:my-[6rem] my-10 container mx-auto">
          <div className="grid md:grid-cols-2 md:gap-16 gap-8">
            <div>
              <h3 className={`${openSans.className}  text-3xl font-bold mb-6`}>Trending Album</h3>
              <div>
                <div className="w-full min-h-[16rem] bg-background-200 dark:bg-background-800 rounded-lg"></div>
                <div className="space-y-6 text-center md:text-start">
                  <div>
                    <p className="text-text-700">Artist</p>
                    <h4 className={`${openSans.className} md:text-2xl text-xl font-bold`}>Taylor Swift</h4>
                  </div>
                  <div>
                    <p className="text-text-700">Album</p>
                    <h4 className={`${openSans.className} text-2xl font-semibold`}>Heartful</h4>
                  </div>
                  <div>
                    <p className="text-text-700">Release Date</p>
                    <h4 className={`${openSans.className} text-xl font-semibold`}>10th June, 2022</h4>
                  </div>

                  <button className="flex items-center border-accent-400 gap-1 border-b-2 mx-auto md:mx-0 duration-100 py-1">
                    <span>View Album</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className={`${openSans.className} md:text-2xl text-xl font-bold mb-6`}>Chart</h3>

              <div className="space-y-3">
                {new Array(10).fill(null).map((_, id) => (
                  <div
                    key={id}
                    className="w-full md:p-4 p-2 rounded-lg group bg-white border border-background-200 dark:bg-background-800"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-end gap-4 cursor-pointer">
                        <p className="font-medium text-2xl">{id + 1}.</p>
                        <p className="text-lg">Travis Scott - In Berlin Again</p>
                      </div>

                      {/* <div className="flex items-center">
                        <EyeIcon className="" size={20} />
                        <span className="text-sm">2k</span>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="md:my-[8rem] my-20 container mx-auto">
          <div>
            <h3 className={`${openSans.className} md:text-4xl text-3xl text-center font-bold mb-10`}>Popular Genres</h3>
            <div className="space-y-16">
              <div className="flex items-center gap-7 overflow-x-auto">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-40 h-40 p-2 bg-background-100 dark:bg-background-900 flex-shrink-0 rounded-lg flex items-center justify-center"
                  >
                    <p className="font-bold">Genre</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SubscribeSection />
      </main>
    </>
  );
};

export default HomeContent;
