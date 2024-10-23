import { createAccount, login } from "@/helpers/auth.helper";
import { CreateAccountForm } from "@/schemas";
import { UserData } from "@/typings/interface";

import { User } from "@/typings/types";
import axios from "axios";
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  token: null | string;
  setUser: (user: UserData) => void;
  login: (email: string, password: string) => Promise<void>;
  register: (userInfo: CreateAccountForm) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  /**
   * Update the user state
   */
  setUser: (user) =>
    set((prev) => ({
      user: {
        ...user,
        appointments: prev.user?.appointments ?? [],
      },
      isAuthenticated: true,
    })),

  /**
   * Login a user
   */
  login: async (email, password) => {
    const res = await login({ email, password });
    if (!res) return;

    localStorage.setItem("token", res.token);
    set({ isAuthenticated: true, user: res.user, token: res.token });
  },

  /**
   * Register a new user
   */
  register: async (userInfo) => {
    const res = await createAccount(userInfo);
    if (!res) return;

    set({ isAuthenticated: true, user: res.user, token: res.token });
  },

  /**
   * Logout a user
   */
  logout: async () => {
    set({ isAuthenticated: false, user: null, token: null });

    localStorage.removeItem("token");
    await axios.post("/api/manage-token", {
      token: "",
    });
  },
}));
