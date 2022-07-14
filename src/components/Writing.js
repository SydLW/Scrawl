import React, { useState } from "react";
import WritingPrompt from "./WritingPrompt";
import WritingInput from "./WritingInput";
import Timer from "./Timer";
import Memories from "./Memories";
import "../styling/Writing.css";

function Writing() {
  const [memories, setMemories] = useState([]);
  const addMemories = (input) => {
    setMemories((oldArray) => [...oldArray, input]);
  };
  return (
    <div className="Writing">
      <h1 className="Writing-header">Writing</h1>
      <WritingPrompt />
      <Timer />
      <WritingInput addMemories={addMemories} />
      <Memories memories={memories} />
    </div>
  );
}

export default Writing;
