import { create } from "zustand";

export const useSettingStore = create((set) => ({
  numberOfPlayers: 3, //default value

  setNumberOfPlayers: (count) => set({ numberOfPlayers: count }),
}));
