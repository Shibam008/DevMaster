import { useGameStore } from "../store/gameStore";
import {
  calculateStatus,
  calculateWinner,
  movesLeft,
} from "../utils/gameLogic";
import Square from "./Square";

const Board = () => {
  const history = useGameStore((state) => state.history);
  const setHistory = useGameStore((state) => state.setHistory);
  const currentMove = useGameStore((state) => state.currentMove);
  const setCurrentMove = useGameStore((state) => state.setCurrentMove);
  
  const squares = history[currentMove];

  const xIsNext = currentMove % 2 === 0;
  const player = xIsNext ? "X" : "O";

  const winner = calculateWinner(squares);
  const moves = movesLeft(squares);
  const status = calculateStatus(winner, moves);

  console.log(history);
  console.log(squares);

  const handleClick = (idx) => {
    if (squares[idx] || winner) return;

    // remove future history if time travelled
    const trimmedHistory = history.slice(0, currentMove + 1);

    // copy of squares array and update
    const nextSquares = squares.slice();
    nextSquares[idx] = player;

    // add new board snapshot to history
    const updatedHistory = [...trimmedHistory, nextSquares];
    setHistory(updatedHistory);

    setCurrentMove(updatedHistory.length - 1);
  };

  return (
    <div className="flex gap-50 justify-center items-center">
      <div>
        <div className="grid grid-cols-3 grid-rows-3 gap-1 h-50 w-50 border-2 border-green-600 rounded-md p-2">
          {squares.map((val, squareIdx) => (
            <Square
              key={squareIdx}
              value={val}
              onSquareClick={() => handleClick(squareIdx)}
            />
          ))}
        </div>
        <div className="mt-2 flex flex-col justify-center text-green-500">
          <p className="h-10 w-full flex justify-start items-center font-semibold text-xl">
            Moves Left : {moves}{" "}
          </p>
          <p className="h-10 w-full flex justify-start items-center font-semibold text-xl">
            Match Status : {status}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {history.map((_, move) => (
          <button
            key={move}
            onClick={() => setCurrentMove(move)}
            className="border p-2 cursor-pointer rounded-sm hover:ring hover:ring-indigo-600 hover:scale-95 transition-all duration-300"
          >
            Go to move #-{move}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
