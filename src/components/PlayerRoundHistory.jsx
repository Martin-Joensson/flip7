function PlayerRoundHistory({ scores }) {
  if (!scores.length) {
    return <p style={{ opacity: 0.7 }}>No rounds yet</p>;
  }

  return (
    <div style={{ marginTop: "0.5rem" }}>
      {scores.map((score, index) => (
          <div
              className="flex justify-between text-sm"
          key={index}
        >
          <span>Round {index + 1}</span>
          <span className="font-bold">{score}</span>
        </div>
      ))}
    </div>
  );
}

export default PlayerRoundHistory;
