"use client";
import { useAppSelector } from "@/store";

export default function Page() {
  const Tests = useAppSelector((state) => state.DisplayProduction.data) as [];

  return <div className="text-black">production/page</div>;
}
