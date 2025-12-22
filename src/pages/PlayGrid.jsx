import { useState } from "react";
import { useGameStore } from "../stores/gameStore";
import SmallPlayerCard from "../components/SmallPlayerCard";
import { NavLink } from "react-router-dom";
import { useSettingStore } from "../stores/settingsStore";
import { CapitalizeFirstLetter } from "../components/CapitalizeFirstLetter";
import { Confetti } from "../components/Confetti";

export const PlayGrid = () => {
  const players = useGameStore((s) => s.players);
  const addRoundScores = useGameStore((s) => s.addRoundScores);
  const resetScores = useGameStore((s) => s.resetScores);
  const scoreGoal = useSettingStore((s) => s.scoreGoal);
  const editable = useSettingStore((state) => state.editable);
  const setEditable = useSettingStore((state) => state.setEditable);

    const [scores, setScores] = useState(players.map(() => ""));
      const [isWinner, setIsWinner] = useState();

  const hideHistory = useSettingStore((state) => state.hideHistory);
  const setHideHistory = useSettingStore((state) => state.setHideHistory);


  const handleHistory = () => {
    setHideHistory(!hideHistory);
  };

  // Compute the leading player over winScore
  const totalScores = players.map((p) =>
    p.scores.reduce((sum, s) => sum + s, 0)
  );
  const maxScore = Math.max(...totalScores.filter((s) => s >= scoreGoal));
  const leadingPlayerId = players.find(
    (p, i) => totalScores[i] === maxScore
  )?.id;

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
            isWinner={player.id === leadingPlayerId}
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
          <button className="mx-auto w-full" onClick={handleEdit}>
            {editable ? "Save" : "Edit Players"}
          </button>
          <NavLink to="/settings">
            <button className="text-xs w-full">Settings</button>
          </NavLink>
          <button className="text-xs cursor-pointer" onClick={handleHistory}>
            {hideHistory ? "Show Rounds" : "Hide Rounds"}
          </button>
          <button className="mt-4 mx-auto  Reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
