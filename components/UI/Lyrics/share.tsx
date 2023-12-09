"use client";
import { SITE_URL } from "@/lib/constants";
import { Check, Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { gsap } from "gsap";
import { useRef } from "react";

const ShareLyrics = () => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const copyAnimation = () => {
    gsap.context(() => {
      gsap
        .timeline()
        .to("#copy_link", { opacity: 0, xPercent: -50 })
        .set("#copy_link", { display: "none" })
        .set("#link_copied", { display: "block", opacity: 0, xPercent: 50 })
        .to("#link_copied", { opacity: 1, xPercent: 0 })
        // reverse
        .to("#link_copied", { opacity: 0, xPercent: -50, delay: 0.5 })
        .set("#link_copied", { display: "none", opacity: 0 })
        .set("#copy_link", { display: "block", opacity: 0, xPercent: 50 })
        .to("#copy_link", { opacity: 1, xPercent: 0 });
    }, ref);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(`${SITE_URL}${pathname}`);
    copyAnimation();
    toast.success("Link copied", { id: "success" });
  };

  return (
    <div ref={ref}>
      <p className="text-center text-sm font-semibold">Share this lyrics</p>

      <div className="flex items-center justify-center bg-transparent dark:text-white px-10 py-2 rounded-2xl w-fit mx-auto gap-3">
        <div className="rounded-lg p-[2px]">
          <Link href={"#"}>
            <Image src={"/images/social/facebook.svg"} alt="facebook logo" width={30} height={30} />
          </Link>
        </div>
        <div className="rounded-lg p-[2px]">
          <Link href={"#"}>
            <Image src={"/images/social/whatsapp.svg"} alt="whatsapp logo" width={30} height={30} />
          </Link>
        </div>
        <div className="rounded-lg p-[2px] dark:bg-background-500">
          <Link href={"#"}>
            <Image src={"/images/social/twitter-x.svg"} alt="twitter logo" width={30} height={30} />
          </Link>
        </div>
        <div className="rounded-lg cursor-pointer p-[2px]" title="Copy Link" id="copy_link">
          <Copy onClick={copyLink} />
        </div>
        <div className="rounded-lg cursor-default p-[2px] hidden" title="Link Copied!" id="link_copied">
          <Check />
        </div>
      </div>
    </div>
  );
};

export default ShareLyrics;
