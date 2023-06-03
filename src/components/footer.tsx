import React from 'react';
import { IoCall } from 'react-icons/io5';
import { MdEmail,MdLocationOn } from 'react-icons/md';
import { ImLinkedin2,ImFacebook } from 'react-icons/im';
import { BsInstagram,BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div >
            <h2 className='font-extrabold text-2xl'>Art Fusion</h2><br/>
           <p className="text-sm"> Download the app by clicking the link below:</p>
          </div>
          <div className="justify-self-end">
            <h2 className="font-bold width: 49px
height: 170px">Pages</h2>
            <p>Home</p>
            <p>Services</p>
            <p>Pricing</p>
            <p>Support</p>
          </div>
          <div className="justify-self-end">
            <h2 className="font-bold width: 248px
height: 168px">Contact</h2>
            <p><IoCall className="inline-block mr-2"/>(406) 555-0120</p>
            <p><MdEmail className="inline-block mr-2"/>artfusion@gmail.com</p>
            <p><MdLocationOn className="inline-block mr-2"/>2574, Western block</p>
          </div>
          <div className="ml-6">
          <h2 className="font-bold width: 142px
height: 85px">Social Media</h2>
          <p>
              <span className="inline-block mr-2">
                <ImFacebook />
              </span>
              <span className="inline-block mr-2">
                <BsTwitter />
              </span>
              <span className="inline-block mr-2">
                <ImLinkedin2 />
              </span>
              <span className="inline-block">
                <BsInstagram />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
