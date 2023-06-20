import React from 'react'
import { useRef } from 'react';

const UncontrolledComponent = () => {
    const NameRef=useRef("");
    const EmailRef=useRef("");


    const HandleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name is",NameRef.current.value)
        console.log("Email is",EmailRef.current.value)
    }


  return (
    <div>
<input type="text" name="name" ref={NameRef}></input>
<input type="text" name="email" ref={EmailRef}></input>
<button onClick={HandleSubmit}>submit</button>

    </div>
  )
}

export default UncontrolledComponent