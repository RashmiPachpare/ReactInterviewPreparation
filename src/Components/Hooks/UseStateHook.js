import React from 'react'
import { useState } from 'react';

const UseStateHook = () => {
    
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

  return (
    <div>
      <p>counter:{count}</p>
     <button onClick={increment}>➕</button>
     <button onClick={decrement}>⛔</button>

    </div>
  )
}

export default UseStateHook;