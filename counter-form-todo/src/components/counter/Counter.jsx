import { useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(1);

    function decrement () {
        setCounter(counter ===0 ? 0 : counter -1);
    }
    function increment () {
        setCounter(counter+1);
    }

  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}
