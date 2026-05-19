import { useState } from "react";
import Questions from "./components/Questions.jsx";
import Timer from "./components/Timer.jsx";
import Result from "./components/Result.jsx";
import Restart from "./components/Restart.jsx";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  const [leftTime, setLeftTime] = useState(15);
  const [currentIdx, setCurrentIdx] = useState(0);


  return (
    <>
      <div className="h-screen w-screen bg-gray-800 text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          {isOver ? (
            <>
              <Result score={score} />
              <Restart setIsOver={setIsOver} setLeftTime={setLeftTime} setCurrentIdx={setCurrentIdx} />
            </>
          ) : (
            <>
              <Timer setIsOver={setIsOver} leftTime={leftTime} setLeftTime={setLeftTime}/>
              <Questions setIsOver={setIsOver} setScore={setScore} currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
