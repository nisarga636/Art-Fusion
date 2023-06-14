"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import InputBox from "@/components/inputbox";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full ">
      <div className="bg-[url('/bg-home.jpg')] bg-cover"></div>

      <div className="bg-white flex justify-center items-center">
        <form className=" w-[60%] flex-col h-screen mt-10 bg-white ">
          <h1 className=" text-3xl mt-1 text-black font-bold text-center">
            Art Fusion
          </h1>
          <h2 className="text-xl  mt-7 text-black font-semibold text-center">
            Sign Up
          </h2>
          <InputBox
            label="Email"
            type="email"
            placeholder="email"
            required={true}
          />
          <InputBox
            label="Password"
            type="Password"
            placeholder="password"
            required={true}
          />

          <button
            onClick={() => {
              signIn("credentials", {
                userId: "azam@gmail.com",
                password: "azam@1234",
                redirect: false,
                for: "sign-up",
              }).then((value) => {
                if (value?.error) console.log(value.error);
                else {
                  router.refresh();
                }
              });
            }}
            className="w-full h-[38px] mt-3 rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700"
          >
            Sign Up
          </button>
          <h1 className="mt-3 text-black text-center">OR</h1>
          <center>
            <button className="w-full p-24 py-2 mt-3  flex items-center mb-4 bg-white   border-2 border-gray-700 text-blue-600 font-semibold rounded-lg hover:bg-blue-700  hover:text-white hover:border-2 hover:border-blue-700 ">
              <FcGoogle className=" mr-5 text-xl" />
              <span className="flex items-center">Sign in with google</span>
            </button>
          </center>
          <h3 className="text-sm  mt-28 dark:text-black font-semibold text-center">
<<<<<<< HEAD:src/app/(auth)/join/page.tsx
            {" "}
            <a href="/sign-In" className="underline">
=======
            <Link href="/sign-in" className="underline">
>>>>>>> 5ec78c1a48ee0ad3064372219334a6f3500574c9:src/app/(allroutes)/(auth)/join/page.tsx
              already have an account?
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
}
