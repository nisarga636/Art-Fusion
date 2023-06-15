"use client";
import { MdFolderOpen } from "react-icons/md";

export default function Page() {

  return (
    <div className="text-black  ">
      <h1 className="text-3xl ">Project</h1>
      <div className="flex mx-6 rounded  text-3xl bg-gray-100 mt-6">
        <MdFolderOpen />
        <p className="ml-2">50</p>
        <p className="ml-2 text-[20px] text-gray-500">Total Projects</p>
        <p className="justify-end ml-2 text-[20px] text-gray-500">
          On time completed rate
        </p>
      </div>
    </div>
  );
}
