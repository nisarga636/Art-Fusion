import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

type Dispatchfunc = () => AppDispatch;
export const useAppDispatch: Dispatchfunc = useDispatch;