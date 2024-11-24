import React, { FC } from "react";

interface RadioOptionProps {
  value: string | number;
  label: string;
  name: string;
}

export const RadioOption: FC<RadioOptionProps> = ({ value, label, name }) => {
  return (
    <label className='relative flex cursor-pointer items-center'>
      <input type='radio' name={name} value={value} className='peer hidden' />
      <span className='flex-center flex h-[15.2px] w-[15px] items-center justify-center rounded border-2 border-[#A0A0A0] bg-white transition peer-checked:border-[#D75337]'></span>
      <span className='absolute left-[2.5px] top-1/2 h-[9.63px] w-[9.63px] -translate-y-1/2 rounded-[1.3px] bg-transparent peer-checked:bg-[#D75337]'></span>
      <span className='ml-2 text-base font-thin leading-[18px] text-[#505050] xl:ml-2.5'>
        {label}
      </span>
    </label>
  );
};
