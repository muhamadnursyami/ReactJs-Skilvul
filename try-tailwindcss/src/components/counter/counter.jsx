// import React from 'react'

import { useState } from "react"

export default function Counter() {

    const [counter, setCounter] = useState(1);

    const increment= () =>{
        setCounter(counter+1)
    }
    const decrement= () =>{
        setCounter(counter === 0 ? 0 : counter -1)
    }
  return (
    <div className="flex justify-center mt-10" >
        <button className="p-3 bg-slate-200 rounded-full" onClick={decrement}>-</button>
        <p className="mx-5">{counter}</p>
        <button className="p-3 bg-slate-200 rounded-full" onClick={increment}>+</button>
    </div>
  )
}
