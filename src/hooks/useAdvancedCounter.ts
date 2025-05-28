/**
 * Τα hooks τα ονόματα τα ξεκινάμε με
 * Use...
 * Μόνο κώδικας ts που περιλαμβάνει
 * λειτουργίες, όχι ui
 */
import {useState} from "react";

type CounterState = {
  count: number;
  lastAction: string;
  time: string
}

export const useAdvancedCounter = (initialValue: number = 0) => {

  const [state, setState] = useState<CounterState>({
    count: initialValue,
    lastAction: "",
    time: "",
  })

  const getCurrentTime = () => new Date().toLocaleTimeString()

  const increase = () => {
    setState({
      count: state.count + 1,
      lastAction: "Increase",
      time: getCurrentTime()
    });
  }

  const decrease = () => {
    if (state.count > 0) {
      setState({
        count: state.count - 1,
        lastAction: "Decrease",
        time: getCurrentTime()
      });
    }
  }

  const reset = () => {
    if (state.count > 0) {
      setState({
        count: initialValue,
        lastAction: "Reset",
        time: getCurrentTime()
      });
    }
  }

  // return τις μεταβλητές και functions
  return {
    count: state.count,
    lastAction: state.lastAction,
    time: state.time,
    // state,
    increase,
    decrease,
    reset,
  };
}



