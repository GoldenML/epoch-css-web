import { create } from "zustand";

interface SearchState {
  keyword: string;
  setKeyword: (kw: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  keyword: "",
  setKeyword: (kw) => set({ keyword: kw }),
}));
