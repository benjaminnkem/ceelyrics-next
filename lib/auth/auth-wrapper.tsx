import LogoLoader from "@/components/Common/Loaders/logo-loader";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";
import { useStore } from "../store";

const AuthWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const { updateUser, clearUser } = useStore();

  useEffect(() => {
    if (!session && status === "unauthenticated") clearUser();

    if (session && status === "authenticated") {
      const userData = { ...session.user, accessToken: session.backendToken.accessToken };

      updateUser(userData);
    }
  }, [session, status]);

  if (status === "loading") return <LogoLoader />;

  return <>{children}</>;
};

export default AuthWrapper;
