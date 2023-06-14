"use client";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <main
      className="h-full w-full"
      style={{
        paddingRight: "240px",
        paddingLeft: "240px",
        paddingTop: "30px",
        height: "100%",
      }}
    >
      {children}
    </main>
  );
}
