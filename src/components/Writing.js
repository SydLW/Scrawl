import React, { useState } from "react";
import WritingPrompt from "./WritingPrompt";
import WritingInput from "./WritingInput";
import Timer from "./Timer";
import TimerV2 from "./TimerV2";
import Memories from "./Memories";
import "../styling/Writing.css";

function Writing() {
  const [memories, setMemories] = useState([{ writing: "", date: "" }]);
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdownAtZero, setCountdownAtZero] = useState(false);

  const addMemories = (input, date) => {
    setMemories((oldArray) => [...oldArray, { writing: input, date: date }]);
  };
  const startedTyping = () => {
    setCountdownActive(true);
  };
  const countdownDone = (countdownValue) => {
    setCountdownAtZero(countdownValue);
  };
  return (
    <div className="Writing">
      <h1 className="Writing-header">Writing</h1>
      <WritingPrompt />
      {/* <Timer seconds={timeSeconds} /> */}
      <TimerV2
        seconds={10}
        active={countdownActive}
        countdownDone={countdownDone}
      />
      <WritingInput
        addMemories={addMemories}
        start={startedTyping}
        countdownDone={countdownAtZero}
        startCountdownOver={countdownDone}
      />
      <Memories memories={memories} />
    </div>
  );
}

export default Writing;
