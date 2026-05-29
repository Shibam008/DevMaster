import { FaRegHeart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import Wrapper from "../../layout/Wrapper.jsx";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../store/features/popup/popup.slice.js";

const Navbar = () => {
    const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 sticky top-0 z-10">

    <Wrapper>
      <div className="navbar bg-gray-800 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Employee</a>
        </div>
        <div className="navbar-end">
          <button onClick={()=>dispatch(openEmployeePopup())} className="btn btn-ghost btn-circle">
            <FaUserPlus />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </Wrapper>
    </div>
  );
};

export default Navbar;
