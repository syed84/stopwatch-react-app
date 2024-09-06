import { useEffect, useState } from "react";

const Stopwatch = (props) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [running, time]);

  const hr = Math.floor(time / 360000);
  const min = Math.floor((time % 36000) / 6000);
  const sec = Math.floor((time % 6000) / 100);
  const mili = Math.floor(time % 100);

  const startAndStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
    setRunning(!running);
  };

  return (
    <div className="App">
      <h1>{props.hd}</h1>
      <h1>
        <span>{hr.toString().padStart(2, "0")}</span>:
        <span>{min.toString().padStart(2, "0")}</span>:
        <span>{sec.toString().padStart(2, "0")}</span>:
        <span>{mili.toString().padStart(2, "0")}</span>
      </h1>
      <div>
        <button onClick={startAndStop}>{running ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
