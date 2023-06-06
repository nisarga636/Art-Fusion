import React from "react";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { StaticImageData } from "next/image";
import AvatarWithImage from "./Avatar";

interface LogoProps {
  Logo: StaticImageData;
}

export default function Navbar({ Logo }: LogoProps) {
  return (
    <nav className="bg-[white] text-[#424242] flex justify-between items-center py-3 px-5 h-12 drop-shadow-lg">
      <ul className="flex items-center text-sm space-x-10 text-[#424242]">
        <li>
          <a href="#">
            Home
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <IoSearch size={28} color="[#424242]" className="mr-4" />
        <IoNotifications size={28} color="[#424242]" />
        <AvatarWithImage
          imageSrc="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          altText="profile Image"
          
        />
      </div>
    </nav>
  );
}
