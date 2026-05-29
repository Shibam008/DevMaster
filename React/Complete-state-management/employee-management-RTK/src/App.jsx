import { useDispatch, useSelector } from "react-redux";
import Deletepopup from "./components/deletepopup/Deletepopup";
import EmployeePopup from "./components/employeepopup/EmployeePopup";
import Employee from "./components/employees/Employee";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { fetchEmployee } from "./store/features/employee/employee.thunk";
import Loader from "./components/loader/Loader";

function App() {

  const loading = useSelector(state => state.employee.loading)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchEmployee())
  },[])

  if(loading) {
    return <Loader/>
  }
  
  return (
    <div className="min-h-screen w-full flex flex-col">
      
      <EmployeePopup/>
      <Deletepopup/>
      
      <Navbar />

      <div className="flex-1">
        <Employee/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
