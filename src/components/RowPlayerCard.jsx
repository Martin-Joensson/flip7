import { useGameStore } from "../stores/gameStore";
import PlayerRoundHistory from "./PlayerRoundHistory";
export const RowPlayerCard = ({ player, score, onScoreChange, onSubmit }) => {
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  let initialValue = 0;

  return (
    <div
      className={player.id}
      style={{
        padding: "1rem",
        borderRadius: "8px",
        color: "#fff",
        minWidth: "160px",
      }}
    >
      {/* Editable name */}
      <input
        value={player.name}
        onChange={(e) => setPlayerName(player.id, e.target.value)}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: "bold",
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
      <h3>
        {player.scores.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        )}
      </h3>

      <PlayerRoundHistory scores={player.scores} />

      <input
        type="number"
        value={score}
        onChange={(e) => onScoreChange(e.target.value)}
        placeholder="Score"
        style={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />
    </div>
  );
};
