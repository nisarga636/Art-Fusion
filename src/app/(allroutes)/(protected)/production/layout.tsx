"use client";

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <div className="flex w-full h-full ">
<<<<<<< HEAD
      <SideNavbar />
      <div className="flex-col w-full h-full bg-white flex  ">
        <Navbar
          imageSrc="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=634&q=80"
          navName={"Home"}
          userName={"User"}
        />
        <main className="h-full w-full overflow-y-scroll">{children}</main>
      </div>
=======
      <main className="h-full w-full overflow-y-scroll">{children}</main>
>>>>>>> e43f23f03181d2d25465bd6abe2ac5836bdd0535
    </div>
  );
}
