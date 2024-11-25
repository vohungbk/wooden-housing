import { CategoryType } from "@/app/types/services";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC } from "react";

interface ServiceBannerProps {
  categoryDetail: CategoryType;
}

export const ServiceBanner: FC<ServiceBannerProps> = ({ categoryDetail }) => {
  return (
    <section
      style={{
        backgroundImage: `url('${categoryDetail?.coverImage}')`,
      }}
      className='relative flex h-[209px] flex-col bg-cover bg-center bg-no-repeat pl-[27px] pt-[5px] xl:h-[239px]'
    >
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(38, 33, 41, 0.8), rgba(38, 33, 41, 0.8))",
        }}
        className='absolute inset-0'
      ></div>
      <div className='z-10 inline-flex items-center justify-start gap-1.5'>
        <p className='text-center text-[10px] font-normal leading-[18.67px] text-white xl:text-[14px]'>
          Home
        </p>
        <FontAwesomeIcon
          icon={faAngleRight}
          color='#D75337'
          className='text-[5px] xl:text-[8px]'
        />
        <p className='text-[10px] font-semibold leading-[18.67px] text-white xl:text-[14px]'>
          Services
        </p>
      </div>
      <div className='z-10 mt-10 inline-flex flex-col items-center justify-start gap-[5px] xl:gap-[10px]'>
        <div className='inline-flex items-center justify-center self-stretch'>
          <Image
            src={"/images/service-banner-line-1.svg"}
            alt=''
            width={495}
            height={1}
            className='hidden xl:block'
          />
          <div className='text-center'>
            <span className='text-[22px] font-semibold leading-[30.84px] text-white xl:text-[42px] xl:leading-[42px]'>
              {categoryDetail?.name}
            </span>
          </div>
          <Image
            src={"/images/service-banner-line-2.svg"}
            alt=''
            width={495}
            height={1}
            className='hidden xl:block'
          />
        </div>
        <p className='text-center text-xs font-light leading-[17.93px] text-white xl:text-xl'>
          {categoryDetail?.description}
        </p>
      </div>
    </section>
  );
};
