import "../styling/WritingInput.css";

function WritingInput() {
  return (
    <div className="WritingInput">
      <div className="input">
        <label>
          <textarea className="WritingInput-text-box"></textarea>
        </label>
      </div>
      <button>Submit</button>
    </div>
  );
}
export default WritingInput;
