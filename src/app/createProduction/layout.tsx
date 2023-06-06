"use client";
import { useAppDispatch } from "../../../hooks";

import { useEffect } from "react";
import {
    fetchDisplayProduction,
} from "../../store/createProduction.slice";

interface props {
    children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchDisplayProduction());
    }, []);
    return <div>{children}</div>;
}