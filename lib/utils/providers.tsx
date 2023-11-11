"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { DefaultToastOptions, Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const toastOptions: DefaultToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 3000,
    position: "bottom-center",
  };

  return (
    <>
      <Toaster toastOptions={toastOptions} />
      {children}
      <SmoothScroll />
    </>
  );
};

export default Providers;
