"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

gsap.registerPlugin(ScrollTrigger);

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const toastOptions: DefaultToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 3000,
    position: "top-right",
  };

  return (
    <>
      <SessionProvider>
        <Toaster toastOptions={toastOptions} />
        {children}
        <SmoothScroll />
      </SessionProvider>
    </>
  );
};

export default Providers;
