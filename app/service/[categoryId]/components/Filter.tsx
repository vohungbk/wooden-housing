import { RadioOption } from "@/app/components/form/RadioOption";
import { Select } from "@/app/components/form/Select";
import React, { FC } from "react";

const options = [
  { value: "200", label: "200" },
  { value: "500", label: "500" },
  { value: "5000", label: "5000" },
];

interface FilterProps {
  label?: string;
}

export const Filter: FC<FilterProps> = ({}) => {
  const Label = ({ title }: { title: string }) => (
    <h4 className='text-base font-medium leading-5 text-[#1c1c1c] xl:text-xl'>
      {title}
    </h4>
  );
  return (
    <div className='absolute -top-[60px] left-1/2 inline-flex h-[259px] -translate-x-1/2 flex-col items-start justify-start gap-[22px] rounded-[10px] bg-white p-[25px] shadow xl:h-[154px] xl:w-[1280px] xl:flex-row xl:justify-between xl:pl-[125px] xl:pr-[185px] xl:pt-[30px]'>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='No. of Bedrooms' />
        <div className='inline-flex items-start justify-start gap-[25px]'>
          <RadioOption value={1} label='1' name='bedrooms' />
          <RadioOption value={2} label='2' name='bedrooms' />
          <RadioOption value={3} label='3' name='bedrooms' />
          <RadioOption value={4} label='4' name='bedrooms' />
          <RadioOption value={5} label='5' name='bedrooms' />
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='No. of floors' />
        <div className='inline-flex items-start justify-start gap-[25px] xl:gap-[29px]'>
          <RadioOption value={1} label='1' name='floors' />
          <RadioOption value={2} label='2' name='floors' />
          <RadioOption value={3} label='3' name='floors' />
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='Gross Living Area' />
        <div className='inline-flex items-center justify-start gap-2.5'>
          <div className='flex items-center justify-start gap-[4.37px]'>
            <Select
              placeholder='250'
              className='h-[33px] w-[65px] xl:h-10'
              options={options}
            />
            <div className='text-base font-medium text-[#484848]'>sqft</div>
          </div>
          <div className='h-[1.75px] w-[7px] bg-[#D75337]' />
          <div className='flex items-center justify-start gap-[4.37px]'>
            <Select
              placeholder='500'
              className='h-[33px] w-[65px] xl:h-10'
              options={options}
            />
            <div className='text-base font-medium text-[#484848]'>sqft</div>
          </div>
        </div>
      </div>
    </div>
  );
};
