import React, { useState } from "react";
import WritingPrompt from "./WritingPrompt";
import WritingInput from "./WritingInput";
import Timer from "./Timer";
import TimerV2 from "./TimerV2";
import Memories from "./Memories";
import "../styling/Writing.css";

function Writing() {
  const [memories, setMemories] = useState([
    { writing: "", date: "", prompt: "" },
  ]);
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdownAtZero, setCountdownAtZero] = useState(false);
  const [submittedStopTimer, setSubmittedStopTimer] = useState(false);
  const [writingPrompt, setWritingPrompt] = useState("");

  const addMemories = (input, date, prompt) => {
    setMemories((oldArray) => [
      ...oldArray,
      { writing: input, date: date, prompt: prompt },
    ]);
  };
  const startedTyping = () => {
    setCountdownActive(true);
  };
  const countdownDone = (countdownValue) => {
    setCountdownAtZero(countdownValue);
  };

  const submitStopTimer = (submitted) => {
    setSubmittedStopTimer(submitted);
  };

  const getWritingPrompt = (prompt) => {
    setWritingPrompt(prompt);
  };

  return (
    <div className="Writing">
      <h1 className="Writing-header">Writing</h1>
      <WritingPrompt getPrompt={getWritingPrompt} />
      {/* <Timer seconds={timeSeconds} /> */}
      <TimerV2
        seconds={10}
        active={countdownActive}
        countdownDone={countdownDone}
        submitted={submittedStopTimer}
        resetSubmit={submitStopTimer}
      />
      <WritingInput
        addMemories={addMemories}
        prompt={writingPrompt}
        start={startedTyping}
        submitted={submitStopTimer}
        startCountdownOver={countdownDone}
      />
      <Memories memories={memories} />
    </div>
  );
}

export default Writing;
