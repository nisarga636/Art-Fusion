import { configureStore } from "@reduxjs/toolkit"
import { fetchInitialLogin } from "./login.slice";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>