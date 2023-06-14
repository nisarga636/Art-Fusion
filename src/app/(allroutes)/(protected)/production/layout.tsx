"use client";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <div className="flex w-full h-full ">
      <main className="h-full w-full overflow-y-scroll">{children}</main>
    </div>
  );
}
