import React from "react";
import { IoSearch, IoNotifications } from "react-icons/io5";
import { StaticImageData } from "next/image";

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
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/017/777/small_2x/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-illustration-on-a-white-isolated-background-vector.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full ml-4"
        />
      </div>
    </nav>
  );
}
