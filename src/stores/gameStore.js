import { create } from "zustand";
import { useSettingStore } from "./settingsStore";

const PLAYER_COLORS = [
  "#ff4757",
  "#1e90ff",
  "#2ed573",
  "#ffa502",
  "#9b59b6",
  "#00cec9",
];

const createPlayers = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: `player-${i + 1}`,
    name: `Player ${i + 1}`,
    color: PLAYER_COLORS[i % PLAYER_COLORS.length],
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
        player.id === playerId ? { ...player, name } : player
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
