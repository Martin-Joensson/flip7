import { useState } from "react";
import { useGameStore } from "../stores/gameStore";
import SmallPlayerCard from "../components/SmallPlayerCard";
import { NavLink } from "react-router-dom";
import { useSettingStore } from "../stores/settingsStore";

export const PlayGrid = () => {
  const players = useGameStore((s) => s.players);
  const addRoundScores = useGameStore((s) => s.addRoundScores);
  const resetScores = useGameStore((s) => s.resetScores);
  const scoreGoal = useSettingStore((s) => s.scoreGoal);
  const [editable, setEditable] = useState(false);

  const [scores, setScores] = useState(players.map(() => ""));

  // Compute the leading player over winScore
  const totalScores = players.map((p) =>
    p.scores.reduce((sum, s) => sum + s, 0)
  );
  const maxScore = Math.max(...totalScores.filter((s) => s >= scoreGoal));
  const leadingPlayerId = players.find(
    (p, i) => totalScores[i] === maxScore
  )?.id;

  const updateScore = (index, value) => {
    const next = [...scores];
    next[index] = value;
    setScores(next);
  };

  /* -------- Individual submit -------- */
  const submitSinglePlayer = (index) => {
    const numericScores = players.map((_, i) =>
      i === index ? Number(scores[i]) : 0
    );

    addRoundScores(numericScores);

    const next = [...scores];
    next[index] = "";
    setScores(next);
  };

  /* -------- Global submit -------- */
  const submitAllPlayers = () => {
    const hasEmpty = scores.some((s) => s === "");

    addRoundScores(scores.map(Number));
    setScores(players.map(() => ""));
  };

  const reset = (e) => {
    if (!confirm("Are you sure?")) {
      e.preventDefault();
    } else resetScores();
  };

  return (
    <div>
      <div className="grid grid-cols-auto-fit gap-1">
        {players.map((player, index) => (
          <SmallPlayerCard
            key={player.id}
            player={player}
            score={scores[index]}
            onScoreChange={(value) => {
              const next = [...scores];
              next[index] = value;
              setScores(next);
            }}
            onSubmit={() => {
              const numericScores = players.map((_, i) =>
                i === index ? Number(scores[i]) : 0
              );
              addRoundScores(numericScores);
              setScores(players.map(() => ""));
            }}
            isWinner={player.id === leadingPlayerId}
          />
        ))}
      </div>
      <div className="flex flex-col min-h-screen">
        <button
          className="mt-4 CTA"
          onClick={submitAllPlayers}
          // disabled={scores.some((s) => s === "")}
        >
          Round over, add the scores.
        </button>
        <button className="mt-4 mx-auto w-1/4 Reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
