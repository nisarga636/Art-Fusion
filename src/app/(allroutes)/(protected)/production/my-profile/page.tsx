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

export default function MyProfile() {
  return (
    <div style={{ paddingLeft: "240px", paddingRight: "240px" }}>
      <div>
        <Avatar>
          <AvatarImage src="/feedback-2.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h1>Name</h1>
        <labl
      </div>
    </div>
  );
}
