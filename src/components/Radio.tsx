import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

interface RadioGroupData {
  label: string;
  value: string;
}

interface RadioGroupDemoProps {
  data: RadioGroupData[];
}

const RadioGroupDemo: React.FC<RadioGroupDemoProps> = ({ data }) => (
  <form>
    <RadioGroup.Root
      className="flex flex-col gap-2.5"
      defaultValue={data[0].value}
      aria-label="View density"
    >
      {data.map((item) => (
        <div className="flex items-center" key={item.value}>
          <RadioGroup.Item
            className="bg-white w-[25px] h-[25px] rounded-full  focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
            value={item.value}
            id={`radio-${item.value}`}
          >
            <RadioGroup.Indicator
              className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-blue-700"
            />
          </RadioGroup.Item>
          <label
            className="text-white text-[15px] leading-none pl-[15px]"
            htmlFor={`radio-${item.value}`}
          >
            {item.label}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  </form>
);

export default RadioGroupDemo;
