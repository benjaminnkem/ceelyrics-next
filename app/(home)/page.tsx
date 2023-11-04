import WidthClamp from "@/components/Layout/Clamp";
import { poppins } from "@/lib/fonts";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <header>
      <div id="jumbo" className="min-h-[40rem] flex items-center relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden h-full select-none">
          <Image
            src={`/images/backgrounds/home.jpg`}
            alt="home cover"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black"></div>

        <div className="absolute top-0 left-0 text-white flex items-center w-full h-full">
          <WidthClamp>
            <div className="grid grid-cols-2 gap-2 items-center h-full">
              <div className="space-y-4">
                <h1 className={`${poppins.className} text-5xl font-extrabold leading-relaxed`}>
                  Unlock Poetry: Discover the Music in Lyrics
                </h1>
                <p className="leading-relaxed">
                  Step into a world of stories and emotions. <span className="font-bold">Lyrics</span> weave tales in
                  every line, capturing the essence of songs you love. Discover, sing along, and unravel the magic of
                  every verse. Join us to explore the powerful storytelling within each lyric.
                </p>
                <button className="bg-primary-600 flex items-center gap-1 text-text-50 hover:bg-primary-700 px-4 py-2 rounded-xl transition-colors duration-200">
                  <span>Search for lyrics</span> <SearchIcon size={16} />
                </button>
              </div>
              <div className="grid place-content-center">
                {/* <Image
                  src={`/images/illustrations/sit-playlist.svg`}
                  draggable={false}
                  width={600}
                  height={600}
                  alt="Intro Illustration"
                /> */}
              </div>
            </div>
          </WidthClamp>
        </div>
      </div>

      <div className="h-[30rem]"></div>
    </header>
  );
};

export default Home;
