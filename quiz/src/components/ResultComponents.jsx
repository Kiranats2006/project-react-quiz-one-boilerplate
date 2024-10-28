export default function ResultComponent() {
  return (
    <div className="result-container">
      <h1 className="result-title">Quiz Result</h1>
      <div className="score-section">
        <h3 className="performance-feedback">Keep Practicing!</h3>
        <h1 className="score">Your Score: 20%</h1>
        <div className="stats-container">
          <div className="details">
            <h5>Total Questions:</h5>
            <h5>Attempted Questions:</h5>
            <h5>Correct Answers:</h5>
            <h5>Wrong Answers:</h5>
          </div>
          <div className="numbers">
            <h5>15</h5>
            <h5>9</h5>
            <h5>3</h5>
            <h5>6</h5>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <button className="button play">Play Again</button>
        <button className="button home">Back to Home</button>
      </div>
    </div>
  );
}
