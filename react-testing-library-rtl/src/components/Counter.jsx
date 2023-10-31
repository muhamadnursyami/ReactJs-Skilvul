import { useState } from "react"


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(state => state-1)}>-</button>
        <span>{count}</span>
        <button>+</button>
    </div>
  )
}

export default Counter