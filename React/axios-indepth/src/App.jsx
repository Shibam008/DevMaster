/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url = "https://6a0d1eda769682b8ee75ae92.mockapi.io/users";

  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const [userDetails, setUserDetails] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchUser = async () => {
    const res = await axios.get(url);
    setUserDetails(res.data);
    setFormData({
      name: "",
      age: "",
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const createUser = async () => {
    if (formData.name === "" || formData.age === "") {
      alert("Please fill all the details");
      return;
    }
    await axios.post(url, formData);
    await fetchUser();
  };

  const editUser = async () => {
    const updatedUser = {
      name: formData.name,
      age: formData.age,
    };
    await axios.put(url + `/${formData.id}`, updatedUser);

    await fetchUser();
  };

  const deleteUser = async (id) => {
    await axios.delete(url + `/${id}`);
    await fetchUser();
  };

  console.log(formData);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full mt-5">
      <div className="bg-gray-900 min-h-[80%] min-w-[80%] flex flex-col p-5">
        <div className="flex flex-col items-center gap-5 border-b">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-600 outline-none ring-1 ring-sky-600 text-white rounded-md p-2 text-xl"
          />
          <input
            type="text"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="bg-gray-600 outline-none ring-1 ring-sky-600 text-white rounded-md p-2 text-xl"
          />

          {formData.editOption == true ? (
            <button
              onClick={editUser}
              className="bg-sky-700 text-white p-2 rounded-md cursor-pointer mb-3"
            >
              Edit data
            </button>
          ) : (
            <button
              onClick={createUser}
              className="bg-green-700 text-white p-2 rounded-md cursor-pointer mb-3"
            >
              Save data
            </button>
          )}
        </div>

        <div className="mt-5">
          {userDetails.map((user, idx) => (
            <div key={idx} className="bg-gray-800 flex items-center mb-2 p-2">
              <div className="w-[50%] flex flex-col items-start ">
                <p>
                  <span className="font-bold">Name</span> : {user.name}
                </p>
                <p>
                  <span className="font-bold">Age</span> : {user.age}
                </p>
              </div>

              <div className="h-full w-[50%] flex gap-4 justify-center">
                <button
                  onClick={() => setFormData({ ...user, editOption: true })}
                  className="bg-sky-700 px-4 text-white cursor-pointer rounded-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-600 px-4 text-white cursor-pointer rounded-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
