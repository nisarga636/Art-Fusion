import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../../components/ui/avatar";
import { faker } from "@faker-js/faker";

interface ProfileDetails {
  name: string;
  dob: string;
  companyName: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
}

const MyProfile: React.FC<ProfileDetails> = ({
  name,
  dob,
  companyName,
  location,
  email,
  phone,
  bio,
}) => {
  return (
    <div className="flex flex-col items-start justify-center h-screen bg-gray-100">
      <div
        className="bg-white rounded-lg shadow-md "
        style={{ padding: "20px",gap: "10px" }}
      >
        <div className="" style={{ marginBottom: "10px" }}>
          <Avatar className="h-16 w-16">
            <AvatarImage src={faker.image.avatar()} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-black text-3xl font-bold mb-4">Ben Franklin</h1>
        <hr className="text-black mb-4"/>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Date of Birth:</span> {dob}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Company Name:</span> {companyName}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Bio:</span> {bio}
        </p>
        <p className="text-gray-600">
          Welcome to your profile page! As a production owner, you play a
          crucial role in overseeing the operations and management of the
          production process. Use this page to showcase your information and
          connect with others in the industry. Feel free to update your details
          and add any additional information you would like to share.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
