import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // Calculate target date
  const today = new Date();
  const targetDate = new Date();
  targetDate.setDate(today.getDate() + count);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const targetDateStr = targetDate.toLocaleDateString("en-US", options);

  return (
    <div className="container">
      <h1 className="title">Step & Count App</h1>
      <div className="box">
        <h2>Steps: {step}</h2>
        <div className="btn-group">
          <button onClick={() => setStep(step > 1 ? step - 1 : 1)}>-</button>
          <button onClick={() => setStep(step + 1)}>+</button>
        </div>
      </div>
      <div className="box">
        <h2>Count: {count}</h2>
        <div className="btn-group">
          <button onClick={() => setCount(count - step)}>-</button>
          <button onClick={() => setCount(count + step)}>+</button>
        </div>
      </div>
      <h3 className="result">
        {count === 0 ? (
          <>
            Today is <span>{targetDateStr}</span>
          </>
        ) : count < 0 ? (
          <>
            We are <span>{Math.abs(count)}</span> days ago from today is{" "}
            <span>{targetDateStr}</span>
          </>
        ) : (
          <>
            We are <span>{count}</span> days from today is{" "}
            <span>{targetDateStr}</span>
          </>
        )}
      </h3>
    </div>
  );
}
