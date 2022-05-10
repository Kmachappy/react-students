const Score = ({ date, score }) => {
  return (
    <div className="scores">
      <div className="date">
        <h4>date</h4>
        <h4>{date}</h4>
      </div>
      <div className="score">
        <h4>score</h4>
        <h3>{score}</h3>
      </div>
    </div>
  );
};

export default Score;
