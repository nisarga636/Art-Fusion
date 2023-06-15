import React from "react";
import NavBar from "../../../../../../components/sub-components/NavBar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../../../components/ui/avatar";
import { BiChevronsRight } from "react-icons/bi";
import { AiOutlineHome, AiOutlineEdit } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CreateProduction() {
  return (
    <div style={{ paddingLeft: "240px", paddingRight: "240px" }}>
      <nav
        className="flex text-2xl items-center "
        style={{ marginTop: "40px", marginBottom: "40px" , gap: "5px"}}
      >
        <AiOutlineHome />
        <BiChevronsRight className="text-gray-500" />
        <p className="text-black text-[8px]">Create Production</p>
      </nav>
      <div className="flex flex-row " style={{  gap: "50px"}}>

      <div className="grid w-full max-w-sm items-center gap-4 ">
        <Label htmlFor="project name">Project Name</Label>
        <Input type="name" id="project name" placeholder="name" />
        <Label htmlFor="email-2">Email</Label>
        <Input type="email" id="email-2" placeholder="Email" />
        <Label htmlFor="contact number">Contact Number</Label>
        <Input
          type="contact number"
          id="contact number"
          placeholder="contact number"
          />
        <Label htmlFor="company name">Company Name</Label>
        <Input type="name" id="company name" placeholder="company name" />
        <Label htmlFor="location">Location</Label>
        <Input type="address" id="location" placeholder="location" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-4 ">
        <Label htmlFor="name">Name</Label>
        <Input type="name" id="name" placeholder="name" />
        <Label htmlFor="email-2">Email</Label>
        <Input type="email" id="email-2" placeholder="Email" />
        <Label htmlFor="contact number">Contact Number</Label>
        <Input
          type="contact number"
          id="contact number"
          placeholder="contact number"
        />
        <Label htmlFor="company name">Company Name</Label>
        <Input type="name" id="company name" placeholder="company name" />
        <Label htmlFor="location">Location</Label>
        <Input type="address" id="location" placeholder="location" />
      </div>
          </div>
      <div className="flex justify-end " style={{ gap: "10px" }}>
        <Button>
          <AiOutlineEdit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        <Button>
          <FiLogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  );
}
