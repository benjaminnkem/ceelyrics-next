import { headers } from "next/headers";

export const getHostNProtocol = () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV ? "http://" : "https://";

  return { host, protocol };
};
