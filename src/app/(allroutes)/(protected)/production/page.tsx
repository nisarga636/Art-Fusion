"use client";
import { useAppSelector } from "@/store";
import { MdFolderOpen } from "react-icons/md";

export default function Page() {
  const Tests = useAppSelector((state) => state.DisplayProduction.data) as [];

  return <div className="text-black  ">
    asderfas
  </div>;
}
