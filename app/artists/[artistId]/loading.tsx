const Loading = () => {
  return (
    <>
      <header>
        <div className="bg-background-100 animate-pulse">
          <div className="flex w-full relative h-full min-h-[15rem] border-8 items-end container">
            <div className="flex absolute -bottom-16">
              <div className="w-40 border-4 border-primary-200 rounded-full h-auto aspect-square bg-background-200"></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="h-[10rem]"></div>
      </main>
    </>
  );
};

export default Loading;
