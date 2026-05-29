const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="cursor-pointer inline-flex justify-center items-center p-2 outline-0 bg-white text-black font-bold text-[1rem] rounded-sm border-2 border-gray-800 hover:shadow-inner hover:shadow-fuchsia-500
    "
    >
      {value}
    </button>
  );
};

export default Square;
