import { create } from "zustand";

export const useSettingStore = create((set) => ({
  numberOfPlayers: 3, // 3 default value
  viewMode: "grid", // 'grid' | 'row'
  hideHistory: true, // if round history is hidden from view.
  scoreGoal: 200, // 200 default
  editable: false,

  setNumberOfPlayers: (count) => set({ numberOfPlayers: count }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setHideHistory: (bool) => set({ hideHistory: bool }),
  setScoreGoal: (count) => set({ scoreGoal: count }),
  setEditable: (bool) => set({ editable: bool }),
}));
