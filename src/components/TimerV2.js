import React, { useState, useEffect } from "react";
function converSecondstoString(secs) {
  let minutes_divisor = secs % (60 * 60);
  let minutes = Math.floor(minutes_divisor / 60);

  let seconds_divisor = minutes_divisor % 60;
  let seconds = Math.ceil(seconds_divisor);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (seconds === 0) {
    seconds = "00";
  }

  return minutes + ":" + seconds;
}
function TimerV2(props) {
  const [secondsRemaining, setSecondsRemaining] = useState(props.seconds);

  const reset = () => {
    setSecondsRemaining(props.seconds);
  };

  useEffect(() => {
    if (secondsRemaining === 0) {
      props.countdownDone(true);
    }
    if (secondsRemaining > 0 && props.active === true) {
      const interval = setInterval(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [secondsRemaining, props.active]);

  const timerString = converSecondstoString(secondsRemaining);
  return (
    <div className="Timer">
      {timerString}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default TimerV2;
