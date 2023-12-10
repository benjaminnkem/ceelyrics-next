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
