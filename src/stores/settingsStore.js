import { create } from "zustand";

export const useSettingStore = create((set) => ({
  numberOfPlayers: 3, //default value
  viewMode: "grid", // 'grid' | 'row' (default)

  setNumberOfPlayers: (count) => set({ numberOfPlayers: count }),
    setViewMode: (mode) => set({ viewMode: mode }),
  
    
}));
