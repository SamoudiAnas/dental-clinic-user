import { User } from "@/typings/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  token: null | string;
  login: (email: string, password: string) => Promise<void>;
  register: (userInfo: FormData) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: async (email, password) => {
        // Login user code
      },
      register: async (userInfo) => {
        // Registering user code
      },
      logout: () => {
        // Logout user code
      },
    }),
    {
      name: "auth",
    }
  )
);
