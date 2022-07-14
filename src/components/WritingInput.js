import "../styling/WritingInput.css";
import React, { useState } from "react";
function WritingInput(props) {
  const [input, setInput] = useState("");

  const onEntry = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(input);
    props.addMemories(input);
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="WritingInput">
      <div className="input">
        <label>
          <textarea
            className="WritingInput-text-box"
            value={input}
            onChange={onEntry}
          ></textarea>
        </label>
      </div>
      <div className="WritingInput-button-container">
        <button className="WritingInput-button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default WritingInput;
