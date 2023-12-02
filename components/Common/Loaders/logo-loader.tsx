const LogoLoader: React.FC = () => {
  return (
    <div className="fixed layer z-[600] top-0 left-0 w-full min-h-screen bg-primary-900 text-white layer-cover">
      <div className="w-full min-h-screen grid text-center place-content-center animate-pulse [animation-duration:3s]">
        <div className="overflow-hidden py-1 border-white flex">
          <p className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold" id="ceeText">
            Ceelyrics
          </p>
          <span className="text-primary-500 lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-extrabold" id="ceeDot">
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;
