import React, { useState } from "react";
import "../styling/WritingPrompt.css";
function WritingPrompt(props) {
  const sendPrompt = () => {
    props.getPrompt("She had waited twenty years for ...");
  };
  return (
    <div className="WritingPrompt">
      <p>"She had waited twenty years for ..." {sendPrompt}</p>
    </div>
  );
}
export default WritingPrompt;
