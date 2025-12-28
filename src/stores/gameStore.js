import { create } from "zustand";
import { useSettingStore } from "./settingsStore";

const PLAYER_COLORS = [
  "#4fbab6",
  "#ea6250",
  "#7aa4d6",
  "#ffdf51",
  "#ea4e65",
  "#dada23",
];

const TEXT_COLORS = ["#ffffff", "#000000"];

const createPlayers = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `player${i + 1}`,
    name: `Player ${i + 1}`,
    isDefaultName: true,
    color: PLAYER_COLORS[i % PLAYER_COLORS.length],
    textColor: "#ffffff",
    scores: [],
  }));

export const useGameStore = create((set, get) => ({
  players: [],
  round: 0,
  isStarted: false,

  /* -------- Game lifecycle -------- */
  startGame: () => {
    const { numberOfPlayers } = useSettingStore.getState();

    set({
      players: createPlayers(numberOfPlayers),
      round: 1,
      isStarted: true,
    });
  },

  endGame: () =>
    set({
      players: [],
      round: 0,
      isStarted: false,
    }),

  /* -------- Player editing (optional pre-game) -------- */
  setPlayerName: (playerId, name) =>
    set({
      players: get().players.map((player) =>
        player.id === playerId
          ? {
              ...player,
              name,
              isDefaultName: false,
            }
          : player
      ),
    }),

  /* -------- Player color -------- */
  setPlayerColor: (playerId, color) =>
    set({
      players: get().players.map((player) =>
        player.id === playerId ? { ...player, color } : player
      ),
    }),

  /* -------- Text color -------- */
  togglePlayerTextColor: (playerId) =>
    set({
      players: get().players.map((player) =>
        player.id === playerId
          ? {
              ...player,
              textColor: player.textColor === "#ffffff" ? "#000000" : "#ffffff",
            }
          : player
      ),
    }),

  /* -------- Scoring -------- */
  addRoundScores: (scoresPerPlayer) =>
    set({
      players: get().players.map((player, index) => ({
        ...player,
        scores: [...player.scores, scoresPerPlayer[index] ?? 0],
      })),
      round: get().round + 1,
    }),

  resetScores: () =>
    set({
      players: get().players.map((player) => ({
        ...player,
        scores: [],
      })),
      round: 1,
    }),
}));
