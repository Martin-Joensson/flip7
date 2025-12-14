import { useGameStore } from "../stores/gameStore";
import { useSettingStore } from "../stores/settingsStore";
import PlayerRoundHistory from "./PlayerRoundHistory";
import crown from "../assets/crown2.png";

function SmallPlayerCard({ player, score, onScoreChange, onSubmit, isWinner }) {
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const hideHistory = useSettingStore((s) => s.hideHistory);
  let initialValue = 0;

  return (
    <div className="relative p-1 border rounded-lg min-w-12">
      {isWinner ? (
        <img className="w-20 absolute -top-10 rotate-40 right-1" src={crown} />
      ) : null}
      {/* Editable name */}
      <div className={player.id}>
        <input
          className="px-2"
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
      </div>
      <h3>
        {player.scores.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initialValue
        )}
      </h3>

      {hideHistory ? null : <PlayerRoundHistory scores={player.scores} />}

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
}

export default SmallPlayerCard;
