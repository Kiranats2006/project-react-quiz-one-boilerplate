
import "../css/QuizComponent.css";

export default function QuizComponent() {
  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz Time!</h2>

      {/* Question 1 */}
      <div className="question-container">
        <div className="question-info">
          <span className="question-number">Question 1 of 15</span>
          <p className="question-text">What is the capital of France?</p>
        </div>
        <div className="options-grid">
          <p className="option">Berlin</p>
          <p className="option">Madrid</p>
          <p className="option">Paris</p>
          <p className="option">Rome</p>
        </div>
      </div>

      {/* Question 2 */}
      <div className="question-container">
        <div className="question-info">
          <span className="question-number">Question 2 of 15</span>
          <p className="question-text">Which planet is known as the Red Planet?</p>
        </div>
        <div className="options-grid">
          <p className="option">Venus</p>
          <p className="option">Saturn</p>
          <p className="option">Mars</p>
          <p className="option">Jupiter</p>
        </div>
      </div>

      {/* Question 3 */}
      <div className="question-container">
        <div className="question-info">
          <span className="question-number">Question 3 of 15</span>
          <p className="question-text">Who wrote To Kill a Mockingbird?</p>
        </div>
        <div className="options-grid">
          <p className="option">Harper Lee</p>
          <p className="option">Mark Twain</p>
          <p className="option">Ernest Hemingway</p>
          <p className="option">F. Scott Fitzgerald</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="controls-container">
        <button className="control-button previous">Previous</button>
        <button className="control-button next">Next</button>
        <button className="control-button quit">Quit</button>
      </div>
    </div>
  );
}
