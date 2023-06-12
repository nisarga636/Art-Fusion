"use client";

import LabelDemo from "@/components/Input";
import InputBox from "@/components/inputbox";
import React from "react";

export default function page() {
  const typeoptions = ["Option 1", "Option 2", "Option 3"];
  return (
    <div>
      <div className="flex flex-row">
        <div className=" flex flex-col text-black ">
          <InputBox
            label="Project Name"
            type="text"
            placeholder="project name"
            required={true}
          />
          <InputBox
            label="Budget"
            type="number"
            placeholder="Budget"
            required={true}
          />
          <InputBox
            label="Type"
            type="dropdown"
            options={typeoptions}
            placeholder="Type"
            required={true}
          />
          <InputBox
            label="Genere"
            type="text"
            placeholder="Genere"
            required={true}
          />
          <InputBox
            label="location(state)"
            type="text"
            placeholder="location"
            required={true}
          />
        </div>
        <div className=" flex flex-col text-black ">
          <InputBox
            label="Project Start Date"
            type="date"
            placeholder="Project Start Date"
            required={true}
          />
          <InputBox
            label="Project Name"
            type="text"
            placeholder="project name"
            required={true}
          />
          <InputBox
            label="Project Name"
            type="text"
            placeholder="project name"
            required={true}
          />
          <InputBox
            label="Project Name"
            type="text"
            placeholder="project name"
            required={true}
          />
          <InputBox
            label="Project Name"
            type="text"
            placeholder="project name"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
