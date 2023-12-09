"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "../auth/auth-wrapper";

gsap.registerPlugin(ScrollTrigger);

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const toastOptions: DefaultToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 3000,
    position: "bottom-right",
  };

  return (
    <>
      <SessionProvider>
        <AuthWrapper>
          <Toaster toastOptions={toastOptions} />
          {children}
          <SmoothScroll />
        </AuthWrapper>
      </SessionProvider>
    </>
  );
};

export default Providers;
