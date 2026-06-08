import { useEffect, useState } from "react";
import "./App.css";
import Alpha from "./components/Alpha";
import User from "./components/User";

// whenever state changes re-render triggers,
// and without dependency array, useEffect runs on every re-render.

// Component Lifecycle :
/**
 
 * Mounting : component appears on screen
 * Updating : state or props changes
 * Unmounting : component removed from UI
 
 */

function App() {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(0);

  // useEffect(()=>{
  //   console.log("Re-render happened")
  // })

  // useEffect(()=>{
  //   console.log("Mounting...")
  // },[])

  // useEffect(()=>{
  //   console.log("Data changed...")
  // },[data])

  // useEffect(()=>{
  //   console.log("Count changed...")
  // },[count])

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* {toggle && <Alpha/>} */}
      {toggle && <User />}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </>
  );
}

export default App;
