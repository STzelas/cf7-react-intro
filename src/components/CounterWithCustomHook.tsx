import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const CounterWithCustomHook = () => {

  // custom hook function
  const {count, increase, decrease, reset} = useCounter()

  return (
    <>
      <>
        <div className="space-y-8 pt-12">
          <h1 className="text-center text-2xl font-semibold">Count is {count}</h1>
          <div className="text-center space-x-4">
            <CounterButton onClick={increase} label="Increase" addClass={"bg-green-600"}/>
            <CounterButton onClick={decrease} label={"Decrease"} disabled={count === 0} addClass={"bg-red-600"}/>
            <CounterButton onClick={reset} label={"Reset"} disabled={count === 0} addClass="bg-cf-dark-red"/>
          </div>
        </div>
        {/*<p className={"text-center pt-8"}>Last change: <strong>{lastAction || "-"}</strong> at: <strong>{time}</strong></p>*/}
      </>
    </>
  )
}

export default CounterWithCustomHook;