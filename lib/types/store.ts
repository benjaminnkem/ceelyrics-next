// User-------------------
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  image?: string;
  role?: "BASIC" | "ADMIN" | "SUPER_ADMIN";
  accessToken: string;
}

export interface UserStore {
  user: User | null;
  updateUser: (user: User | null) => void;
  clearUser: () => void;
}

// Dashboard-------------------
export interface SidebarLink {
  label: string;
  path: string;
  icon: JSX.Element | null;
}

export interface DashSidebar {
  links: SidebarLink[];
  updateLinks: (links: SidebarLink[]) => void;
}
