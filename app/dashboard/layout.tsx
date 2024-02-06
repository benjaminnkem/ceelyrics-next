import { FC, PropsWithChildren } from "react";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Layout/Dashboard/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: { noarchive: true, index: false, nocache: true },
};

const Layout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/account/login");
  }

  return (
    <main>
      <div className="min-h-screen">
        <Sidebar />

        {children}
      </div>
    </main>
  );
};

export default Layout;
