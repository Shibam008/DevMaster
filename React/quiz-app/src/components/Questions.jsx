import qs from "./questions.json";

const Questions = ({setIsOver, setScore, currentIdx, setCurrentIdx}) => {

  //const [currentIdx, setCurrentIdx] = useState(0);

  function handleOptionClick(selectedOpt) {
    if(selectedOpt === qs[currentIdx].answer) {
      setScore(prev => prev + 1)
    }

    if(currentIdx < qs.length - 1) {
      setCurrentIdx(prev => prev + 1)
    }else {
      setIsOver(true)
    }
  }

  return (
    <div>
    
      <div className="text-2xl mb-4 mt-8">
        <span>{currentIdx + 1}. </span>
        {qs[currentIdx].question}
        </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        {qs[currentIdx].options.map((opt, idx) => (
          <button 
          key={idx} 
          className="border rounded-sm p-1 text-[13px] flex flex-col justify-center items-center cursor-pointer min-w-75 hover:bg-blue-800"
          onClick={()=>handleOptionClick(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questions;
