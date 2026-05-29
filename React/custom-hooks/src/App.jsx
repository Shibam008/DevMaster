import './App.css'
import { useCounter } from './customHooks/useCounter'

function App() {

  const {count, increment, decrement} = useCounter(0);


  return (
   <>
    <h1>{count}</h1>
    <br />
    <button onClick={increment}>Increment</button>
    <br />
    <button onClick={decrement}>Decrement</button>
   </>
  )
}

export default App
