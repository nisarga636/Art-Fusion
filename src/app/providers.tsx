"use client"
import { Provider } from "react-redux";
import "../styles/globals.css";
import { store } from "../store";

interface props {
  children: React.ReactNode;
}

export default function Providers({ children }: props) {
  return <Provider store={store}>{children}</Provider>;
}
