"use client";
import Link from "next/link";
import WidthClamp from "../Clamp";
import { CoffeeIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { poppins } from "@/lib/fonts";
import { useNavbarStore } from "../Navbar";

const Footer = () => {
  const { links } = useNavbarStore();
  const socialLinks = [
    { label: "Youtube", path: "/", icon: <YoutubeIcon /> },
    { label: "Twitter", path: "/", icon: <TwitterIcon /> },
  ];

  const quotes = [
    "Where Words Sing: Explore the Melody of Lyrics",
    "Unlock Poetry: Discover the Music in Lyrics",
    "Lyrics Unleashed: Dive into the Symphony of Words",
    "Melodies in Motion: Where Lyrics Find Harmony",
    "Embrace Every Beat: Let Lyrics Set the Tone",
    "Verse by Verse: Let Lyrics Paint the Melody",
    "In Tune with Lyrics: Feel the Rhythm of Words",
    "Lyrics at Heart: Where Songs Tell Stories",
    "Lyrically Yours: Discover Music's Poetry",
    "Where Music Speaks: Lyrics Tell the Tale",
  ];

  return (
    <footer>
      <WidthClamp>
        <div className="rounded-lg py-10 px-16 bg-background-100 mb-10 mt-4">
          <div className="space-y-6">
            <div className="mb-6">
              <Link href={"/"} className={`${poppins.className} font-extrabold text-xl`}>
                Ceelyrics
              </Link>
            </div>

            <div className="flex gap-[10rem]">
              <div className="space-y-4">
                <div className="space-y-1 max-w-sm">
                  <p className="text-text-700">{quotes[0]} -</p>
                </div>
                <button className="bg-background-800 px-4 py-2 flex items-center gap-2 text-white rounded-lg">
                  <span>Support Us</span> <CoffeeIcon />
                </button>
              </div>
              <div className="space-y-2">
                <p className="uppercase text-text-600">Explore</p>
                <ul className="flex flex-col gap-1">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.path} className="duration-200 hover:text-text-700">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="uppercase text-text-600">Contact Us</p>
                <ul className="flex flex-col gap-1">
                  {socialLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.path} title={link.label} className="duration-200 flex items-center gap-2">
                        <span>{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="h-[0.5px] bg-background-200 rounded"></div>

            <div className="text-center text-sm text-text-700 space-y-1">
              <p>
                Made with 💖 by{" "}
                <span>
                  <Link
                    href={"https://twitter.com/MainNkem"}
                    target="_blank"
                    className="border-b-2 border-primary-500 duration-200 hover:text-primary-500"
                  >
                    Benjamin Nkem
                  </Link>
                </span>
              </p>
              <p>Copyright © 2023 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </WidthClamp>
    </footer>
  );
};

export default Footer;
