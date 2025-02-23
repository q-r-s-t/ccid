"use client";

import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  lang: "en",
  toggleLanguage: () =>
    set((state) => ({ lang: state.lang === "ko" ? "en" : "ko" })),
}));
