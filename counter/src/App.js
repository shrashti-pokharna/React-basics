import "./App.css";
import React, { useState } from "react";
import Timer from "./Timer";

function App() {
  const [timer, setTimer] = useState(null);
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    const [hours, minutes, seconds] = e.target.value.split(":");
    let deadline = new Date();
    const totalSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    deadline.setSeconds(deadline.getSeconds() + totalSeconds);
    const total = Date.parse(deadline) - Date.parse(new Date());
    setTimer(total);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      {!submit ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3 style={{ paddingRight: "20px" }}>
            Enter the time that you want in your timer :
          </h3>
          <input
            style={{ position: "absolute", top: "26%", left: "63%" }}
            type="time"
            step="1"
            onChange={(e) => handleChange(e)}
          />
        </div>
      ) : null}
      {!submit ? <button onClick={() => setSubmit(true)}>Submit</button> : null}
      {submit ? (
        <Timer timer={timer} handleResetSubmit={() => setSubmit(false)} />
      ) : null}
    </div>
  );
}

export default App;
