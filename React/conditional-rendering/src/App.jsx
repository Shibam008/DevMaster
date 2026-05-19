import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup.jsx";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [buttonText, setButtonText] = useState("");

  return (
    <div className="h-screen w-screen">
      {showPopup ? (
        <Popup setShowPopup={setShowPopup} buttonText={buttonText} />
      ) : (
        <></>
      )}
      <div className="h-screen w-screen flex justify-center items-center gap-3">
        <button
          className="border p-1 rounded-sm cursor-pointer"
          onClick={() => {
            setShowPopup(true);
            setButtonText("Delete");
          }}
        >
          Delete
        </button>
        <button
          className="border p-1 rounded-sm cursor-pointer"
          onClick={() => {
            setShowPopup(true);
            setButtonText("Edit");
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default App;
