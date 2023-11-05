import HomeContent from "@/components/UI/Home";
import { getHostNProtocol } from "@/lib/reusables/protocols";
import axios from "axios";

const getInitialData = async () => {
  const { host, protocol } = getHostNProtocol();
  const response = await axios.get(`${protocol}${host}/api/v1/initial-data`);
  const { data } = response;

  return data;
};

const Home = async () => {
  const init = await getInitialData();
  console.log("init data", init);

  return <HomeContent />;
};

export default Home;
