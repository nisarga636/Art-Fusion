import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-4 h-[300px]">
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h2 className="font-extrabold text-2xl">Art Fusion</h2>
            <br />
            <p className="text-sm">
              Download the app by clicking the link below:
            </p>
          </div>
          <div className="justify-self-end ">
            <h2 className="font-bold width: 49px height: 170px mb-7">Pages</h2>
            <p className="mb-2  cursor-pointer">Home</p>
            <p className="mb-2 cursor-pointer">Services</p>
            <p className="mb-2 cursor-pointer">Pricing</p>
            <p className="mb-2 cursor-pointer">Support</p>
          </div>
          <div className="justify-self-end ">
            <h2 className="font-bold width: 248px height: 170px mb-7">
              Contact
            </h2>
            <p className=" mb-2">
              <IoCall className="inline-block mr-2  cursor-pointer" />
              (406) 555-0120
            </p>
            <p className=" mb-2">
              <MdEmail className="inline-block mr-2 cursor-pointer " />
              artfusion@gmail.com
            </p>
            <p className=" mb-2">
              <MdLocationOn className="inline-block mr-2  cursor-pointer" />
              2574, Western block
            </p>
          </div>
          <div className="ml-20 ">
            <h2 className="font-bold width: 142px mb-7 height: 85px">
              Social Media
            </h2>
            <p>
              <span className="inline-block mr-4  cursor-pointer">
                <ImFacebook />
              </span>
              <span className="inline-block mr-4 cursor-pointer">
                <BsTwitter />
              </span>
              <span className="inline-block mr-4 cursor-pointer">
                <ImLinkedin2 />
              </span>
              <span className="inline-block  cursor-pointer">
                <RiInstagramFill />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
