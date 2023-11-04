"use client";
import WidthClamp from "@/components/Layout/Clamp";
import { poppins } from "@/lib/fonts";
import { EyeIcon, PlaneIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const HomeContent = () => {
  const introCoverRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from("#ceeText", { yPercent: 100, opacity: 0, duration: 0.5 })
        .from("#ceeTextContainer", { borderColor: "transparent", duration: 0.5 })
        .to(".layer", { xPercent: -100, stagger: { amount: 0.2 } });
    }, introCoverRef);

    return () => cxt.revert();
  });

  return (
    <>
      <div ref={introCoverRef}>
        <div className="fixed layer z-[600] top-0 left-0 w-full min-h-screen bg-primary-900 text-white layer-cover">
          <div className="w-full min-h-screen grid text-center place-content-center">
            <div className="overflow-hidden py-1 border-white border-b-8" id="ceeTextContainer">
              <p className="text-8xl font-extrabold" id="ceeText">
                Ceelyrics<span className="text-primary-500">.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-800 z-[580]"></div>
        <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-700 z-[540]"></div>
      </div>

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
              <div className="grid md:grid-cols-5 gap-2 items-center h-full">
                <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                  <h1 className={`${poppins.className} text-5xl font-extrabold leading-relaxed`}>
                    Unlock Poetry: Discover the Music in Lyrics
                  </h1>
                  <p className="leading-relaxed">
                    Step into a world of stories and emotions. <span className="font-bold">Lyrics</span> weave tales in
                    every line, capturing the essence of songs you love. Discover, sing along, and unravel the magic of
                    every verse. Join us to explore the powerful storytelling within each lyric.
                  </p>
                  <div className="mx-auto md:mx-0 w-fit">
                    <button className="border-primary-600 border flex items-center gap-2 text-text-50 hover:bg-primary-600 px-4 py-2 rounded-xl transition-colors duration-200">
                      <span>Explore</span> <PlaneIcon size={16} />
                    </button>
                  </div>
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
      </header>

      <main>
        <section className="my-16">
          <WidthClamp>
            <h2 className={`${poppins.className} text-4xl font-bold text-center mb-10`}>Popular Lyrics 🔥</h2>
            <div className="flex items-center overflow-x-hidden">
              <div className="space-y-16">
                <div className="flex items-center gap-7 overflow-x-auto">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className="w-80 h-80 p-2 bg-background-100 flex-shrink-0 rounded-lg relative">
                      <div className="absolute left-0 bottom-0 h-1/2 w-full p-4 space-y-2">
                        <p className={`font-bold text-3xl ${poppins.className}`}>Red Sky</p>
                        <p className="text-sm font-light">Taylor Swift</p>
                        <div className="border border-text-200 w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mx-auto w-fit">
                  <button className="border-background-600 border-b-2 flex items-center gap-2 hover:bg-background-200 px-4 py-2 shadow-md rounded-lg transition-colors duration-200">
                    <span>Discover More</span> <SearchIcon size={20} />
                  </button>
                </div>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className="my-[10rem]">
          <WidthClamp>
            <div className="grid grid-cols-2 gap-12">
              <div className="grid place-content-center">
                <div className="w-auto min-h-[30rem] aspect-square bg-background-200 rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-text-700">Artist</p>
                  <h4 className={`${poppins.className} text-3xl font-bold`}>Taylor Swift</h4>
                </div>
                <div>
                  <p className="text-text-700">Album</p>
                  <h4 className={`${poppins.className} text-2xl font-semibold`}>Heartful</h4>
                </div>
                <div>
                  <p className="text-text-700">Release Date</p>
                  <h4 className={`${poppins.className} text-xl font-semibold`}>10th June, 2022</h4>
                </div>

                <button className="flex items-center border-accent-400 gap-1 border-b-2 duration-100 hover:border-b-4 py-1">
                  <span>View Album</span> <EyeIcon size={18} />
                </button>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className="my-[10rem]">
          <WidthClamp>
            <h3 className={`${poppins.className} text-4xl font-bold mb-10`}>Popular Genres</h3>
            <div className="space-y-16">
              <div className="flex items-center gap-7 overflow-x-auto">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-40 h-40 p-2 bg-background-100 flex-shrink-0 rounded-lg flex items-center justify-center"
                  >
                    <p className="font-bold">Genre</p>
                  </div>
                ))}
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className="my-[10rem]">
          <WidthClamp>
            <div className="bg-primary-100 rounded-xl flex items-center justify-center py-6 px-8 min-h-[16rem]">
              <div className="space-y-6">
                <div>
                  <h4 className="text-center text-2xl font-extrabold">Subscribe to our news letter ✨</h4>
                  <p className="text-sm">We promise not to span you, and you can opt-out at anytime.</p>
                </div>
                <div className="bg-primary-200 p-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="bg-transparent flex-grow outline-none p-2 w-full placeholder:text-white"
                      placeholder="Enter your email..."
                    />
                    <button className="rounded-full bg-primary-600 text-primary-50 px-4 py-2 font-semibold">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </WidthClamp>
        </section>
      </main>
    </>
  );
};

export default HomeContent;
