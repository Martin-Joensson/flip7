function PlayerRoundHistory({ scores }) {
  if (!scores.length) {
    return <p style={{ opacity: 0.7 }}>No rounds yet</p>;
  }

  return (
    <div style={{ marginTop: "0.5rem" }}>
      {scores.map((score, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.9rem",
          }}
        >
          <span>Round {index + 1}</span>
          <span>{score}</span>
        </div>
      ))}
    </div>
  );
}

export default PlayerRoundHistory;
