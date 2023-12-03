const Loading = () => {
  return (
    <>
      <div>
        <div className="min-h-[40rem] bg-background-100 dark:bg-background-900 flex items-center">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-5 gap-2 items-center h-full">
              <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                <div>
                  <div className="h-16 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-6 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-6 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-6 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-6 w-4/5 rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                </div>
              </div>
              <div className="grid place-content-center"></div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="container my-16">
          <div className="grid grid-cols-5 grid-rows-2 gap-2 text-white">
            <div className="col-span-2 relative group cursor-pointer overflow-hidden bg-background-800/50 animate-pulse rounded-lg row-span-2">
              <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
              <div className="absolute flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
                <div className="space-y-2 p-4 mb-3">
                  <p className="font-black text-3xl">Artist Name</p>
                  <p>Song/Album Title</p>
                </div>
              </div>
            </div>

            <div className="bg-background-700/50 animate-pulse relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
              <div className="absolute flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
                <div className="space-y-2 p-4 mb-3">
                  <p className="font-black text-3xl">Artist Name</p>
                  <p>Song/Album Title</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-2 gap-2 w-full relative group cursor-pointer overflow-hidden overflow-y-auto h-[18rem] rounded-lg bg-background-900/50 animate-pulse">
              <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
              <div className="absolute flex items-end top-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
                <div className="space-y-2 p-4 mb-3">
                  <p className="font-black text-3xl">Artist Name</p>
                  <p>Song/Album Title</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 rounded-lg relative group cursor-pointer overflow-hidden bg-background-600/50 animate-pulse">
              <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
              <div className="absolute top  flex items-end-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
                <div className="space-y-2 p-4 mb-3">
                  <p className="font-black text-3xl">Artist Name</p>
                  <p>Song/Album Title</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg relative group cursor-pointer overflow-hidden bg-background-700/50 animate-pulse">
              <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
              <div className="absolute top  flex items-end-0 left-0 w-full h-full group-hover:opacity-100 opacity-0 duration-300 bg-gradient-to-t from-black/70 via-transparent to-black/50">
                <div className="space-y-2 p-4 mb-3">
                  <p className="font-black text-3xl">Artist Name</p>
                  <p>Song/Album Title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loading;
