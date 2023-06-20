import React from 'react'

const ChildD = ({Props}) => {
    console.log("this message is from CompC to CompD",Props)
  return (
    <div>ChildD:{Props}


    </div>
  )
}

export default ChildD