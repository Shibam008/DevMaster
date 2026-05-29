import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../../store/features/popup/popup.slice';
import { deleteEmployee, fetchEmployee } from '../../store/features/employee/employee.thunk';

const Deletepopup = () => {
    const deletePopup = useSelector(state=>state.popup.deletePopup)
    const dispatch = useDispatch()

    if(!deletePopup) {
        return null;
    }

    const handleDeleteEmployee = async () => {
      await dispatch(deleteEmployee(deletePopup))
      await dispatch(closeDeletePopup())
      await dispatch(fetchEmployee())
    }

  return (
   <div
       onClick={()=>dispatch(closeDeletePopup())}
       className="h-full w-full bg-black/80 fixed flex flex-col z-50 justify-center items-center">
         <fieldset onClick={(e)=>e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
           <legend className="fieldset-legend text-xl">Delete Employee</legend>
   
           <p className='text-[15px]'>Are you sure you want to delete ?</p>
   
           <div className='flex justify-end mt-4 gap-4'>
            <button onClick={()=>dispatch(closeDeletePopup())} className="btn btn-dash btn-error">No</button>
            <button onClick={handleDeleteEmployee} className="btn btn-dash btn-success">Yes</button>
           </div>
           
         </fieldset>
       </div>
  )
}

export default Deletepopup
