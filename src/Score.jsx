const Score = ({ date, score }) => {
  return (
    <div className="scores">
      <h4>{date}</h4>
      <h3>{score}</h3>
    </div>
  );
};

export default Score;
