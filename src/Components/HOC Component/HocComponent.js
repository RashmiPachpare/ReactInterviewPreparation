import React, { useState } from 'react'

const HocComponent = (WrappedComponent) => {
    function HocComp(){
        const [state,setState]=useState(0)

        const handleClick=()=>{
            setState(state+1)

        }
    
  return (
    <div>HocComponent

  <WrappedComponent  count={state}   updateClick={handleClick}/>

    </div>
  )
    }
    return HocComp;
}

export default HocComponent
