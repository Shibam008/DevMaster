import { useMyContext } from "../MyContext.jsx"
import { useUserContext } from "../UserContext.jsx";


const D = () => {

  const {count} = useMyContext();

  const {name} = useUserContext();

  return (
    <div className='bg-amber-950 min-h-20 min-w-20'>
      <p>D</p>
      <p>Hello {name}</p>
      <p>{count}</p>
    </div>
  )
}

export default D
