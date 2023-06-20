import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,Decrement } from './counterSlice';


const Counter = () => {
    const dispatch=useDispatch();
    const Data=useSelector((state)=>state.Counter.value);
  return (
    <div>Counter Value:{Data}<br></br>
    <button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(Decrement())}>Decrement</button>

    </div>
  )
}

export default Counter