import React, { Children, useState } from "react";
import {
  IoSearch,
  IoNotifications,
  IoSearchOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import AvatarWithImage from "./Avatar";

interface NavbarProps {
  imageSrc: string;
  navName: string;
  userName: string;
}

export default function Navbar({ imageSrc, navName, userName }: NavbarProps) {
  return (
    <nav className="sticky top-0 border-b-[1px] border-black right-0 bg-[white] text-[#424242] flex justify-between w-[1070px] items-center py-3 px-5 h-15  ">
      <ul className="flex items-center text-sm space-x-10 text-[#424242]">
        <li>
          <a
            href="/createProduction"
            className="cursor-pointer ml-6 text-2xl font-semibold"
          >
            {navName}
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <IoSearchOutline
          size={24}
          color="#424242"
          className="mr-4 cursor-pointer"
        />
        <IoNotificationsOutline
          size={24}
          color="#424242"
          className=" cursor-pointer"
        />
        <div className="flex">
          <AvatarWithImage imageSrc={imageSrc} altText="profile Image" />
          <div className="h-15">
            <p className="ml-2 text-base font-base">{userName}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
