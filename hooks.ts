import { useDispatch } from "react-redux";
import { AppDispatch } from "./src/store";

type Dispatchfunc = () => AppDispatch;
export const useAppDispatch: Dispatchfunc = useDispatch;