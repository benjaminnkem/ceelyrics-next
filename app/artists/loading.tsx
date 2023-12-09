const Loading = () => {
  return (
    <div>
      <div className="h-[40rem] bg-background-100 dark:bg-background-900 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t flex items-center from-background-950 to-transparent">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-5 gap-2 items-center h-full">
              <div className="space-y-4 text-center md:text-start md:col-span-3 col-span-full">
                <div>
                  <div className="h-16 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                </div>
                <div className="space-y-1">
                  <div className="h-4 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-4 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-4 w-full rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                  <div className="h-4 w-4/5 rounded-full animate-pulse bg-background-200 dark:bg-background-800"></div>
                </div>
              </div>
              <div className="grid place-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
