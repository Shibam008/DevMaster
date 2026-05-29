import './App.css'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'


function App() {
 

  return (
   <div className='flex flex-col min-h-screen'>
    <Navbar/>

    <div className='pt-20 flex-1 flex justify-center items-center'>
      <Outlet/>
    </div>
    
   </div>
  )
}

export default App
