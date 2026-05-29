import { useMyContext } from "../MyContext.jsx"

const F = () => {
  const {setCount} = useMyContext();

  return (
    <div className='bg-pink-700 min-h-20 min-w-20'>
      <p>F</p>
      <button onClick={()=>setCount(prev => prev + 1)} className="bg-white text-red-800 font-medium text-sm p-1 rounded-md">Count</button>
    </div>
  )
}

export default F
