import React, { useState } from "react";
import "../styling/WritingPrompt.css";
function WritingPrompt(props) {
  return (
    <div className="WritingPrompt">
      <p>"{props.prompt}" </p>
    </div>
  );
}
export default WritingPrompt;
