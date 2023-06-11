"use client"
import { useSession } from "next-auth/react";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  const session = useSession();
  console.log(session)
  return <div>{children}</div>;
}
