import React, { useState } from 'react'

const ControlledComponent = () => {
    const[Name,setName]=useState("");

    const HandleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name is", Name)
    }
  return (

    <div>
         <input type="text" name="Name" value={Name} onChange={(e)=>{setName(e.target.value)}}></input>
            <button onClick={HandleSubmit}>Submit</button>
        </div>
  )
}

export default ControlledComponent