import React from 'react'
import ChildC from './ChildC'

const ChildB = ({Props}) => {
    console.log("this message is from Comp1 to Comp2",Props)
  return (
    <div>ChildB:{Props}
    <ChildC Props={Props}/>
    
    </div>
  )
}

export default ChildB