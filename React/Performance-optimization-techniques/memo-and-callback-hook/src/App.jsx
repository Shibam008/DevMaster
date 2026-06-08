/* eslint-disable no-unused-vars */
import Cart from "./components/Cart"
import Child from "./components/Child"
import "./App.css"
import { useCallback, useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0)

  // if we directly pass this function as prop
  // every re-render creates a new reference of non-primitive values
  // that's why React.memo() fails to prevent child re-render
  const handleClick = () => {
    console.log("I am clicked")
  }

  // const memoizedFn = useCallback(()=>{
  //   return handleClick()
  // },[])

  const handleClickMemoized = useCallback(()=>{
    console.log("I am clicked and stored")
  }, [])

  console.log("parent rendered.")

  return (
    <div className="parent">

      <h1>Parent Component</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Click</button>

      {/* useMemo example */}
      {/* <Cart/>  */}  

      {/* useCallback example */}
      <Child handleClick={handleClickMemoized}/>

    </div>
  )
}

export default App
