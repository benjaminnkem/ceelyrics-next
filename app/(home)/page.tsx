import WidthClamp from "@/components/Layout/Clamp";
import { poppins } from "@/lib/fonts";
import Image from "next/image";

const Home = () => {
  return (
    <header>
      <WidthClamp>
        <div id="jumbo" className="min-h-[30rem] flex items-center">
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
            </div>
            <div className="grid place-content-center">
              <Image
                src={`/images/illustrations/sit-playlist.svg`}
                draggable={false}
                width={600}
                height={600}
                alt="Intro Illustration"
              />
            </div>
          </div>
        </div>
      </WidthClamp>
    </header>
  );
};

export default Home;
