import React, { useState, useRef, useEffect } from "react";

function Timer() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("05:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setMinutes(deadline.getMinutes() + 5);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  const convertSeconds = () => {
    let minutes_divisor = seconds % (60 * 60);
    let minutes = Math.floor(minutes_divisor / 60);

    let seconds_divisor = minutes_divisor % 60;
    let seconds = Math.ceil(seconds_divisor);
  };

  return (
    <div className="Timer">
      {timer}
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}

export default Timer;
