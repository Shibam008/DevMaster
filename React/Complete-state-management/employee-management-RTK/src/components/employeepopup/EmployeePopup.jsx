/* eslint-disable react-hooks/set-state-in-effect */
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popup.slice";
import { useEffect, useState } from "react";
import {
  addEmployee,
  fetchEmployee,
  updateEmployee,
} from "../../store/features/employee/employee.thunk";
import Loader from "../loader/Loader";

const EmployeePopup = () => {
  const employeePopup = useSelector((state) => state.popup.employeePopup);
  const loader = useSelector(state => state.employee.loading)
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (employeePopup.id) {
      await dispatch(
        updateEmployee({
          id: employeePopup.id,
          details: formData,
        }),
      );
    } else {
      await dispatch(addEmployee(formData));
    }

    setFormData({
      profileUrl: "",
      name: "",
      email: "",
      bio: "",
    });
    await dispatch(closeEmployeePopup());
    await dispatch(fetchEmployee());
  };

  useEffect(() => {
    if (!employeePopup) {
      setFormData({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
      });
    } else if (employeePopup.id) {
      setFormData(employeePopup);
    }
  }, [employeePopup]);


  if (!employeePopup) {
    return null;
  }

  if(loader) {
    return <Loader/>
  }

  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="h-full w-full bg-black/80 fixed flex flex-col z-50 justify-center items-center"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend text-xl">
          {employeePopup.id ? "Edit Employee" : "Add Employee"}
        </legend>

        <label className="label">Profile url</label>
        <input
          type="text"
          name="profileUrl"
          value={formData.profileUrl}
          onChange={handleInputChange}
          className="input"
          placeholder="profile url"
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="input"
          placeholder="Email"
        />

        <legend className="label">Your bio</legend>
        <textarea
          className="textarea h-24"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="btn btn-neutral mt-4 hover:bg-indigo-600"
        >
          {employeePopup.id ? "Edit employee" : "Create employee"}
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
