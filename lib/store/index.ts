import { create } from "zustand";
import { DashSidebar, UserStore } from "../types/store";

export const useStore = create<UserStore>((set) => ({
  user: null,
  updateUser: (user) => set((state) => ({ ...state, user })),
  clearUser: () => set(() => ({ user: null })),
}));

// dashboard
export const useSidebar = create<DashSidebar>((set) => ({
  links: [],
  updateLinks: (links) => set((state) => ({ links })),
}));
