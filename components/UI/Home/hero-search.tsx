import { Search } from "lucide-react";

const HeroSearch = () => {
  const searchMusic = () => {};

  return (
    <div className="overflow-hidden">
      <div className="w-full jumbo-search rounded-md border outline-none px-2 border-white/40 bg-black/20 flex items-center gap-4">
        <Search size={20} />
        <input type="text" className="bg-transparent w-full py-2 outline-none" placeholder="Search..." />
      </div>
    </div>
  );
};

export default HeroSearch;
