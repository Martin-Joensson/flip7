import { useGameStore } from "../stores/gameStore";
import { useSettingStore } from "../stores/settingsStore";
import PlayerRoundHistory from "./PlayerRoundHistory";
import crown from "../assets/crown3.png";
import { useState } from "react";
import { Confetti } from "./Confetti";

function SmallPlayerCard({ player, score, onScoreChange, onSubmit, isWinner }) {
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const setPlayerColor = useGameStore((s) => s.setPlayerColor);
  const hideHistory = useSettingStore((s) => s.hideHistory);
  const editable = useSettingStore((s) => s.editable);
  let initialValue = 0;

  return (
    <div className="relative p-1 border rounded-lg min-w-12 dark:bg-flip7-dark bg-flip7-beige ">
      {isWinner ? (
        <>
          <Confetti />
          <img
            className="w-20 absolute -top-10 rotate-10 right-1 animate-bounce"
            src={crown}
          />
        </>
      ) : null}
      {/* Editable name */}
      <div>
        {editable ? (
          <>
            <label>Change Name:</label>
            <input
              className="px-2"
              value={player.name}
              onChange={(e) => setPlayerName(player.id, e.target.value)}
              style={{
                background: "black",
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "bold",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            />
          </>
        ) : (
          <p
            className="px-2 rounded-t-sm"
            style={{
              backgroundColor: player.color,
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: "bold",
              width: "100%",
              marginBottom: "0.5rem",
            }}
          >
            {player.name}
          </p>
        )}
      </div>
      {editable ? (
        <div className="flex flex-col m-auto my-4">
          <label>Change Color:</label>
          <input
            className="w-full rounded-full cursor-pointer border-2 border-white"
            type="color"
            value={player.color}
            onChange={(e) => setPlayerColor(player.color, e.target.value)}
          />
        </div>
      ) : null}

      {editable ? null : (
        <h3>
          {player.scores.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
          )}
        </h3>
      )}

      {hideHistory ? null : <PlayerRoundHistory scores={player.scores} />}
      {editable ? null : (
        <input
          type="number"
          inputMode="numeric"
          value={score}
          onChange={(e) => onScoreChange(e.target.value)}
          placeholder="Score"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
      )}
    </div>
  );
}

export default SmallPlayerCard;
