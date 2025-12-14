import { useState } from "react";
import { useGameStore } from "../stores/gameStore";
import SmallPlayerCard from "../components/SmallPlayerCard";

export const PlayGrid = () => {
  const players = useGameStore((s) => s.players);
  const addRoundScores = useGameStore((s) => s.addRoundScores);

  const [scores, setScores] = useState(players.map(() => ""));

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
      <h2>Round Scoring</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
        }}
      >
        {players.map((player, index) => (
          <SmallPlayerCard
            key={player.id}
            player={player}
            score={scores[index]}
            onScoreChange={(value) => updateScore(index, value)}
            onSubmit={() => submitSinglePlayer(index)}
          />
        ))}
      </div>

      <button
        onClick={submitAllPlayers}
        disabled={scores.some((s) => s === "")}
        style={{
          marginTop: "1rem",
          width: "100%",
        }}
      >
        Submit All Players
      </button>
    </div>
  );
};
