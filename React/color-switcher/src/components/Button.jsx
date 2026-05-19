const Button = ({ color, setSelectedColor, children }) => {
    
  function changeColor() {
    setSelectedColor(color);
  }

  return (
    <>
      <button
        onClick={changeColor}
        style={{ backgroundColor: color }}
        className="px-2 py-1 cursor-pointer rounded-md"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
