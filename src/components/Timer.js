import React, { useState, useRef, useEffect } from "react";

function Timer(props) {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00");
  //const [secs, setSecs] = useState(props.seconds);

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
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer(convertSeconds(props.secs));
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const onClickStart = (e) => {};

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setMinutes(deadline.getMinutes() + 5);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime);
  }, []);

  const convertSeconds = (secs) => {
    let minutes_divisor = secs % (60 * 60);
    let minutes = Math.floor(minutes_divisor / 60);

    let seconds_divisor = minutes_divisor % 60;
    let seconds = Math.ceil(seconds_divisor);

    setTimer(minutes + ":" + seconds);
  };

  return (
    <div className="Timer">
      <button onClick={onClickStart}>Start</button>
      {timer}
      {/* <button onClick={onClickReset}>Reset</button> */}
    </div>
  );
}

export default Timer;
