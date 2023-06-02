"use client"

import React from "react";
import RadioGroupDemo from "../components/Radio";

const MyComponent: React.FC = () => {
  const radioGroupData = [
    { label: "skdfljkn", value: "default" },
    { label: "Comfortable", value: "comfortable" },
    { label: "Compact", value: "compact" },
  ];

  return (
    <div>
      <h1>My Component</h1>
      <RadioGroupDemo data={radioGroupData} />
    </div>
  );
};

export default MyComponent;
