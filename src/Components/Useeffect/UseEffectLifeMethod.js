import React, { useEffect, useState } from 'react'
import UseEffectUnmount from './UseEffectUnmount';

const UseEffectLifeMethod = () => {
    const[count,setCount]=useState(0);
    const[show,setShow]=useState(true);

    useEffect (()=>{
        console.log("component is mounted  😍")
    },[])

    useEffect (()=>{
        console.log("component is updated")
    },[count])

return (
    <div>Counter:{count}
    <button onClick={()=>{setCount(count+1)}}>➕</button>

    <button onClicl={()=>{setShow(!show)}}>toggle</button>
    
    {show && <UseEffectUnmount/>}


    </div>
  )
}

export default UseEffectLifeMethod