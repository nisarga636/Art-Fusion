import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => (
  <form>
    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
        Airplane mode
      </label>
      <Switch.Root
        className="w-[42px] h-[25px] bg-gray-500 rounded-full relative focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-700 outline-none cursor-default"
        id="airplane-mode"
        
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;