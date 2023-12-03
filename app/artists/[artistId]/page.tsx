import ArtistAlbums from "@/components/UI/Artists/ArtistDetails/albums";
import { publicApi } from "@/lib/configs/axiosInstance";
import { ArtistData } from "@/lib/types/response";
import Image from "next/image";

interface Params {
  params: { artistId: string };
}

const fetchArtistDetails = async (artistId: string) => {
  try {
    const response = await publicApi.get<Omit<ArtistData, "albums">>(`/artists/details/${artistId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const ArtistDetails: React.FC<Params> = async ({ params: { artistId } }) => {
  const artist = await fetchArtistDetails(artistId);

  return (
    <>
      <header>
        <div className="bg-background-100 relative">
          <div className="absolute top-0 left-0 w-full overflow-hidden h-full select-none">
            <Image
              src={`/images/backgrounds/home/bg1.jpg`}
              alt="home cover"
              id="headCoverImage"
              width={1920}
              height={800}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background-950 to-transparent"></div>

          <div className="absolute right-0 bottom-0 select-none">
            <p className="opacity-30 text-white lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-extrabold">
              {artist?.stageName}
            </p>
          </div>

          <div className="flex w-full relative h-full min-h-[15rem] items-end container">
            <div className="flex absolute -bottom-28">
              <div>
                <div className="w-40 border-4 border-primary-200 mx-auto rounded-full h-auto overflow-hidden aspect-square bg-background-200">
                  <Image
                    src={"/images/backgrounds/home/music5.jpg"}
                    alt="a musician"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                <div className="text-center mt-2">
                  <h1 className="font-bold text-xl">{artist?.stageName}</h1>
                  <p>
                    ({artist?.firstName} {artist?.middleName} {artist?.lastName})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="md:h-[6rem]"></div>

        {artist ? (
          <div className="md:grid flex flex-col-reverse grid-cols-2 mt-10 gap-8 container">
            <div className="self-start">
              <p className="font-extrabold text-3xl mb-1">Details</p>

              <div className="w-fit bg-background-100 p-4 rounded-lg space-y-3">
                <p>
                  <span className="font-semibold">Stage Name:</span> {artist.stageName}
                </p>
                <p>
                  <span className="font-semibold">Full Name</span>: {artist.firstName} {artist.middleName}{" "}
                  {artist.lastName}
                </p>
                {/* <p>
                <span className="font-semibold">Age:</span>
              </p> */}
                <p>
                  <span className="font-semibold">Date Of Birth:</span>{" "}
                  {new Intl.DateTimeFormat("en-GB").format(new Date(artist.dateOfBirth as string))}
                </p>
                <div>
                  <p className="font-semibold">About Artist:</p>
                  <p className="whitespace-pre-line">{artist.bio}</p>
                </div>
              </div>
            </div>

            <ArtistAlbums artistId={artistId} />

            <div className="h-[5rem]"></div>
          </div>
        ) : (
          <div className="container">
            <p className="text-2xl font-extrabold">No artist data</p>
          </div>
        )}
      </main>
    </>
  );
};

export default ArtistDetails;
