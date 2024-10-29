import Image from "next/image";
import React, { FC } from "react";

interface ProjectItemsProps {
  title: string;
  value: string | number;
  iconSrc: string;
  isHasBorder?: boolean;
}

export const ProjectItems: FC<ProjectItemsProps> = ({
  title,
  value,
  iconSrc,
  isHasBorder = true,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-between self-stretch bg-white px-4 py-2 xl:px-[18px] xl:py-[11px] ${isHasBorder ? "border-b border-neutral-300" : ""}`}
    >
      <div className='flex items-center gap-5'>
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-[#f3eff5] xl:h-[38px] xl:w-[38px]'>
          <Image src={iconSrc} alt='' width={19} height={19} />
        </div>
        <div className='text-base font-normal leading-[25px] text-[#313131]'>
          {title}
        </div>
      </div>
      <div className='text-base font-medium capitalize leading-[27px] text-black'>
        {value}
      </div>
    </div>
  );
};
