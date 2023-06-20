import React, { useContext } from 'react'
import { context } from './ParentContext';

function ChildC () {
    const name=useContext(context);
    console.log("data passed directly to child c:",name)
  return (
    <div>
        <p>passed in childdC:{name}</p>



    </div>
  )
}

export default ChildC