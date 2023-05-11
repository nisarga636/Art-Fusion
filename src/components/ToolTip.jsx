import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { UploadIcon } from "@radix-ui/react-icons";

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="text-black hover:bg-blue-700 hover:text-white inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white  outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            <UploadIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-[4px] bg-blue-700 px-[15px] py-[10px] text-[15px] leading-none  will-change-[transform,opacity]"
            sideOffset={5}
          >
            Upload Poster
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;
