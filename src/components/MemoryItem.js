import React, { useState } from "react";

function MemoryItem(props) {
  return (
    <li>
      {props.item.date}
      <div>{props.item.prompt}</div>
      <div>{props.item.writing}</div>
    </li>
  );
}

export default MemoryItem;
