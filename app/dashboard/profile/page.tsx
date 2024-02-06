import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="h-full md:ml-[260px] px-6">
        <div className="max-w-6xl mx-auto mt-2 select-none">
          <div className="relative w-full min-h-[16rem] max-h-[20rem] bg-zinc-200 rounded-md">
            <Image
              draggable={false}
              src={"/images/backgrounds/dashboard/user_bg2.jpg"}
              alt="user cover img"
              width={1920}
              height={400}
              className="object-cover absolute top-0 left-0 w-full h-full rounded-md"
            />

            <div className="absolute left-4 -bottom-6 flex items-center gap-4">
              <div className="border-zinc-100 w-32 h-32 rounded-full border-4 overflow-hidden bg-zinc-200">
                <Image
                  draggable={false}
                  src={"/images/backgrounds/dashboard/user.jpg"}
                  alt="profile img"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className={`text-2xl font-bold text-white`}>Benjamin Nkem</h1>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-6">
          <div className="min-h-[14rem] border border-zinc-300 rounded-md bg-zinc-200 col-span-1"></div>
          <div className="min-h-[14rem] border border-zinc-300 rounded-md bg-zinc-200 col-span-3"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
