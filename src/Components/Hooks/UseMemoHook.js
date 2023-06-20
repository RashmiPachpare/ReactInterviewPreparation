import React, { useState } from 'react'
import { useMemo } from 'react';

function UseMemoHook  () {
    const[a ,SetA]=useState(0);
    const[b,SetB]=useState(0);

    const result=useMemo(()=>{
        console.log("calculating result")
        return a+b;
    },[a+b])
  return (
    <div>
       <p>Result:{result}</p>
       <button onClick={()=>SetA(a+1)}>increment</button>
       <button onClick={()=>SetB(b+1)}>increment</button>


    </div>
  )
}

export default UseMemoHook