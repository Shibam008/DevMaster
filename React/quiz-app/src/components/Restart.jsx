
const Restart = ({setIsOver, setLeftTime, setCurrentIdx}) => {

    function handleRestart() {
       setIsOver(prev => !prev)
       setLeftTime(15)
       setCurrentIdx(0)
    }
    
  return (
    <div>
      <button className='mt-8 border rounded-md p-2 cursor-pointer' onClick={handleRestart}>Restart</button>
    </div>
  )
}

export default Restart
