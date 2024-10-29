import Image from "next/image";
import React from "react";
const topData = [
  { id: 1, title: "Earthquake Resistance", iconUrl: "/icons/inner-1.svg" },
  { id: 2, title: "Heat and Cold Resistance", iconUrl: "/icons/inner-2.svg" },
  { id: 3, title: "Fire Resistance", iconUrl: "/icons/inner-3.svg" },
  { id: 4, title: "Sound Proof", iconUrl: "/icons/inner-4.svg" },
  { id: 5, title: "3 Years Warranty", iconUrl: "/icons/inner-5.svg" },
];

function SafetyFeatures() {
  return (
    <div className='mb-[29px] flex justify-between gap-[7px] xl:mb-[59px] xl:gap-[63px]'>
      {topData.map((item) => (
        <div
          key={item.id}
          className='flex flex-col items-center gap-[11px] xl:gap-4'
        >
          <div className='flex h-[46.64px] w-[46.64px] items-center justify-center rounded-[31.87px] border border-[#d75337] bg-white xl:h-[81px] xl:w-[81px] xl:rounded-[55px]'>
            <div className='inline-flex h-[35.59px] w-[35.59px] flex-col items-center justify-center rounded-[17.79px] bg-[#fff0eb] xl:h-[61.8px] xl:w-[61.8px] xl:rounded-[31.9px]'>
              <Image
                src={item.iconUrl}
                alt=''
                width={22}
                height={22}
                className='xl:!h-[38px] xl:!w-[39px]'
              />
            </div>
          </div>
          <div className='w-[62px] text-center text-[10.79px] font-normal leading-[15px] text-[#232323] xl:w-full xl:text-[18px] xl:leading-5'>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SafetyFeatures;
