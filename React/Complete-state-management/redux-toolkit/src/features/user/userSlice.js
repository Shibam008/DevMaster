import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: [],
    loading: false,
    errorMsg: null
}

export const fetchUser = createAsyncThunk(

    "user/fetchUser",   // action type prefix

    async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = resp.json()
        return data // sending data to fullfilled action.payload
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.allUsers = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.errorMsg = action.error.message
            })
    }
})


export default userSlice.reducer