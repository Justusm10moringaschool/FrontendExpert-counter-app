import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(100);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Button
        </button>
        <p>Count: {count}</p>

        {/* another button */}

        <button
          onClick={() => {
            setCounter(counter - 5);
          }}
        >
          Decrement Button
        </button>
        <h1>counter: {counter}</h1>
      </div>
    </>
  );
}
