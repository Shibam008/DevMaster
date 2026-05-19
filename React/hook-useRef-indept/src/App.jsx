import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {

  //* Problem statement : Count re-renders (How many times our page re-renders)


  const [randomNumber, setRandomNumber] = useState(0)
  // const [rerenderCnt, setRerenderCnt] = useState(0)
  const rerenderCntRef = useRef(0);

  const generateRandomNum = ()=>{
    const num = Math.floor(Math.random() * 100)
    setRandomNumber(num)
  }


  useEffect(()=>{
    console.log("re-render hua")

    rerenderCntRef.current += 1;

    // setRerenderCnt(prev => prev + 1)
  })
  //& if we want to save state of that re-render cnt 
  //& the useState again re-render the page 
  //& it cause infinite loop.

  return (
    <>
      <div>
        <h1>Random Number : {randomNumber}</h1>
        <br />
        <h2>Re-render count : {rerenderCntRef.current}</h2>
        <button onClick={generateRandomNum}>Increment</button>
      </div>
    </>
  )
}

export default App
