import { useDispatch, useSelector } from "react-redux"
import { changeBy, decrement, increment } from "../features/counter/counterSlice.js"
import { useState } from "react"

const Counter = () => {
    const [changeAmt, setChangeAmt] = useState('');
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>This is counter component</h1>
      <h2>{count}</h2>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <br />
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
     


      <h2>Change by amount</h2>
      <input type="text" placeholder="Enter a amount" value={changeAmt} onChange={(e)=>setChangeAmt(e.target.value)} />
       <br />
      <button onClick={()=>{dispatch(changeBy(changeAmt)); setChangeAmt('')}}>Change By</button>
    </div>
  )
}

export default Counter
