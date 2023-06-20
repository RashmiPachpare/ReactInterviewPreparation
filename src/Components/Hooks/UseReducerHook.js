import React, { useReducer } from 'react'

function UseReducerHook  ()  {
    const initial=0;
    const reducer=(state,action)=>{
        switch(action)
        {
            case "add" :return state+1;
            case "sub" :return state-1;
            case "reset":return 0;
            default:return 0;
        }
    }
        const[value,dispatch]=useReducer(reducer,initial)
    
  return (
    <div>
<h1>{value}</h1>
<button onClick={()=>dispatch("add")}>Add</button>
<button onClick={()=>dispatch("sub")}>Sub</button>
<button onClick={()=>dispatch("reset")}>reset</button>

    </div>
  )
}

export default UseReducerHook