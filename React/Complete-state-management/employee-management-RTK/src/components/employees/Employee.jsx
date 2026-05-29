import Wrapper from "../../layout/Wrapper";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../store/features/popup/popup.slice";
import { useState } from "react";

const Employee = () => {
  const employees = useSelector((state) => state.employee.employees);
  return (
    <div className="p-5">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} emp={emp} />
      ))}
    </div>
  );
};

const EmployeeCard = ({ emp }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={emp.profileUrl} />
          </div>
          <div>
            <div>{emp.name}</div>
            <div className="text-xs font-semibold opacity-60">{emp.email}</div>
          </div>
          <p
            onClick={() => setToggle(!toggle)}
            className={`list-col-wrap text-xs ${toggle ? "line-clamp-0" : "line-clamp-4"}`}
          >
            {emp.bio} 
          </p>
          <button
            onClick={() => dispatch(openEmployeePopup(emp))}
            className="text-xl btn btn-square btn-ghost"
          >
            <CiEdit />
          </button>
          <button
            onClick={() => dispatch(openDeletePopup(emp.id))}
            className="text-xl btn btn-square btn-ghost"
          >
            <MdDeleteOutline />
          </button>
          <button className="text-xl btn btn-square btn-ghost">
            <FaRegHeart />
          </button>
        </li>
      </ul>
    </Wrapper>
  );
};
export default Employee;
