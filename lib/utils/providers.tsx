"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <SmoothScroll />
    </>
  );
};

export default Providers;
