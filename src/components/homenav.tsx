import React from "react";

import { StaticImageData } from "next/image";

interface LogoProps {
  Logo: StaticImageData;
}

export default function Navbar({ Logo }: LogoProps) {
  return (
    <nav className="bg-[white] text-[#424242] flex justify-between items-center py-3 px-5 h-12 drop-shadow-lg">
      <h1 className="font-extrabold">Art Fusion</h1><ul className="flex justify-center grow items-center text-sm space-x-10 text-[#424242]">
        <li>
          <a href="#" className=" text-gray hover:from-gray hover:to-black text-black hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#"  className=" text-gray hover:from-gray hover:to-black text-black hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#"  className=" text-gray hover:from-gray hover:to-black text-black hover:underline">
            Pricing
          </a>
        </li>
        <li>
          <a href="#"  className=" text-gray hover:from-gray hover:to-black text-black hover:underline">
            Support
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="#"  className=" text-gray hover:from-gray hover:to-black text-black hover:underline"> Sign in </a>
        <a href="#" className="flex items-center ml-4 text-gray hover:from-gray hover:to-black text-black hover:underline"> Join </a>       
        
      </div>
    </nav>
  );
}
