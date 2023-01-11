import React from "react";
import "./style.css";

export default function App() {

  const [sec,setSec] = React.useState(0)
let timer;
  function startTimer() {
    setSec(sec + 1)
  }
  

function stopTimer() {
  clearTimeout(timer);

  }

  function resetTimer() {

    setSec(0)
    clearTimeout(timer);
  }

  React.useEffect(() => {
if(sec){
  timer = setTimeout(startTimer, 1000)
}
  },[sec])
  return (
    <div>
      <h1>Timer</h1>
      <p id="counter">{sec}</p>
      <button onClick={stopTimer}>Stop</button>&nbsp;&nbsp;
      <button onClick={resetTimer}>Reset</button>&nbsp;&nbsp;
      <button onClick={startTimer}>Start</button>
    </div>
  );
}
