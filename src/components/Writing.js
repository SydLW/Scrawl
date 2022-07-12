import WritingPrompt from "./WritingPrompt";
import WritingInput from "./WritingInput";
import Timer from "./Timer";
import "../styling/Writing.css";

function Writing() {
  return (
    <div className="Writing">
      <h1>Writing</h1>
      <WritingPrompt />
      <Timer />
      <WritingInput />
    </div>
  );
}

export default Writing;
