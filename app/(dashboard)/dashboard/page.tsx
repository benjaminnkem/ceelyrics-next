import DashboardContent from "@/components/Layout/Dashboard";
import { authOptions } from "@/lib/auth/auth-options";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      title: "Not Found",
      description: "This page is not found.",
    };
  }

  const { firstName, lastName } = session.user;

  return {
    title: {
      absolute: `${firstName} ${lastName} Dashboard - Ceelyrics`,
    },
    description: `This is your ceelyrics dashboard ${firstName} ${lastName}`,
    robots: {
      index: false,
      nocache: true,
      noarchive: true,
    },
  };
}

const Dashboard = () => {
  return <DashboardContent />;
};

export default Dashboard;
