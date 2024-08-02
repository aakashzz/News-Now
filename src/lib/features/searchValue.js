import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ""
}

const searchValueSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        searchInput: function(state, action){
            state.search = action.payload
        }
    }
})

export default searchValueSlice.reducer;
export const {searchInput} = searchValueSlice.actions;