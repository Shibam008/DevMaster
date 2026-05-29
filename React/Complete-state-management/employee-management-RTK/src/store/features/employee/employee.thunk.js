import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance.js";

export const fetchEmployee = createAsyncThunk(
  "employee/fetchEmployee",

  async () => {
    const resp = await api.get("/employees");
    return resp.data; // will be set to fullfilled action.payload
  },
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (empDetails) => {
    const resp = await api.post("/employees", empDetails);
    return resp.data;
  },
);

export const updateEmployee = createAsyncThunk(
  "employee.updateEmployee",
  async ({ id, details }) => {
    const resp = await api.put(`/employees/${id}`, details);
    return resp.data;
  },
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmp",
  async (id) => {
    await api.delete(`/employees/${id}`);
  },
);
