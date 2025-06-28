// src/stores/loadingStore.ts

import { create } from "zustand"

interface LoadingState {
  isLoading: boolean
  setLoading: (v: boolean) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setLoading: (v) => set({ isLoading: v }),
}))
