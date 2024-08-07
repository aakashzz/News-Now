import { configureStore } from "@reduxjs/toolkit";
import countryReducer from '@/lib/features/country'
import searchReducer from "../features/searchValue";
import userReducer from "../features/user";
export const store = configureStore({
    reducer: {
        country: countryReducer,
        search: searchReducer,
        user: userReducer,
    }
})