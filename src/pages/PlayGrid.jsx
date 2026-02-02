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
  const editable = useSettingStore((state) => state.editable);
  const setEditable = useSettingStore((state) => state.setEditable);

  const [scores, setScores] = useState(players.map(() => ""));

  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);

  const handleHistory = () => {
    setHideHistory(!hideHistory);
  };
  // Compute total scores per player
  const playersWithTotals = players.map((player) => ({
    ...player,
    totalScore: player.scores.reduce((sum, s) => sum + s, 0),
  }));

  // Players who reached the goal
  const eligiblePlayers = playersWithTotals.filter(
    (p) => p.totalScore >= scoreGoal
  );

  // Default values
  let winningPlayerIds = [];
  let hasWinner = false;

  if (eligiblePlayers.length > 0) {
    const maxScore = Math.max(...eligiblePlayers.map((p) => p.totalScore));

    const topPlayers = eligiblePlayers.filter((p) => p.totalScore === maxScore);

    // ✅ WIN CONDITION: exactly one top player
    if (topPlayers.length === 1) {
      hasWinner = true;
      winningPlayerIds = [topPlayers[0].id];
    }
  }

  /* -------- Global submit -------- */
  const submitAllPlayers = () => {
    const hasEmpty = scores.some((s) => s === "");

    addRoundScores(scores.map(Number));
    setScores(players.map(() => ""));

    window.scrollTo(0, 0);
  };

  const reset = (e) => {
    if (!confirm("Are you sure?")) {
      e.preventDefault();
    } else resetScores();
  };

  const handleEdit = () => {
    setEditable(!editable);
  };

  return (
    <div className="w-full p-4">
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
            isWinner={hasWinner && winningPlayerIds.includes(player.id)}
          />
        ))}
      </div>
      <div className="flex flex-col min-h-100 gap-2 justify-between">
        {editable ? null : (
          <button className="mt-4 CTA" onClick={submitAllPlayers}>
            Round over, add the scores.
          </button>
        )}

        <div className="w-1/2 mx-auto my-4 flex flex-col gap-2">
          <button className="CTA mx-auto w-full" onClick={handleEdit}>
            {editable ? "Save" : "Edit Players"}
          </button>
          <NavLink to="/settings">
            <button className="text-xs w-full">Settings</button>
          </NavLink>
  
          <button className="mt-4 mx-auto  Reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
