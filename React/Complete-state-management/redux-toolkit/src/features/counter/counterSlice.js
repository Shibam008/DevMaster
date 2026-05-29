import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    name: 'John'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        changeBy: (state, action) => {
            state.value += Number(action.payload)
        },
        changeName: (state, action) => {
            state.name = action.payload
        }
    }

})

export const {increment, decrement, changeBy, changeName} = counterSlice.actions
export default counterSlice.reducer