"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const RightToLeftIntro = () => {
  const introCoverRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.to(".layer", { xPercent: -100, stagger: { amount: 0.2 } });
    }, introCoverRef);

    return () => cxt.revert();
  }, []);
  return (
    <div ref={introCoverRef}>
      <div className="fixed layer layer-cover z-[600] top-0 left-0 w-full min-h-screen bg-primary-900"></div>
      <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-800 z-[580]"></div>
      <div className="layer layer-cover fixed top-0 left-0 w-full min-h-screen bg-primary-700 z-[540]"></div>
    </div>
  );
};

export default RightToLeftIntro;
