import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import { changeName } from './features/counter/counterSlice'
import User from './components/User'

function App() {
  
  const name = useSelector(state => state.counter.name)
  const dispatch = useDispatch();


  console.log(name)

  return (
   <>
   <Counter/>

   <br />
   <br />

   <h3>My name is : {name}</h3>
   <br />
   <input type="Enter your name" value={name} onChange={(e)=>dispatch(changeName(e.target.value))} />

   <br />

   <User/>
   </>
  )
}

export default App
