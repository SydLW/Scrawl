import "../styling/DayStreak.css";

function DayStreak(props) {
  return <div className="DayStreak"> Streak: {props.days} Days</div>;
}
export default DayStreak;
