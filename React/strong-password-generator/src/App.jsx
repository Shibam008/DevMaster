import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [savePassword, setSavePassword] = useState([]);
  const [checkbox, setCheckbox] = useState({
    addNum: false,
    addSpclChar: false,
  });
  const passwordRef = useRef(null);



  function generateRandomPass() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (checkbox.addNum) {
      chars += "0123456789";
    }
    if (checkbox.addSpclChar) {
      chars += "!@#$%^&*()";
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      password += chars[idx];
    }

    setPassword(password);
  }

  function handleCheckbox(e) {
    // console.log(e.target.checked);
    const { name, checked } = e.target;
    setCheckbox({ ...checkbox, [name]: checked });
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(password);
    passwordRef.current.select()
    // passwordRef.current.setSelectionRange(0, 15)
  }

  useEffect(() => {
    generateRandomPass();
  }, [length, checkbox]);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div className="h-70 w-[80%] p-5">
        <div className="flex flex-col justify-center items-center gap-8">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-white h-10 w-full p-2 text-xl rounded-md ring-1 ring-sky-500 focus:outline-none"
            ref={passwordRef}
          />
          <div className="flex gap-5 w-full">
            <input
              type="range"
              min={8}
              max={50}
              className="w-full"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <p>{length}</p>
          </div>
        </div>

        <div className="flex flex-col h-10 px-1 text-xl mt-5">
          <label htmlFor="addNum" className="flex gap-2">
            <input
              type="checkbox"
              name="addNum"
              id="addNum"
              onChange={handleCheckbox}
            />
            <span>Number</span>
          </label>

          <label htmlFor="addSpclChar" className="flex gap-2">
            <input
              type="checkbox"
              name="addSpclChar"
              id="addSpclChar"
              onChange={handleCheckbox}
            />
            <span>Special Chars</span>
          </label>
        </div>

        <div className="flex flex-col mt-10 gap-3">
          <button
            onClick={handleCopyPassword}
            className="bg-sky-600 rounded-md h-10 text-white text-xl cursor-pointer"
          >
            Copy Password
          </button>
          <button
            onClick={() => setPassword("")}
            className="bg-sky-600 rounded-md h-10 text-white text-xl cursor-pointer"
          >
            Reset Password
          </button>
          <button
            onClick={() => setSavePassword([...savePassword, password])}
            className="bg-sky-600 rounded-md h-10 text-white text-xl cursor-pointer"
          >
            Save Password
          </button>
        </div>

        {savePassword.length > 0 && (
          <div className="mt-4 flex flex-col items-start p-2 min-h-20 outline-1 rounded-md outline-green-500">
            {savePassword.map((pass) => (
              <h2 key={pass}>Saved : {pass}</h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
