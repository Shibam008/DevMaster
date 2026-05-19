import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [selectedColor, setSelectedColor] = useState("black");
  const colors = ["red", "green", "blue", "yellow", "orange", "cyan"];

  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center"
        style={{ backgroundColor: selectedColor }}
      >
        <div className="h-[40vh] w-[80vh] bg-gray-400 flex flex-col justify-center items-center">
          <h1 className="font-bold">Color Switcher</h1>

          <div className="flex gap-2 m-3">
            {colors.map((item) => {
              return (
                <div key={item} className="border-2 rounded-md">
                  <Button color={item} setSelectedColor={setSelectedColor}>
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>

          <button className="border-2 rounded-md px-2" onClick={() => setSelectedColor("black")}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
