import React from 'react'
import HocComponent from './HocComponent'

const MouseHover = (props) => {


  return (
    <div>MouseHover:{props.count}

<button onMouseOver={props.updateClick}>update</button>

    </div>
  )
}

export default HocComponent(MouseHover)