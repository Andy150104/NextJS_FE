// src/stores/authStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

export interface AuthState {
  token: string | null;
  refreshTokenValue: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  refreshToken: () => Promise<void>;
  logout: () => void;
}

const baseURL = "https://localhost:7165";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      refreshTokenValue: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const params = new URLSearchParams();
        params.append("grant_type", "password");
        params.append("username", email);
        params.append("password", password);
        params.append("email", email);
        // nếu backend yêu cầu thêm scope/client_id thì append thêm ở đây

        const { data } = await axios.post(
          `${baseURL}/connect/token`, // chỉnh lại baseURL nếu cần http://localhost:5199
          params,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        set({
          token: data.access_token,
          refreshTokenValue: data.refresh_token,
          isAuthenticated: true,
        });
      },

      refreshToken: async () => {
        const refreshToken = get().refreshTokenValue;
        if (!refreshToken) throw new Error("No refresh token");
        const form = new FormData();
        form.append("grant_type", "refresh_token");
        form.append("refresh_token", refreshToken);
        const { data } = await axios.post(`${baseURL}/connect/token`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        set({
          token: data.access_token,
          refreshTokenValue: data.refresh_token,
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({ token: null, refreshTokenValue: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage", // key lưu trong localStorage
      storage: createJSONStorage(() => localStorage), // dùng localStorage
    }
  )
);
