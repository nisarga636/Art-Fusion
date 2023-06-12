import React from "react";

type InputBoxProps = {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  options?: string[];
  
};

const InputBox: React.FC<InputBoxProps> = ({
  label,
  type,
  placeholder,
  required,
  options,

}) => {
  if (type === "dropdown" && options) {
    return (
      <div className={`text-sm w-full ml-20 flex flex-col text-black py-4`}>
        <label>{label}</label>
        <select
          className="p-2.5 rounded-lg bg-gray-300 mt-2"
          required={required}
        >
          <option value="" disabled selected hidden>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={`text-sm w-full  flex flex-col text-black py-4`}>
      <label>{label}</label>
      <input
        className="p-2.5 rounded-lg bg-gray-300 mt-2"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBox;
