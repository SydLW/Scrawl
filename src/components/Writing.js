import React, { useState } from "react";
import WritingPrompt from "./WritingPrompt";
import WritingInput from "./WritingInput";
import DayStreak from "./DayStreak";
import TimerV2 from "./TimerV2";
import Memories from "./Memories";
import "../styling/Writing.css";

const MOCK_PROMPT = "She had waited twenty years for ...";

function Writing() {
  const [memories, setMemories] = useState([
    { writing: "", date: "", prompt: "" },
  ]);
  const [countdownActive, setCountdownActive] = useState(false);
  const [countdownAtZero, setCountdownAtZero] = useState(false);
  const [submittedStopTimer, setSubmittedStopTimer] = useState(false);
  const [writingPrompt, setWritingPrompt] = useState(MOCK_PROMPT);
  const [dayStreak, setDayStreak] = useState(0);

  const addMemories = (input) => {
    const current = new Date();
    const newDate = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    setMemories((oldArray) => [
      ...oldArray,
      { writing: input, date: newDate, prompt: writingPrompt },
    ]);
  };

  const handleDayStreak = () => {
    setDayStreak(5);
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

  return (
    <div className="Writing">
      <DayStreak days={dayStreak} />
      <h1 className="Writing-header">
        <em>Scrawl</em>
      </h1>
      <WritingPrompt prompt={writingPrompt} />
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
        countdownAtZero={countdownAtZero}
      />
      <Memories memories={memories} />
    </div>
  );
}

export default Writing;
