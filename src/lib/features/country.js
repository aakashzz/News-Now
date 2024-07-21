import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    country: 'in'
}

const countrySlice = createSlice({
    name:"country",
    initialState,
    reducers:{
        selectCountry: function(state, action){
            state.country = action.payload
        }
    }
})

export default countrySlice.reducer;
export const {selectCountry} = countrySlice.actions;