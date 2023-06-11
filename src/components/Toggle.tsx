import React, { ReactNode } from "react";
import * as Switch from "@radix-ui/react-switch";

interface SwitchDemoProps {
  name: ReactNode;
  name2: ReactNode;
}

const SwitchDemo = ({ name, name2 }: SwitchDemoProps) => (
  <form>
    <div
      className="flex items-center pt-5"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label className="text-black text-[15px] leading-none pr-[15px]">
        {name}
      </label>
      <Switch.Root className="w-[42px] h-[25px] bg-gray-500 rounded-full relative  data-[state=checked]:bg-blue-700 outline-none cursor-default">
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
      <label className="text-black text-[15px] leading-none pl-[15px]">
        {name2}
      </label>
    </div>
  </form>
);

export default SwitchDemo;
