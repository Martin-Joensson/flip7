import { useState } from "react";
import { useGameStore } from "../stores/gameStore";
import SmallPlayerCard from "../components/SmallPlayerCard";
import { NavLink } from "react-router-dom";
import { RowPlayerCard } from "../components/RowPlayerCard";
import { useSettingStore } from "../stores/settingsStore";

export const PlayRow = () => {
  const players = useGameStore((s) => s.players);
  const addRoundScores = useGameStore((s) => s.addRoundScores);
  const scoreGoal = useSettingStore((s) => s.scoreGoal);

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

    if (hasEmpty) {
      alert("All players must have a score");
      return;
    }

    addRoundScores(scores.map(Number));
    setScores(players.map(() => ""));
  };

  return (
    <div>
      <div className="flex gap-1">
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

      <button
        className="w-full mt-1"
        onClick={submitAllPlayers}
        disabled={scores.some((s) => s === "")}
      >
        Round over, add the scores.
      </button>
    </div>
  );
};
