import { useState } from "react";
import "./App.css";

function App() {
  // const [text, setText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  console.log(formData);

  function inputHandler(e) {
    // console.log(e.target)
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <>
      {/* <div>
        <input
          type="text"
          placeholder="Enter any text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => setText("")}>Clear</button>
        <h1>{text}</h1>
      </div> */}

      <div>
        <form action="">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter name"
            onChange={inputHandler}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={inputHandler}
          />
        </form>

        <button onClick={() => setFormData({name:'', email:''})}>Clear</button>

        <h1>Name : {formData.name}</h1>
        <h2>Email : {formData.email}</h2>
      </div>
    </>
  );
}

export default App;
