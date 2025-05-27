import CounterButton from "./CounterButton.tsx";
import {useState} from "react";

type CounterState = {
  count: number;
  lastAction: string;
  time: string
}

const CounterAdvanced = () => {

  // Για να περάσουμε το prop στο state περνάει όπως κάτω
  const [state, setState] = useState<CounterState>({
    count: 0,
    lastAction: "",
    time: "",
  })

  const getCurrentTime = () => new Date().toLocaleTimeString()

  const increaseCount = () => {
    setState({
      count: state.count + 1,
      lastAction: "Increase",
      time: getCurrentTime()
    })
  }

  const decreaseCount = () => {
    if (state.count > 0) {
      setState({
        count: state.count - 1,
        lastAction: "Decrease",
        time: getCurrentTime()
      })
    }

  }

  const reset = () => {
    if (state.count > 0) {
      setState({
        count: 0,
        lastAction: "Reset",
        time: getCurrentTime()
      })
    }

  }

  return (
    <>
      <div className="space-y-8 pt-12">
        <h1 className="text-center text-2xl font-semibold">Count is {state.count}</h1>
        <div className="text-center space-x-4">
          <CounterButton onClick={increaseCount} label="Increase" addClass={"bg-green-600"}/>
          <CounterButton onClick={decreaseCount} label={"Decrease"} disabled={state.count === 0} addClass={"bg-red-600"}/>
          <CounterButton onClick={reset} label={"Reset"} disabled={state.count === 0} addClass="bg-cf-dark-red"/>
        </div>
      </div>
      <p className={"text-center pt-8"}>Last change: <strong>{state.lastAction || "-"}</strong> at: <strong>{state.time}</strong></p>
    </>
  )
}

export default CounterAdvanced;