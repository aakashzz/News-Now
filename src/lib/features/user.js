import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: [],
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login: (state, action)=>{
                state.status = true;
                state.userData = action.payload;
        },
        logout: (state)=>{
                state.status = false;
                state.userData = []
        }
    }
})

export default userSlice.reducer;
export const {login, logout} = userSlice.actions