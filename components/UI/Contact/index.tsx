"use client";

import RightToLeftIntro from "@/components/Common/Intros/right-to-left";
import WidthClamp from "@/components/Layout/Clamp";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { HomeIcon, MailIcon, PhoneIcon, PlaneTakeoff } from "lucide-react";

const ContactContent = () => {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      t1.from("#headCoverImage", { scale: 1.1, yPercent: 5 });
    }, headerRef);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <RightToLeftIntro />
      <header ref={headerRef}>
        <div className="min-h-[40rem] overflow-hidden relative">
          <div className="-z-[10] select-none absolute top-0 left-0 w-full h-full">
            <Image
              src={"/images/backgrounds/contact2.jpg"}
              alt="contact cover"
              width={1920}
              id="headCoverImage"
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="-z-[8] absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent flex items-center">
            <WidthClamp>
              <div className="text-white space-y-3 text-center sm:text-start">
                <h1 className="text-6xl font-extrabold">CONTACT US</h1>
                <p className="text-text-200 text-lg">Have any issues, or decided to reach out to us?</p>
              </div>
            </WidthClamp>
          </div>
        </div>
      </header>
      <main>
        <WidthClamp>
          <div className="grid md:grid-cols-2 lg:gap-16 md:gap-6 gap-6 my-10">
            <div>
              <h2 className="font-bold text-3xl">Send Us A Message</h2>
              <div className="bg-white rounded-md py-10 px-8 border mt-4">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName">Full Name</label>
                      <div>
                        <input
                          type="text"
                          className="w-full outline-none block border border-text-200 rounded-md p-2"
                          placeholder="Enter your name..."
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email">Email</label>
                      <div>
                        <input
                          type="email"
                          className="w-full outline-none block border border-text-200 rounded-md p-2"
                          placeholder="Enter your email address..."
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="reason">Reason for contact</label>
                      <div>
                        <select id="reason" className="w-full outline-none block border border-text-200 rounded-md p-2">
                          <option value="" disabled>
                            Select an option
                          </option>
                          <option value="lyrics">Suggest a lyrics to be added</option>
                          <option value="feature">Suggest a new feature</option>
                          <option value="bug">Report a bug</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="fullName">Message</label>
                      <div>
                        <textarea
                          className="w-full outline-none block border border-text-200 rounded-md p-2 resize-none"
                          placeholder="Type message here..."
                          rows={10}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <button className="w-full outline-none rounded-md flex items-center justify-center group hover:bg-primary-600 transition-colors duration-200 gap-2 py-2 bg-primary-700 text-text-100">
                      <span className="font-semibold">Send</span>{" "}
                      <PlaneTakeoff className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-3xl">Our Contact Info</h3>
              <div className="grid lg:grid-cols-2 gap-2 mt-4">
                <div className="bg-white border rounded-md p-4 shadow-md">
                  <div className="flex gap-2">
                    <MailIcon size={18} className="mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-text-700">contact@ceelyrics.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border rounded-md p-4 shadow-md">
                  <div className="flex gap-2">
                    <PhoneIcon size={18} className="mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg">Phone No.</h4>
                      <p className="text-text-700">+234 (81) 3396 1439</p>
                      <p className="text-text-700">+234 (70) 4643 8980</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border rounded-md p-4 shadow-md">
                  <div className="flex gap-2">
                    <HomeIcon size={18} className="mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-text-700">Lagos, Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthClamp>
      </main>
    </>
  );
};

export default ContactContent;
