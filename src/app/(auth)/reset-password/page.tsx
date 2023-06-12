import React from "react";

const Page = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[url('/reset-password.jpg')] bg-cover  "></div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 text-black">
        {/* You can adjust the width (w-1/2) and other styles according to your needs */}
        <h1 className="text-3xl font-bold mb-28">Art Fusion</h1>
        <div className="max-w-sm p-6 bg-white ">
          
          <h3 className="text-xl font-bold mb-4">Forgot Password</h3>
          <form>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Get Code
              </button>
              <button
                type="button"
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
