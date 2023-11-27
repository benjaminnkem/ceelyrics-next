"use client";
import WidthClamp from "@/components/Layout/Clamp";
import { openSans } from "@/lib/fonts";
import { EyeIcon, PlaneIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { TrackItem } from "@/lib/types/pages";
import HorizontalTrackList from "./horizontal-track-list";
import Hero from "./hero";

export interface Props {
  trackList: TrackItem[];
}

const HomeContent: React.FC<Props> = ({ trackList }) => {
  const introCoverRef = useRef<HTMLDivElement>(null);
  const subscribeRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from("#ceeTextContainer", { borderColor: "transparent", duration: 0.5 })
        .from("#ceeText", { yPercent: 100, opacity: 0, duration: 0.5 })
        .from("#ceeDot", { xPercent: 100, opacity: 0, ease: "elastic.out(1,0.3)", duration: 0.5 })
        .to(".layer", { xPercent: -100, stagger: { amount: 0.2 } });
    }, introCoverRef);

    return () => cxt.revert();
  }, []);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: subscribeRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
      t1.from("#subImg", { yPercent: 25 });
    }, subscribeRef);

    return () => cxt.revert();
  }, []);
  return (
    <>
      <div ref={introCoverRef}>
        <div className="fixed layer z-[600] top-0 left-0 w-full min-h-screen bg-primary-900 text-white layer-cover">
          <div className="w-full min-h-screen grid text-center place-content-center">
            <div
              className="overflow-hidden py-1 border-white lg:border-b-8 md:border-b-[6px] border-b-[5px] flex"
              id="ceeTextContainer"
            >
              <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold" id="ceeText">
                Ceelyrics
              </p>
              <span
                className="text-primary-500 lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold"
                id="ceeDot"
              >
                .
              </span>
            </div>
          </div>
        </div>
        <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-800 z-[580]"></div>
        <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-700 z-[540]"></div>
      </div>

      <Hero />

      <main>
        <section className="my-16">
          <WidthClamp>
            <HorizontalTrackList trackList={trackList} />

            <div className="mx-auto flex items-center justify-center mt-16">
              <button className="border-background-600 border-b-2 flex items-center gap-2 hover:bg-background-200 px-4 py-2 shadow-md rounded-lg transition-colors duration-200">
                <span>Discover More</span> <SearchIcon size={20} />
              </button>
            </div>
          </WidthClamp>
        </section>

        <section className="md:my-[10rem] my-20">
          <WidthClamp>
            <h3 className={`${openSans.className} md:text-4xl text-3xl text-center font-bold mb-10`}>Trending Album</h3>
            <div className="grid md:grid-cols-2 lg:gap-12 md:gap-10 gap-8">
              <div className="flex items-center justify-center w-full min-h-[16rem] md:h-auto">
                <div className="md:w-auto lg:min-h-[30rem] md:min-h-[25rem] w-full min-h-[16rem] md:aspect-square bg-background-200 dark:bg-background-800 rounded-lg"></div>
              </div>
              <div className="space-y-6 text-center md:text-start">
                <div>
                  <p className="text-text-700">Artist</p>
                  <h4 className={`${openSans.className} text-3xl font-bold`}>Taylor Swift</h4>
                </div>
                <div>
                  <p className="text-text-700">Album</p>
                  <h4 className={`${openSans.className} text-2xl font-semibold`}>Heartful</h4>
                </div>
                <div>
                  <p className="text-text-700">Release Date</p>
                  <h4 className={`${openSans.className} text-xl font-semibold`}>10th June, 2022</h4>
                </div>

                <button className="flex items-center border-accent-400 gap-1 border-b-2 mx-auto md:mx-0 duration-100 hover:border-b-4 py-1">
                  <span>View Album</span> <EyeIcon size={18} />
                </button>
              </div>
            </div>
          </WidthClamp>
        </section>

        <section className="md:my-[10rem] my-20">
          <WidthClamp>
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
          </WidthClamp>
        </section>

        <section className="md:my-[10rem] my-20" ref={subscribeRef}>
          <WidthClamp>
            <div className="relative bg-primary-100 rounded-xl overflow-hidden py-6 px-8 min-h-[16rem]">
              <div className="absolute top-0 flex items-center justify-center left-0 w-full h-full">
                <Image
                  src={"/images/backgrounds/subscribe_bg.png"}
                  alt="subscribe background"
                  id="subImg"
                  width={1400}
                  height={600}
                  className="w-full h-full object-cover scale-150"
                />
              </div>

              <div className="absolute top-0 text-white flex items-center justify-center left-0 w-full h-full">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-center text-2xl font-extrabold">Subscribe to our news letter ✨</h4>
                    <p className="text-sm">We promise not to span you, and you can opt-out at anytime.</p>
                  </div>
                  <div className="border border-primary-200 p-1 rounded-full">
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
            </div>
          </WidthClamp>
        </section>
      </main>
    </>
  );
};

export default HomeContent;
