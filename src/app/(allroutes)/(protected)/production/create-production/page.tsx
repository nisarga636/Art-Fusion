"use client";

<<<<<<< HEAD
import InputBox from "@/components/inputbox";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { Bs0SquareFill, BsTrash } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
=======
import InputBox from "@/components/util/inputbox";
import React from "react";
>>>>>>> e43f23f03181d2d25465bd6abe2ac5836bdd0535

export default function page() {
  const typeoptions = ["Movie", "Short Film", "Ads"];
  const skillsoption = ["sasad"];
  const genderoption = ["sasad"];
  const Experienceoption = ["sasad"];

  const [requirements, setRequirements] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedRequirementIndex, setSelectedRequirementIndex] = useState(0);

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const deleteRequirement = () => {
    const updatedRequirements = [...requirements];
    updatedRequirements.splice(selectedRequirementIndex, 1);
    setRequirements(updatedRequirements);
    setShowConfirmation(false);
  };

  const handleRequirementChange = (index, value) => {
    const updatedRequirements = [...requirements];
    updatedRequirements[index] = value;
    setRequirements(updatedRequirements);
  };

  const openConfirmationModal = (index) => {
    setSelectedRequirementIndex(index);
    setShowConfirmation(true);
  };

  const closeConfirmationModal = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="">
      <div className="flex flex-row justify-center">
        <div className=" flex flex-col text-black w-96">
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
        </div>
        <div className=" flex flex-col text-black ml-20  w-96">
          <InputBox
            label="location(state)"
            type="text"
            placeholder="location"
            required={true}
          />
          <InputBox
            label="Project Start Date"
            type="date"
            placeholder="Project Start Date"
            required={true}
          />
          <InputBox
            label="Duration(months)"
            type="text"
            placeholder="Duration"
            required={true}
          />
          <InputBox
            label="Length(Mins)"
            type="number"
            placeholder="Length(Mins)"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-col items-end mr-4 mt-4">
        <button
          className="w-[200px] h-[38px] mt-3 rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center"
          onClick={addRequirement}
        >
          Add Requirements
          <FiPlusSquare className="ml-3" />
        </button>
      </div>
      {requirements.map((requirement, index) => (
        <div
          key={index}
          className="flex flex-row w-[1030px] items-center justify-center space-x-3 mx-3 "
        >
          <RxDragHandleDots2 className="text-gray-400 text-[120px]" />
          <InputBox
            label="Skill"
            type="dropdown"
            options={skillsoption}
            placeholder="skill"
            required={true}
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
          />
          <InputBox
            label="Gender"
            type="dropdown"
            options={genderoption}
            placeholder="gender"
            required={true}
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
          />
          <InputBox
            label="Age"
            type="number"
            placeholder="age"
            required={true}
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
          />
          <InputBox
            label="Experience"
            type="dropdown"
            options={Experienceoption}
            placeholder="Experience"
            required={true}
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
          />
          <InputBox
            label="Salary(per month)"
            type="number"
            placeholder="salary"
            required={true}
            value={requirement}
            onChange={(e) => handleRequirementChange(index, e.target.value)}
          />

          <button
            className="bg-red-500 w-fit h-fit p-1 rounded-md"
            onClick={() => openConfirmationModal(index)}
          >
            <BsTrash className="text-[24px]" />
          </button>
        </div>
      ))}
      <div className="flex flex-row justify-center mr-4 my-4">
        <button
          className="bg-blue-700 w-fit h-fit p-1 rounded-md"
          onClick={addRequirement}
        >
          <AiOutlinePlus className="text-[24px]" />
        </button>
      </div>
      <div className="flex flex-row justify-end mr-4 my-4">
        <button className="w-[200px] h-[38px] mt-3 rounded-lg bg-blue-700 hover:bg-transparent hover:border-2 hover:font-semibold hover:border-blue-700 hover:text-blue-700 flex items-center justify-center">
          Post
          <BiPaperPlane className="ml-3" />
        </button>
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-lg font-semibold mb-4 text-black">
              Confirm Deletion
            </h3>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete this requirement?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-500 rounded-md mr-2 hover:font-semibold hover:text-black"
                onClick={closeConfirmationModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
                onClick={deleteRequirement}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
