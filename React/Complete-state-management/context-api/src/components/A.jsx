import { useMyContext } from "../MyContext.jsx"
import C from "./C.jsx"
import D from "./D.jsx"

const A = () => {

  const {count} = useMyContext();

  return (
    <div className='bg-gray-600 min-h-20 min-w-20 p-5'>
      <p>A</p>
      <p>{count}</p>
      <C/>
      <D/>
    </div>
  )
}

export default A
