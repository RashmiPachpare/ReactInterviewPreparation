import React, { createContext, useState } from 'react'
import ChildA from './ChildA'


export const context=createContext();
function ParentContext ()  {
  const [name,setName]=useState("Rashmi");
  console.log("the data is in parent context",name)

  return (
    <div>
      <p>Data in parent:{name}</p>
      <context.Provider  value={name}>
       <ChildA/>
      </context.Provider>


    </div>
  )
}

export default ParentContext