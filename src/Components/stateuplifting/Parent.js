import React, { useState } from 'react'
import Child1 from './Child1';


const Parent = () => {
      const [state,setState]=useState();

      function getterFunction (value){
        setState(value)

      }

  return (
    <div>Parent:{state}
    <Child1 data="this is from parent component"  getter={getterFunction}/>


    </div>
  )
}

export default Parent