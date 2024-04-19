import React, { useState, useEffect, useRef } from "react";

const Timer = ({ timer, handleResetSubmit }) => {
  const [time, setTime] = useState(timer);
  const [pause, setPause] = useState(false);
  let timerRef = useRef(null);

  const startTimer = () => {
    if (time > 0) {
      setTime((time) => time - 1000);
      setPause(false);
    }
  };

  const stopTimer = () => {
    clearTimeout(timerRef.current);
    setPause(true);
  };

  const handleReset = () => {
    handleResetSubmit();
  };

  useEffect(() => {
    if (time === null) {
      setTime(timer);
    }
    timerRef.current = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    if (time <= 0) {
      console.log(timerRef.current);
      clearTimeout(timerRef.current);
      // onComplete();
      console.log("completed");
      setPause(true);
    }

    return () => clearTimeout(timerRef.current);
  }, [time, timer]);

  const getFormattedText = (timer) => {
    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS;
    const HOURS = 60 * MINUTES;
    const DAYS = 24 * HOURS;

    const hours = Math.floor((time % DAYS) / HOURS);
    const minutes = Math.floor((time % HOURS) / MINUTES);
    const seconds = Math.floor((time % MINUTES) / SECONDS);
    return (
      <div className="countdown-timer">
        {hours < 10 ? `0${hours}` : hours} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  };

  return (
    <div>
      {console.log(time)}
      {getFormattedText(time)}
      <button onClick={pause ? startTimer : stopTimer}>
        {!pause ? "Stop" : "Start"} Timer
      </button>
      {/* <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button> */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
