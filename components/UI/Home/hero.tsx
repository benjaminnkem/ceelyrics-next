import WidthClamp from "@/components/Layout/Clamp";
import { openSans } from "@/lib/fonts";
import { gsap } from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import HeroSearch from "./hero-search";

const Hero = () => {
  const headerRef = useRef<HTMLElement>(null);
  const jumboRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      t1.from("#headCoverImage", { scale: 1.1, yPercent: 5 });
    }, headerRef);

    return () => cxt.revert();
  }, []);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t1 = gsap.timeline({ delay: 2.8 });
      t1.from(".jumbo-text", {
        yPercent: 100,
        opacity: 0,
        skewY: 4,
        duration: 1.4,
        ease: "power4.out",
        stagger: { amount: 0.3 },
      }).from(".jumbo-search", { opacity: 0 }, 1);
    }, jumboRef);

    return () => cxt.revert();
  }, []);

  return (
    <header ref={headerRef}>
      <div id="jumbo" className="min-h-[40rem] flex items-center relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden h-full select-none">
          <Image
            src={`/images/backgrounds/home/bg1.jpg`}
            alt="home cover"
            id="headCoverImage"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background-950 to-transparent"></div>

        <div className="absolute top-0 left-0 text-white flex items-center w-full h-full" ref={jumboRef}>
          <WidthClamp>
            <div className="grid md:grid-cols-5 gap-2 items-center h-full">
              <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                <div className="overflow-hidden">
                  <h1
                    className={`${openSans.className} md:text-5xl text-4xl font-extrabold leading-relaxed jumbo-text`}
                  >
                    Unlock Poetry: Discover the Music in Lyrics
                  </h1>
                </div>
                <div className="overflow-hidden">
                  <p className="leading-relaxed jumbo-text">
                    Step into a world of stories and emotions. <span className="font-bold">Lyrics</span> weave tales in
                    every line, capturing the essence of songs you love. Discover, sing along, and unravel the magic of
                    every verse. Join us to explore the powerful storytelling within each lyric.
                  </p>
                </div>
                {/* <div className="mx-auto md:mx-0 w-fit jumbo-text overflow-hidden">
                  <button className="bg-primary-600 hover:bg-primary-700 text-white flex items-center gap-2 text-text-50 px-6 py-[0.4rem] rounded-xl transition-colors duration-200">
                    <span>Explore</span>
                  </button>
                </div> */}

                <HeroSearch />
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
  );
};

export default Hero;
