import { configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import {DisplayProductionSlice} from "./createProduction.slice";

export const store = configureStore({
    reducer: {
        [DisplayProductionSlice.name]:DisplayProductionSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>