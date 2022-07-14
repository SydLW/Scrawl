import React, { useState } from "react";
import "./styling/App.css";
import Writing from "./components/Writing";
import DayStreak from "./components/DayStreak";
import Memories from "./components/Memories";

function App() {
  const [days, setDays] = useState(0);

  const handleDayStreak = () => {
    setDays(5);
  };

  return (
    <div className="App">
      <DayStreak days={days} />
      <Writing />
    </div>
  );
}

export default App;
