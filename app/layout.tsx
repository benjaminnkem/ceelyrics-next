import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "@/lib/fonts";
import Providers from "@/lib/utils/providers";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceelyrics.com"),
  applicationName: "Ceelyrics",
  title: "Ceelyrics - Discover the Music in Lyrics",
  description: "Ceelyrics is a next generation lyrics provider with downloadable musics.",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

// const KofiButton = dynamic(() => import("@/components/Common/Kofi/index"));

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
      <body className={`${satoshi.className} dark:bg-background-950 dark:text-[#f6f6f6]`}>
        <Providers>
          <Navbar />
          {props.children}
          {props.modal}
          <Footer />
        </Providers>

        {/* <KofiButton /> */}
      </body>
    </html>
  );
};

export default RootLayout;
