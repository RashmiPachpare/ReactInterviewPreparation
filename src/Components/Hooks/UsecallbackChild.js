import React from 'react'

function UsecallbackChild (props) {
  return (
    <div>UsecallbackChild
        <button onClick={props.handleClick}>increment</button>
    </div>
  )
}

export default UsecallbackChild