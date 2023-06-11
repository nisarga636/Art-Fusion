import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[rgba(255,255,255,0.9)] z-10 backdrop-blur-sm sticky top-0 left-0 text-[#424242] flex justify-between items-center py-3 px-5 h-16 drop-shadow-lg">
      <h1 className="font-extrabold tracking-wide font-sans">ART FUSION</h1>
      <ul className="flex justify-center  grow items-center  text-sm space-x-10 text-[#424242]">
        <li>
          <a
            href="#"
            className=" text-gray hover:from-gray hover:to-black text-black hover:font-bold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" text-gray hover:from-gray hover:to-black text-black hover:font-bold"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" text-gray hover:from-gray hover:to-black text-black hover:font-bold"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className=" text-gray hover:from-gray hover:to-black text-black hover:font-bold"
          >
            Support
          </a>
        </li>
      </ul>
      <div className="flex items-center text-sm w-14">
        <a
          href="#"
          className=" text-gray hover:from-gray hover:to-black text-black hover:font-bold"
        >
          {" "}
          Sign in{" "}
        </a>
      </div>
      <div className=" flex justify-center mx-4 w-16 bg-blue-700 rounded-md text-white  hover:bg-white hover:border-[2px] hover:border-blue-700 hover:text-blue-700 hover:font-semibold">
      <a
          href="#"
          className=" my-1  rounded-md "
        >
          {" "}
          Join{" "}
        </a>
      </div>
    </nav>
  );
}
