import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Banner() {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(38, 33, 41, 0.8), rgba(38, 33, 41, 0.8)), url(/images/about-bg.jpeg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className='relative h-[209px] w-full xl:h-[278px]'
    >
      <div className='flex-center relative mx-auto h-full max-w-full xl:max-w-[1280px]'>
        <div className='absolute left-0 top-1.5 inline-flex items-center justify-start gap-1.5 pl-[31px] xl:top-[15px]'>
          <p className='text-center text-[10px] font-normal leading-[18.67px] text-white xl:text-[14px]'>
            Home
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            color='#D75337'
            className='text-[5px] xl:text-[8px]'
          />
          <p className='text-[10px] font-semibold leading-[18.67px] text-white xl:text-[14px]'>
            About Us
          </p>
        </div>
        <div className='inline-flex h-full w-full flex-col items-center justify-center gap-[5px]'>
          <div className='inline-flex items-center justify-center self-stretch'>
            <div className='text-center'>
              <span className='text-[22px] font-semibold leading-[30.84px] text-white xl:text-[42px] xl:leading-[46px]'>
                About{" "}
              </span>
              <span className='text-[22px] font-semibold leading-[30.84px] text-[#ec6346] xl:text-[42px] xl:leading-[46px]'>
                Us
              </span>
            </div>
          </div>
          <div className='w-[282.89px] text-center text-xs font-light leading-[17.93px] text-white xl:w-full'>
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
