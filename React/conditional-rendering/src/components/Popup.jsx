const Popup = ({setShowPopup, buttonText}) => {
  return (
    <div className="h-screen w-screen absolute">
      <div className="h-screen w-screen bg-gray-900 flex items-center justify-center relative">
        <div className="absolute top-5 right-5 cursor-pointer h-5 w-5 bg-cyan-100 flex justify-center items-center p-3 rounded-sm"
        onClick={()=>setShowPopup(false)}
        >
          ❌
        </div>
        <div className="h-50 w-80 bg-gray-500 rounded-md flex flex-col justify-center items-center relative">
          <h1 className="absolute top-0">{buttonText}</h1>
          <p className="text-white">Are you sure you want to {buttonText.toLowerCase()} this ? </p>
          <div className="mt-5 flex gap-5">
            <button className="bg-red-500 border p-0.5 text-white px-2 rounded-md">
              No
            </button>
            <button className="bg-green-500 border p-0.5 text-white px-2 rounded-md">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
