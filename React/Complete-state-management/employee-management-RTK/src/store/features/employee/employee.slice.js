import { createSlice } from '@reduxjs/toolkit'
import { addEmployee, deleteEmployee, fetchEmployee, updateEmployee } from './employee.thunk.js'

const initialState = {
  employees: [],
  loading: false,
  error: false
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
      })
      .addCase(fetchEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.payload
      })

    builder
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        console.log("Employee added successfully", action.payload)
        state.loading = false;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.payload
      })

    builder
      .addCase(deleteEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state) => {
        console.log("Employee deleted successfully")
        state.loading = false;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.payload
      })

    builder
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployee.fulfilled, (state) => {        state.loading = false;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.payload
      })
  }
})

export default employeeSlice.reducer