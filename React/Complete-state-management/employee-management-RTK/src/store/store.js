import { configureStore } from '@reduxjs/toolkit'
import popupReducer from "../store/features/popup/popup.slice.js"
import employeeReducer from "../store/features/employee/employee.slice.js"

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
  },
})