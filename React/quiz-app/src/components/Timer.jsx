import { useEffect } from "react"
import { useState } from "react"

const Timer = ({setIsOver, leftTime, setLeftTime}) => {

    //const [leftTime, setLeftTime] = useState(30)
    const [displayTime, setDisplayTime] = useState('')

    useEffect(()=>{
        let intervalId = setInterval(()=>{
            setLeftTime(prev => {
                if (prev <= 0) {
                    clearInterval(intervalId)
                    return 0;
                }
                return prev - 1;
            })
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    useEffect(()=>{
        if(leftTime == 0) {
            setIsOver(true)
        }
        let formatedTime = (`${Math.floor(leftTime/60).toString().padStart(2,0)} : ${Math.floor(leftTime%60).toString().padStart(2,0)}`)
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDisplayTime(formatedTime)
    },[leftTime])


  return (
    <div>
      <h1>Time left : {displayTime}</h1>
    </div>
  )
}

export default Timer
