import { create } from "zustand";
import { UserStore } from "../types/store";

export const useStore = create<UserStore>((set) => ({
  user: null,
  updateUser: (user) => set((state) => ({ ...state, user })),
  clearUser: () => set(() => ({ user: null })),
}));
