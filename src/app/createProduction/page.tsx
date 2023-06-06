"use client"
import Navbar from "@/components/Navbar";
import { useAppSelector } from "@/store";


export default function Page() {
    const Tests = useAppSelector((state) => state.DisplayProduction.data) as [];

    return (<>
        <div className="w-full h-full border border-slate-400 relative overflow-hidden">
            <div>
                <Navbar Logo={undefined} />

            </div>
            <h1> Production details</h1>
        </div>
    </>
    );
}




