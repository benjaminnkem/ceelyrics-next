"use client";

import { useSidebar, useStore } from "@/lib/store";
import classNames from "classnames";
import {
  BarChart2,
  Bug,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  Music,
  PieChart,
  Search,
  Star,
  User,
  User2,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { user, clearUser } = useStore();
  const { links, updateLinks } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    switch (user?.role) {
      case "BASIC":
        updateLinks([
          {
            label: "Profile",
            icon: <User2 size={20} />,
            path: "/dashboard/profile",
          },
          {
            label: "Favorites",
            icon: <Star size={20} />,
            path: "/dashboard/favorites",
          },
          {
            label: "Liked Lyrics",
            icon: <Heart size={20} />,
            path: "/dashboard/favorites",
          },
          {
            label: "Report a bug",
            icon: <Bug size={20} />,
            path: "/dashboard/favorites",
          },
          {
            label: "Contact Us",
            icon: <MessageCircle size={20} />,
            path: "/dashboard/contact",
          },
        ]);
        break;
      case "ADMIN":
        updateLinks([
          {
            label: "Dashboard",
            icon: <BarChart2 size={20} />,
            path: "/dashboard",
          },
          {
            label: "Profile",
            icon: <User2 size={20} />,
            path: "/dashboard/account",
          },
          {
            label: "Messages",
            icon: <MessageCircle size={20} />,
            path: "/dashboard/contact",
          },
        ]);
        break;
      case "SUPER_ADMIN":
        updateLinks([]);
        break;
    }
  }, [user?.role]);

  const linksClass = classNames([
    "p-2 flex items-center cursor-pointer rounded-md transition-colors",
    "duration-300 gap-3 w-full",
  ]);

  const logout = () => {
    clearUser();
    signOut({ redirect: false });
    toast.success("Logged out successfully");
    router.replace("/");
  };

  return (
    <aside className="h-full fixed left-0 top-0 overflow-hidden md:w-[320px] w-0 duration-300 bg-background-900 text-white">
      <div className="py-4">
        <div>
          <div className="mx-auto w-24 h-24 rounded-full bg-background-400"></div>
        </div>
        <div className="mt-4 px-2 space-y-3">
          <div className="space-y-1">
            {links.map((link, id) => (
              <div
                key={id}
                className={`${linksClass} ${
                  pathname === link.path + "/"
                    ? "bg-background-50 text-background-800"
                    : "hover:bg-background-50 hover:text-background-800"
                }`}
              >
                {link.icon}
                <span> {link.label}</span>
              </div>
            ))}
          </div>

          {user && (user.role === "ADMIN" || user.role === "SUPER_ADMIN") && (
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-background-600 text-sm uppercase">Create</p>
                <div className="flex-grow h-[.5px] bg-background-700"></div>
              </div>
              <div
                className={`${linksClass} ${
                  pathname === "/lyrics/new/"
                    ? "bg-background-50 text-background-800"
                    : "hover:bg-background-50 hover:text-background-800"
                } `}
                onClick={() => router.push("/")}
              >
                <Music size={20} />
                <span>Lyric</span>
              </div>
              <div
                className={`${linksClass} ${
                  pathname === "/albums/new"
                    ? "bg-background-50 text-background-800"
                    : "hover:bg-background-50 hover:text-background-800"
                } `}
                onClick={() => router.push("/")}
              >
                <Music size={20} />
                <span>Album</span>
              </div>
              <div
                className={`${linksClass} ${
                  pathname === "/artists/new"
                    ? "bg-background-50 text-background-800"
                    : "hover:bg-background-50 hover:text-background-800"
                } `}
                onClick={() => router.push("/")}
              >
                <User2 size={20} />
                <span>Artist</span>
              </div>
              <div
                className={`${linksClass} ${
                  pathname === "/search"
                    ? "bg-background-50 text-background-800"
                    : "hover:bg-background-50 hover:text-background-800"
                } `}
                onClick={() => router.push("/")}
              >
                <Search size={20} />
                <span>Search</span>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-background-600 text-sm uppercase">Actions</p>
              <div className="flex-grow h-[.5px] bg-background-700"></div>
            </div>
            <div className={linksClass} onClick={() => router.push("/")}>
              <Home size={20} />
              <span>Home</span>
            </div>
            <div className={linksClass} onClick={logout}>
              <LogOut size={20} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
