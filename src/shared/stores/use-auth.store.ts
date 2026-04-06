import { create } from "zustand";

interface AuthStoreState {
  isAuthenticated: boolean;
}

interface AuthStoreActions {
  setAuthenticated: (
    isAuthenticated: AuthStoreState["isAuthenticated"],
  ) => void;
}

export const useAuthStore = create<AuthStoreState & AuthStoreActions>(
  (set) => ({
    isAuthenticated: false,
    setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  }),
);
