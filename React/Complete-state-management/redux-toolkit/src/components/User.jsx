import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../features/user/userSlice"


const User = () => {

    const users = useSelector(state => state.user.allUsers)
    const loading = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.errorMsg)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser())
    },[])
    
    console.log({users, loading, error})
  return (
    <div>
      User component
    </div>
  )
}

export default User
