import "../styling/WritingInput.css";
import React, { useState, useEffect } from "react";
function WritingInput(props) {
  const [input, setInput] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  const onEntry = (e) => {
    setInput(e.target.value);
  };

  const getCurrentDate = () => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return date;
  };

  const onSubmit = (e) => {
    props.addMemories(input, getCurrentDate());
    e.preventDefault();
    setInput("");
  };

  const timedSubmit = () => {
    props.addMemories(input, getCurrentDate());
    props.startCountdownOver(false);
    setInput("");
  };

  const onInput = () => {
    if (hasStarted === false) {
      props.start();
      setHasStarted(true);
    }
  };

  useEffect(() => {
    if (props.countdownDone) {
      timedSubmit();
    }
  }, [props.countdownDone]);

  return (
    <div className="WritingInput">
      <div className="input">
        <label>
          <textarea
            className="WritingInput-text-box"
            value={input}
            onChange={onEntry}
            onInput={onInput}
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
