import React from 'react'
import ChildD from './ChildD'

const ChildC = ({Props}) => {
    console.log("this message is from compA to CompB",Props)
  return (
    <div>ChildC:{Props}
    <ChildD Props={Props}/>


    </div>
  )
}

export default ChildC