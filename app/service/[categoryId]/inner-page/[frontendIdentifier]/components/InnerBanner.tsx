import { LIST_ROUTER } from "@/app/shared/constant";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { FC } from "react";

interface InnerBannerProps {
  categoryName: string;
  categoryId: string;
  serviceName: string;
  bannerImage: string;
  description: string;
}

export const InnerBanner: FC<InnerBannerProps> = ({
  categoryName,
  categoryId,
  serviceName,
  bannerImage,
  description,
}) => {
  return (
    <div
      className='relative h-full w-full bg-cover bg-no-repeat pb-[90px] xl:min-h-[636px]'
      style={{ backgroundImage: `url('${bannerImage}')` }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>
      <div className='relative z-10 xl:flex xl:h-full xl:min-h-[636px] xl:flex-col'>
        <div className='mb-[69px] inline-flex items-center justify-start gap-2.5 pl-[29px] pt-[7px] xl:mb-0 xl:ml-[320px] xl:pl-0 xl:pt-3'>
          <Link
            href={"/"}
            className='text-[10px] font-normal leading-[11px] text-white xl:text-[14px] xl:leading-[27px]'
          >
            Home
          </Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            color='#FFFFFF'
            fontSize={9}
            className='xl:text-[#D75337]'
          />
          <Link
            href={`${LIST_ROUTER.SERVICE}/${categoryId}`}
            className='text-[10px] font-normal leading-3 text-white xl:text-[14px] xl:leading-[27px]'
          >
            {categoryName}
          </Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            color='#FFFFFF'
            fontSize={9}
            className='xl:text-[#D75337]'
          />
          <div className='text-center text-[10px] font-semibold text-white xl:text-[14px] xl:leading-[27px]'>
            {serviceName}
          </div>
        </div>
        <div className='items-center pl-[24px] xl:ml-[320px] xl:flex xl:h-full xl:flex-1 xl:pl-0'>
          <div className='border-l-[4px] border-l-[#ffffff] pl-[14px]'>
            <div className='text-[26.26px] font-semibold leading-6 text-white xl:text-[42px] xl:leading-[52px]'>
              {serviceName}
            </div>
            <div className='text-xl font-semibold leading-6 text-[#ff6747] xl:text-[32px] xl:leading-[40px]'>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
