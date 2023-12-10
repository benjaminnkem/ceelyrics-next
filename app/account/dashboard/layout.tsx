import { FC, PropsWithChildren } from "react";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/account/login");
  }

  return <>{children}</>;
};

export default Layout;
