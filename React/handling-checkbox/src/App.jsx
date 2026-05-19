import { useState } from "react";
import "./App.css";

function App() {
  //^ ------------ Single Checkbox ---------------
  const [isChecked, setIsChecked] = useState(false);

  function checkBoxHandler(e) {
    //console.log(e.target.checked)
    setIsChecked(e.target.checked);
  }

  //^ ------------ Grouped Checkbox ---------------

  const [skillGroup, setSkillGroup] = useState({
    html: false,
    css: false,
    js: false,
  });

  //console.log(skillGroup)
  function handleGroupedCheckbox(e) {
    //console.log(e.target.checked);
    const { name, checked } = e.target;
    setSkillGroup({ ...skillGroup, [name]: checked });
  }

  //^ -------------- select or deselect all feature ------------

  const updatedSkills = {};

  function handleSelectAll(e) {
    //console.log(e.target.checked)

    Object.keys(skillGroup).forEach((key) => {
      updatedSkills[key] = e.target.checked;
    });

    setSkillGroup(updatedSkills);
  }

  //^ --------------- Handling checkbox in form -----------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tc: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      {/* single checkbox */}

      <h2>Single Checkbox</h2>
      <div>
        <label htmlFor="cb">
          <input
            type="checkbox"
            id="cb"
            checked={isChecked}
            onChange={checkBoxHandler}
          />
          <span>Terms and condition</span>
        </label>
      </div>

      {/* Grouped Checkbox */}

      <h2>Grouped CheckBox</h2>
      <div>
        <label htmlFor="html">
          <input
            type="checkbox"
            name="html"
            id="html"
            checked={skillGroup.html}
            onChange={handleGroupedCheckbox}
          />
          HTML
        </label>

        <label htmlFor="css">
          <input
            type="checkbox"
            name="css"
            id="css"
            checked={skillGroup.css}
            onChange={handleGroupedCheckbox}
          />
          CSS
        </label>

        <label htmlFor="js">
          <input
            type="checkbox"
            name="js"
            id="js"
            checked={skillGroup.js}
            onChange={handleGroupedCheckbox}
          />
          JavaScript
        </label>
      </div>

      {/* Select All - deselect all feature */}

      <h2>Select All or Deselect all</h2>
      <div>
        <label htmlFor="html">
          <input
            type="checkbox"
            name="html"
            id="html"
            checked={skillGroup.html}
            onChange={handleGroupedCheckbox}
          />
          HTML
        </label>

        <label htmlFor="css">
          <input
            type="checkbox"
            name="css"
            id="css"
            checked={skillGroup.css}
            onChange={handleGroupedCheckbox}
          />
          CSS
        </label>

        <label htmlFor="js">
          <input
            type="checkbox"
            name="js"
            id="js"
            checked={skillGroup.js}
            onChange={handleGroupedCheckbox}
          />
          JavaScript
        </label>

        <br />

        <label htmlFor="selectall">
          <input
            type="checkbox"
            name="selectall"
            id="selectall"
            onChange={handleSelectAll}
          />
          Select All
        </label>
      </div>

      {/* handling checkbox in form */}

      <br />
      <br />

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your name"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="tc">
            <input
              type="checkbox"
              name="tc"
              id="tc"
              value={formData.tc}
              onChange={handleChange}
            />
            Terms and con
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
