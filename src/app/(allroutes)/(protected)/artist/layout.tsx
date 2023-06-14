"use client";
import NavBar from "@/components/sub-components/NavBar";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <div className="flex w-full h-full ">
        <NavBar/>
        <main className="h-full w-full overflow-y-scroll">{children}</main>
    </div>
  );
}
