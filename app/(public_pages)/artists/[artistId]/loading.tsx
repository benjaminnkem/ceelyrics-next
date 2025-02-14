const Loading = () => {
  return (
    <>
      <div>
        <div className="bg-background-100 dark:bg-background-900 animate-pulse">
          <div className="flex w-full relative h-full min-h-[15rem] items-end container">
            <div className="flex absolute -bottom-16">
              <div className="w-40 border-4 border-primary-200 dark:border-background-800 rounded-full h-auto aspect-square bg-background-200 dark:bg-background-800"></div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="h-[10rem]"></div>
      </main>
    </>
  );
};

export default Loading;
