import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {
  const [count, setCount] = useState(0);

  const [lastAction, setLastAction] = useState("");
  const [time, setTime] = useState("");

  const getCurrentTime = () => new Date().toLocaleTimeString()

  const increaseCount = () => {
    setCount(count + 1);
    setLastAction("Increase");
    setTime(getCurrentTime)
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setLastAction("Decrease");
      setTime(getCurrentTime)
    }
  }

  const reset = () => {
    setCount(0);
    setLastAction("Reset");
    setTime(getCurrentTime)
  }

  return (
    <>
      <div className="space-y-8 pt-12">
        <h1 className="text-center text-2xl font-semibold">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increaseCount} label="Increase" addClass={"bg-green-600"}/>
          <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={count === 0} addClass={"bg-red-600"}/>
          <CounterButton onClick={reset} label={"Reset"} disabled={count === 0} addClass="bg-cf-dark-red"/>
        </div>
      </div>
      <p className={"text-center pt-8"}>Last change: <strong>{lastAction}</strong> at: <strong>{time}</strong></p>
    </>
  )
}

export default CounterWithMoreStates;