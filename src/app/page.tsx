"use client";

import SwitchDemo from "@/components/Toggle";
import Footer from "@/components/footer";
import Navbar from "@/components/homenav";
import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

export default function Page() {
  return (
    <div className="h-full w-full overflow-y-scroll">
      <Navbar />
      <main>
        <div className=" sticky bg-[url('/bg-home.jpg')] bg-cover bg-no-repeat text-black h-[600px] pl-10 py-64 ">
          <div className="text-3xl w-[442px] text-white">
            Empowering Filmmakers, Connecting Dreams!
          </div>
          <div className="py-4 rounded-sm flex text-3xl space-x-4 cursor-pointer items-center text-white">
            <button className="font-bold">Get Started</button>
            <BiRightArrowCircle />
          </div>
        </div>

        <div className="bg-white text-black h-[1250px] ">
          <div className="flex flex-col  items-center">
            <p className="py-5 text-3xl font-bold">Our Services</p>
            <hr className="w-[64px] border-black" />
          </div>

          {/* Profile Creation*/}
          <div className="my-5 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618329027137-a520b57c6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt=""
              className="w-[330px] mt-10 drop-shadow-lg h-[200px]"
            />
            <div className="mx-16">
              <h1 className="mb-5 text-3xl">Profile Creation</h1>
              <p className="w-[500px] text-lg ">
                Artists, technicians, producers, and other professionals can
                create their profiles on our website, providing details such as
                their interests, roles, past experiences, and links to their
                content.
              </p>
            </div>
          </div>

          {/* Project Listing*/}
          <div className="my-5 flex justify-center items-center">
            <div className="mx-16">
              <h1 className="mb-5 text-3xl">Profile Creation</h1>
              <p className="w-[500px] text-lg ">
                Artists, technicians, producers, and other professionals can
                create their profiles on our website, providing details such as
                their interests, roles, past experiences, and links to their
                content.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1677696797025-e6a40f6c714d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="w-[330px] mt-10 drop-shadow-lg h-[200px]"
            />
          </div>

          {/* Profile Creation*/}
          <div className="my-5 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1618329027137-a520b57c6606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt=""
              className="w-[330px] mt-10 drop-shadow-lg h-[200px]"
            />
            <div className="mx-16">
              <h1 className="mb-5 text-3xl">Profile Creation</h1>
              <p className="w-[500px] text-lg ">
                Artists, technicians, producers, and other professionals can
                create their profiles on our website, providing details such as
                their interests, roles, past experiences, and links to their
                content.
              </p>
            </div>
          </div>

          {/* Project Listing*/}
          <div className="my-5 flex justify-center items-center">
            <div className="mx-16">
              <h1 className="mb-5 text-3xl">Profile Creation</h1>
              <p className="w-[500px] text-lg ">
                Artists, technicians, producers, and other professionals can
                create their profiles on our website, providing details such as
                their interests, roles, past experiences, and links to their
                content.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1677696797025-e6a40f6c714d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="w-[330px] mt-10 drop-shadow-lg h-[200px]"
            />
          </div>
        </div>

        <div className="bg-gray-200 h-[800px]">
          <div className="flex flex-col  items-center">
            <p className="py-5 text-3xl font-bold text-black">
              What are They Saying
            </p>
            <hr className="w-[64px] border-black" />
          </div>

          <div className="flex ">
            {/*feedback/person 1*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-3.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug">
                  &ldquo;Your website has been a game-changer for me as a
                  filmmaker! The platform is easy to use and provides a seamless
                  experience for creating my profile and connecting with
                  potential collaborators. Overall, your website has been a
                  valuable tool for me in advancing my filmmaking career. Thank
                  you!&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>

            {/*feedback/person 2*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-2.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug max-h-[130px]">
                  &ldquo;I have found your app incredibly useful as a
                  photographer! It offers a user-friendly interface and
                  streamlines the process of showcasing my portfolio and
                  interacting with clients. Thanks to your app, I have been able
                  to expand my reach and land more photography gigs. !&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>

            {/*feedback/person 3*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-2.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug max-h-[130px]">
                  &ldquo; Your platform has been a true blessing for aspiring
                  actors like myself. The streamlined interface and
                  easy-to-navigate layout make it a breeze to build my
                  professional profile and connect with industry professionals.
                  Thanks to your website!!&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mt-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex ">
            {/*feedback/person 1*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-2.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug">
                  &ldquo;Your website has been a game-changer for me as a
                  filmmaker! The platform is easy to use and provides a seamless
                  experience for creating my profile and connecting with
                  potential collaborators. Overall, your website has been a
                  valuable tool for me in advancing my filmmaking career. Thank
                  you!&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>

            {/*feedback/person 2*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-3.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug max-h-[130px]">
                  &ldquo;I have found your app incredibly useful as a
                  photographer! It offers a user-friendly interface and
                  streamlines the process of showcasing my portfolio and
                  interacting with clients. Thanks to your app, I have been able
                  to expand my reach and land more photography gigs. !&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>

            {/*feedback/person 3*/}
            <div className="mt-10  mx-5 overflow-hidden shadow-lg w-[440px] h-[260px] bg-indigo-400">
              <div className="flex items-center p-4 mt-4">
                <img
                  className="h-12 w-12 rounded-full mr-4"
                  src="/feedback-3.jpg"
                  alt="Profile Picture"
                />
                <h2 className="text-lg font-semibold underline">
                  Roberto Castillo
                </h2>
              </div>
              <div className="px-6 pt-0">
                <p className="text-white text-base leading-snug max-h-[130px]">
                  &ldquo; Your platform has been a true blessing for aspiring
                  actors like myself. The streamlined interface and
                  easy-to-navigate layout make it a breeze to build my
                  professional profile and connect with industry professionals.
                  Thanks to your website!!&rdquo;
                </p>
              </div>
              <div className="flex justify-end pb-4 mt-4 mr-3">
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
                <svg
                  className="h-6 w-6 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12.449l-4.204 2.245.802-4.68L2.84 6.806l4.68-.68L10 2l2.479 4.126 4.68.68-3.757 3.208.802 4.68L10 12.45z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  text-black h-[1050px] ">
          <div className=" flex flex-col  items-center ">
            <p className="py-5 w-[300px] text-center text-3xl font-bold  text-black">
              Ready to start with Art Fusion?
            </p>
            <p>Choose the package that best suit you</p>
            <div className="flex items-center">
              <SwitchDemo name="Monthly" name2="Yearly" />
              <div className="bg-yellow-300 rounded ">
                <p className="mx-1 my-1"> 30% discount</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <div className="h-[660px] w-[420px]  mx-5  border-2 border-black rounded-lg max-h-[660px] max-w-[420px]">
              <h1 className="text-2xl ml-12 mt-20 font-semibold">Individual</h1>
              <p className="text-2xl ml-12 mt-7">$ 160</p>
              <p className=" ml-12 ">per month</p>
              <div className="mt-10 flex justify-center">
                <button className="w-[200px] h-[40px] bg-blue-700 rounded-lg text-white hover:text-blue-700 hover:bg-transparent hover:border-2 hover:border-blue-700">
                  Request a demo
                </button>
              </div>
              <div className="flex my-10 justify-center text-lg text-gray-500">
                <ul className="list-disc ">
                  <li className="mb-2">1000 conversations p/m</li>
                  <li className="mb-2">can apply 25 jobs</li>
                  <li className="">15000 visitors</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <hr className="w-64  border-black" />
              </div>
              <div className="flex my-10 justify-center text-lg text-gray-500">
                <ul className="flex flex-col">
                  <li className="mb-2 flex items-center">
                    <FaPlus className="mr-2" />
                    1000 conversations p/m
                  </li>
                  <li className="mb-2 flex items-center">
                    <FaPlus className="mr-2" />
                    can apply 25 jobs
                  </li>
                  <li className="flex items-center">
                    <FaPlus className="mr-2" />
                    15000 visitors
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-[660px] w-[420px]  mx-5  border-2 border-black rounded-lg max-h-[660px] max-w-[420px]">
              <h1 className="text-2xl ml-12 mt-20 font-semibold">Company</h1>
              <p className="text-2xl ml-12 mt-7">$ 260</p>
              <p className=" ml-12 ">per month</p>
              <div className="mt-10 flex justify-center">
                <button className="w-[200px] h-[40px] bg-blue-700 rounded-lg text-white hover:text-blue-700 hover:bg-transparent hover:border-2 hover:border-blue-700">
                  Request a demo
                </button>
              </div>
              <div className="flex my-10 justify-center text-lg text-gray-500">
                <ul className="list-disc ">
                  <li className="mb-2">1000 conversations p/m</li>
                  <li className="mb-2">can apply 25 jobs</li>
                  <li className="">15000 visitors</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <hr className="w-64  border-black" />
              </div>
              <div className="flex my-10 justify-center text-lg text-gray-500">
                <ul className="flex flex-col">
                  <li className="mb-2 flex items-center">
                    <FaPlus className="mr-2" />
                    1000 conversations p/m
                  </li>
                  <li className="mb-2 flex items-center">
                    <FaPlus className="mr-2" />
                    can apply 25 jobs
                  </li>
                  <li className="flex items-center">
                    <FaPlus className="mr-2" />
                    15000 visitors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
