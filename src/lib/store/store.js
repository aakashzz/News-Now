import { configureStore } from "@reduxjs/toolkit";
import countryReducer from '@/lib/features/country'
export const store = configureStore({
    reducer: {
        country: countryReducer
    }
})