import { signOut } from "next-auth/react";
import React, { useState } from "react";
import {
  MdOutlineSettings,
  MdOutlineLogout,
  MdOutlineAccountBalance,
  MdOutlineHome,
  MdOutlineMessage,
  MdOutlineImage,
  MdOutlineListAlt,
  MdOutlineWorkOutline,
  MdOutlineInfo,
} from "react-icons/md";

function SideNavbar() {
  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className="p-6 w-56 h-screen bg-white z-20 sticky top-0  border-r-[1px] border-black  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center">
          <h1 className="text-3xl text-center cursor-pointer font-bold text-blue-900 border-b border-black pb-4 w-full">
            Art Fusion
          </h1>
          <div className="my-4  pb-4">
            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "home" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("home")}
            >
              <MdOutlineHome
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "home" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "home" ? "text-white" : ""
                }`}
              >
                Home
              </h3>
            </div>
            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "gallery" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("gallery")}
            >
              <MdOutlineImage
                className={`text-2xl text-gray-600 group-hover:text-white  ${
                  selectedItem === "gallery" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "gallery" ? "text-white" : ""
                }`}
              >
                Gallery
              </h3>
            </div>

            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "messages" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("messages")}
            >
              <MdOutlineMessage
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "messages" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "messages" ? "text-white" : ""
                }`}
              >
                Messages
              </h3>
            </div>

            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "payments" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("payments")}
            >
              <MdOutlineAccountBalance
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "payments" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "payments" ? "text-white" : ""
                }`}
              >
                Payments
              </h3>
            </div>

            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "projects" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("projects")}
            >
              <MdOutlineListAlt
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "projects" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "projects" ? "text-white" : ""
                }`}
              >
                My Projects
              </h3>
            </div>

            <div
              className={`flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "search-jobs" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("search-jobs")}
            >
              <MdOutlineWorkOutline
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "search-jobs" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "search-jobs" ? "text-white" : ""
                }`}
              >
                Search Jobs
              </h3>
            </div>
         
          {/* setting  */}
       
            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "settings" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("settings")}
            >
              <MdOutlineSettings
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "settings" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "settings" ? "text-white" : ""
                }`}
              >
                Settings
              </h3>
            </div>
          </div>

          {/* logout and information */}
          <div className=" mt-20 pb-4">
            <div
              className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
                selectedItem === "information" ? "bg-blue-900 text-white" : ""
              }`}
              onClick={() => handleItemClick("information")}
            >
              <MdOutlineInfo
                className={`text-2xl text-gray-600 group-hover:text-white ${
                  selectedItem === "information" ? "text-white" : ""
                }`}
              />
              <h3
                className={`text-base text-black font-semibold group-hover:text-white ${
                  selectedItem === "information" ? "text-white" : ""
                }`}
              >
                Information
              </h3>
            </div>

            <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-500  hover:bg-blue-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineLogout onClick={()=>signOut()} className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-black group-hover:text-white font-semibold ">
                Logout
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
