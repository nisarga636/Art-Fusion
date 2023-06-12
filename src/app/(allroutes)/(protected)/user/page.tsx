import InputBox from "@/components/inputbox";
import React from "react";


export default function page() {
  const roleoptions = ["Artist","Production Owner"]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full ">
      <div className="bg-[url('/bg-home.jpg')] bg-cover"></div>
      <div className="bg-white flex justify-center items-center overflow-y-auto">
        <form className=" w-[60%] flex-col h-screen mt-10 bg-white ">
          <h1 className=" text-3xl mt-1  text-black font-bold text-center">
            Welocme To
          </h1>
          <h2 className="text-2xl  mt-3 text-black font-semibold text-center">
            Art Fusion
          </h2>
          <h3 className="text-lg  my-4 text-gray-700 font-semibold text-center">
            There few step away to enter artists world
          </h3>
          <InputBox
            label="Role"
            type="dropdown"
            placeholder="Select your role"
            required={true}
            options={roleoptions}
          />
          <InputBox
            label="Full Name"
            type="text"
            placeholder="full name"
            required={true}            
          />
          <InputBox
            label="Phone Number"
            type="number"
            placeholder="phone number"
            required={true}            
          />
          <InputBox
            label="Age"
            type="number"
            placeholder="age"
            required={true}            
          />
          <InputBox
            label="Address"
            type="text"
            placeholder="address"
            required={false}            
          />
          <InputBox
            label="Skills"
            type="text"
            placeholder="skills"
            required={false}            
          />

          <button className="w-full h-[38px] my-5 rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700">
            Continue
          </button>
        </form>
      </div>

    </div>
  );
}
