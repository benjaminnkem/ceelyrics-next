import type { Metadata } from "next";
import { satoshi } from "@/lib/fonts";
import Providers from "@/lib/utils/providers";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ReactNode } from "react";
import "../public/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceelyrics.com"),
  applicationName: "Ceelyrics",
  title: {
    default: "Ceelyrics - Discover the Music in Lyrics",
    template: `%s | Ceelyrics`,
  },
  description:
    "Ceelyrics redefines the lyrics experience with a cutting-edge platform, offering downloadable music alongside lyrical brilliance. Elevate your music journey with us.",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
      <body className={`${satoshi.className} dark:bg-background-950 dark:text-[#f6f6f6]`}>
        <Providers>
          <Navbar />
          {props.modal}
          {props.children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
