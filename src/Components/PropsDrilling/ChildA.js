import React, { useState } from 'react'
import ChildB from './ChildB'

const ChildA = () => {
    const [Message,setMessage]=useState("this is App Component Message")

  return (
    <div>ChildA:{Message}
    <ChildB Props={Message}/>

    </div>
  )
}

export default ChildA