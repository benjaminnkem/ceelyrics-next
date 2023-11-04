"use client";
import SmoothScroll from "@/components/Chore/smooth-scroll";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <SmoothScroll />
    </>
  );
};

export default Providers;
