import LogoLoader from "@/components/Common/Loaders/logo-loader";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <LogoLoader />;

  return <>{children}</>;
};

export default AuthWrapper;
