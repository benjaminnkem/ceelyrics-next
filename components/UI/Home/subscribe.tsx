"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

const SubscribeSection = () => {
  const subscribeRef = useRef<HTMLElement>(null);

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
    <section className="md:my-[10rem] my-20" ref={subscribeRef}>
      <div className="container">
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
                <p className="text-sm">We promise not to spam you, and you can opt-out at anytime.</p>
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
      </div>
    </section>
  );
};

export default SubscribeSection;
