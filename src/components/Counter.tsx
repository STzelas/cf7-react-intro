import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="space-y-8 pt-12">
        <h1 className="text-center text-2xl font-semibold">Count is {count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increaseCount} label="Increase" addClass={"bg-green-600"}/>
          <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={count === 0} addClass={"bg-red-600"}/>
          <CounterButton onClick={reset} label={"Reset"} disabled={count === 0} addClass="bg-red-400"/>
        </div>
      </div>
    </>
  )
}

export default Counter;
