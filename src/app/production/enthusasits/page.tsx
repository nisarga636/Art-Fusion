"use client";

import AvatarWithImage from "@/components/Avatar";
import React from "react";
import { BiFilterAlt } from "react-icons/bi";

export default function Page() {
  return (
    <div>
      <div className="w-full flex justify-end items-end">
        <button className="w-32 h-[38px] mt-8 mb-4 mr-5 rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center">
          <BiFilterAlt className="mr-2"/>
          Filter
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5 my-3 rounded-md ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-sm text-white  bg-blue-700  ">
            <tr>
              <th scope="col" className="px-2 py-3"></th>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Area of Interest
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Experience
              </th>

              <th scope="col" className="px-2 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  hover:bg-gray-100 cursor-pointer ">
              <th>
                <AvatarWithImage
                  imageSrc="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  altText={undefined}
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap "
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-white w-36">
                <button className="w-full h-[38px] rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center">
                  Accept
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-100 cursor-pointer ">
              <th>
                <AvatarWithImage
                  imageSrc="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  altText={undefined}
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap "
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4 text-white w-36">
                <button className="w-full h-[38px] rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center">
                  Accept
                </button>
              </td>{" "}
            </tr>
            <tr className="bg-white  hover:bg-gray-100 cursor-pointer ">
              <th>
                <AvatarWithImage
                  imageSrc="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  altText={undefined}
                />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap "
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4 text-white w-36">
                <button className="w-full h-[38px] rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center">
                  Accept
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
