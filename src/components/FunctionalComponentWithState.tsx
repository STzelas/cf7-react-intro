import {useState} from "react";

const FunctionalComponentWithState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div className="space-y-8 pt-12">
        <h1 className="text-center text-2xl font-semibold">Count is {count}</h1>
        <div className="text-center space-x-4">
          <button
            onClick={increaseCount}
            className={"bg-green-700 text-white py-2 px-4 rounded-xl"}>
            Increase
          </button>
          <button
            className="bg-red-700 text-white py-2 px-4 rounded-xl"
            onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default FunctionalComponentWithState;