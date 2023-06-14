"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import { SessionProvider } from "next-auth/react";

interface props {
  children: React.ReactNode;
}

export default function Providers({ children }: props) {
  return (
    <Provider store={store}>
      <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>
    </Provider>
  );
}
