"use client";

const ArtistsHeader = () => {
  return (
    <header>
      <div id="jumbo" className="flex items-center relative text-center">
        <div className="container mx-auto">
          <div className="space-y-10 text-center my-32 col-span-full">
            <div className="space-y-2">
              <div className="overflow-hidden">
                <h1 className={`md:text-5xl text-4xl font-extrabold leading-relaxed jumbo-text`}>Find Artists</h1>
              </div>
              <div className="overflow-hidden">
                <p className="leading-relaxed jumbo-text">Search for your favorite artists.</p>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="w-full jumbo-search max-w-3xl mx-auto rounded-lg border outline-none px-3 border-white/[5] bg-black/5 flex items-center gap-4">
                <input
                  type="text"
                  className="bg-transparent text-center w-full py-3 outline-none"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArtistsHeader;
