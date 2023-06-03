"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccountRequest } from "../../store/account.slice";
import { useAppSelector } from "../../store";
import { AiOutlineUser } from "react-icons/ai";

const Page = () => {
  const dispatch = useDispatch();
  const isLoading = useAppSelector((state) => state.createAccount.isLoading);
  const successMessage = useAppSelector(
    (state) => state.createAccount.successMessage
  );
  const error = useAppSelector((state) => state.createAccount.error);

  const handleCreateAccount = () => {
    // Dispatch the createAccountRequest action
    dispatch(createAccountRequest());
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Hello,
        <br /> Welcome to Art Fusion!
      </h1>
      <button
        onClick={handleCreateAccount}
        className="bg-transparent text-blue-700 border-blue-700 border-2 hover:bg-primary hover:text-white hover:border-0"
      >
        <AiOutlineUser className="text-xl" />{" "}
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>
    </div>
  );
};

export default Page;
