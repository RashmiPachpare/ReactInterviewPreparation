import React, { useCallback, useState } from 'react'
import UsecallbackChild from './UsecallbackChild';

function UsecallbackHook (props) {
    const[count,setCount]=useState(0);

    const handleClick=useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
       <p>UsecallbackHook:{count}</p>
       <button onClick={handleClick}>Increment</button>
       <UsecallbackChild handleClick={handleClick}/>

    </div>
  )
}

export default UsecallbackHook