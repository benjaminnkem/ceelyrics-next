import HomeContent from "@/components/UI/Home";
import { publicApi } from "@/lib/configs/axiosInstance";
import { MM_API_KEY } from "@/lib/constants/variables";
import { InitialTrackResponse } from "@/lib/types/pages";

const getInitialData = async (): Promise<InitialTrackResponse> => {
  const response = await publicApi.get(
    `/chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1&apikey=${MM_API_KEY}`
  );
  const { data } = response;

  return data;
};

const Home = async () => {
  // const data = await getInitialData();
  // const {
  //   message: {
  //     body: { track_list },
  //   },
  // } = data;

  return <HomeContent trackList={[]} />;
};

export default Home;
