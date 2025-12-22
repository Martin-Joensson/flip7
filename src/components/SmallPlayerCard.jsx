import { useGameStore } from "../stores/gameStore";
import { useSettingStore } from "../stores/settingsStore";
import PlayerRoundHistory from "./PlayerRoundHistory";
import crown from "../assets/crown3.png";
import { useState } from "react";
import { Confetti } from "./Confetti";
import { ToggleSwitch } from "./ToggleSwitch";

function SmallPlayerCard({ player, score, onScoreChange, onSubmit, isWinner }) {
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const setPlayerColor = useGameStore((s) => s.setPlayerColor);
  const togglePlayerTextColor = useGameStore((s) => s.togglePlayerTextColor);
  const hideHistory = useSettingStore((s) => s.hideHistory);
  const editable = useSettingStore((s) => s.editable);
  let initialValue = 0;

  const isLightText = player.textColor === "#4fbab6";

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
              className="px-2 rounded-full text-center"
              value={player.name}
              placeholder="Enter Name"
              onFocus={() => {
                if (player.isDefaultName) {
                  setPlayerName(player.id, "");
                }
              }}
              onChange={(e) => setPlayerName(player.id, e.target.value)}
              onBlur={() => {
                if (player.name.trim() === "") {
                  setPlayerName(
                    player.id,
                    `Player ${player.id.replace("player", "")}`
                  );
                }
              }}
              style={{
                backgroundColor: player.color,
                color: player.textColor,
                border: "1px solid #aaa",
                rounded: "100px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                width: "100%",
              }}
            />
          </>
        ) : (
          <p
            className="px-2 rounded-t-sm"
            style={{
              backgroundColor: player.color,
              border: "none",
              color: player.textColor,
              fontSize: "1.1rem",
              fontWeight: "bold",
              width: "100%",
              marginBottom: "0.5rem",
            }}
          >
            {player.name}
          </p>
        )}
        {editable ? (
          <div className="flex justify-between items-center space-x-2 my-2">
            <p>Text color:</p>

            <ToggleSwitch
              color1="bg-accent"
              color2="bg-primary"
              pip1="bg-black"
              pip2="bg-white"
              border="true"
              size="sm"
              checked={player.textColor === "#ffffff"}
              onChange={() => togglePlayerTextColor(player.id)}
            />
          </div>
        ) : null}
      </div>
      {editable ? (
        <div className="flex justify-between items-center space-x-2">
          <label>Change Color:</label>
          <input
            className="h-4 w-8 rounded-full cursor-pointer border border-white"
            type="color"
            value={player.color}
            onChange={(e) => setPlayerColor(player.color, e.target.value)}
          />
        </div>
      ) : null}

      {editable ? null : (
        <h3 className="font-bold">
          {player.scores.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
          )}
        </h3>
      )}
      {editable ? null : (
        <>
          {hideHistory ? null : <PlayerRoundHistory scores={player.scores} />}
        </>
      )}

      {editable ? null : (
        <input
          className="w-full p-2 my-2 text-sm text-center border rounded-full"
          type="number"
          inputMode="numeric"
          value={score}
          onChange={(e) => onScoreChange(e.target.value)}
          placeholder="Enter score"
        />
      )}
    </div>
  );
}

export default SmallPlayerCard;
