import "./styling/App.css";
import Writing from "./components/Writing";
import DayStreak from "./components/DayStreak";
import Memories from "./components/Memories";

function App() {
  return (
    <div className="App">
      <h>
        <DayStreak />
      </h>
      <Writing />
      <Memories />
    </div>
  );
}

export default App;
