import React from 'react'
import { useEffect } from 'react'

const UseEffectUnmount = () => {
    useEffect (()=>{
        return function cleanUPFunction(){
            console.log("component unmounted")
        }
    },[])
  return (
    <div>UseEffectUnmount</div>
  )
}

export default UseEffectUnmount