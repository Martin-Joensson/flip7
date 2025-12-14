function SmallPlayerCard({ player, score, onScoreChange, onSubmit }) {
  return (
    <div
      style={{
        backgroundColor: player.color,
        padding: "1rem",
        borderRadius: "8px",
        color: "#fff",
        minWidth: "160px",
      }}
    >
      <h3>{player.name}</h3>

      <p>
        <div>
          <span>Round:</span> <span>{score}</span>
        </div>
      </p>

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

      <button
        onClick={onSubmit}
        disabled={score === ""}
        style={{ width: "100%" }}
      >
        Submit
      </button>
    </div>
  );
}

export default SmallPlayerCard;
