import React, { useState } from "react";
import "../styling/Memories.css";
import MemoryItem from "./MemoryItem";
function Memories(props) {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    setShow((current) => !current);
  };

  return (
    <div className="Memories">
      <button className="Memories-button" onClick={handleClick}>
        Memories
      </button>
      {show && (
        <div>
          <ul className="Memories-list">
            {props.memories.map((arrayItem) => (
              <MemoryItem item={arrayItem} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Memories;
