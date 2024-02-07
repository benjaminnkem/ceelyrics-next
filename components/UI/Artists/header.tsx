"use client";
import { Search } from "lucide-react";

const ArtistsHeader = () => {
  return (
    <header>
      <div id="jumbo" className="min-h-[30rem] flex items-center relative">
        <div className="absolute top-0 left-0 flex items-center w-full h-full">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-5 gap-2 items-center h-full">
              <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                <div className="overflow-hidden">
                  <h1 className={`md:text-5xl text-4xl font-extrabold leading-relaxed jumbo-text`}>Find Artists</h1>
                </div>
                <div className="overflow-hidden">
                  <p className="leading-relaxed jumbo-text">Find all available artists.</p>
                </div>

                <div className="overflow-hidden">
                  <div className="w-full jumbo-search rounded-md border outline-none px-3 border-white/[5] bg-black/5 flex items-center gap-4">
                    <Search size={20} />
                    <input type="text" className="bg-transparent w-full py-3 outline-none" placeholder="Search..." />
                  </div>
                </div>
              </div>
              <div className="grid place-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArtistsHeader;
