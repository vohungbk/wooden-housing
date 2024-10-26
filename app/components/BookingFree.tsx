"use client";

import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function BookingFree() {
  const [phoneValue, setPhoneValue] = useState("");

  return (
    <section className='relative w-full px-[25px] pb-[35px] lg:w-[455px] lg:px-0'>
      <div className='relative z-10 inline-flex w-full flex-col items-start justify-start gap-[12px] rounded-xl border-2 border-[#e35c3f] bg-white px-[24.69px] pb-[24.69px] pt-[13.17px] shadow lg:gap-[15px] lg:px-[28px] lg:pb-[30px] lg:pt-[15px]'>
        <div className='inline-flex items-center justify-center gap-[9.05px] lg:gap-[11px]'>
          <div className='text-center lg:text-left'>
            <span className='text-lg font-medium leading-[38.21px] text-[#1f1f1f] lg:text-[24px] lg:leading-[47px]'>
              Book{" "}
            </span>
            <span className='text-lg font-medium leading-[38.21px] text-[#d75337] lg:text-[24px] lg:leading-[47px]'>
              Free
            </span>
            <span className='text-lg font-medium leading-[38.21px] text-[#1f1f1f] lg:text-[24px] lg:leading-[47px]'>
              {" "}
              design consultation
            </span>
          </div>
          <Image
            src={"/icons/question.svg"}
            alt=''
            width={20}
            height={20}
            className='lg:h-[25px] lg:w-[25px]'
          />
        </div>
        <div className='flex h-[329.58px] flex-col items-start justify-start gap-[24.69px] self-stretch lg:h-auto'>
          <div className='flex h-[261.29px] flex-col items-start justify-start gap-[15.63px] self-stretch lg:gap-[19px]'>
            <div className='flex h-[67.62px] flex-col items-start justify-start gap-[4.94px] self-stretch lg:h-auto'>
              <div className='text-sm font-normal leading-[18.93px] text-[#474747] lg:text-[18px]'>
                Name:
              </div>
              <input
                className='inline-flex items-center justify-start gap-[8.23px] self-stretch rounded-md bg-[#f7f7f7] py-[12.34px] pl-[12.34px] pr-[11.52px] lg:py-[15px] lg:leading-[23px]'
                placeholder='Rahul K.'
              />
            </div>
            <div className='flex h-[67.62px] flex-col items-start justify-start gap-[4.94px] self-stretch lg:h-auto'>
              <div className='self-stretch text-sm font-normal leading-[18.93px] text-[#474747] lg:text-[18px]'>
                Email:
              </div>
              <input
                placeholder='example@gmail.com'
                className='inline-flex items-center justify-start gap-[8.23px] self-stretch rounded-md bg-[#f7f7f7] py-[12.34px] pl-[12.34px] pr-[11.52px] lg:py-[15px] lg:leading-[23px]'
              />
            </div>
            <div className='flex h-[94.78px] flex-col items-start justify-start gap-[8.23px] self-stretch lg:h-auto'>
              <div className='flex h-[67.55px] flex-col items-start justify-start gap-[4.94px] self-stretch'>
                <div className='self-stretch text-sm font-normal leading-[18.93px] text-[#474747] lg:text-[18px]'>
                  Mobile Number:
                </div>
                <div className='inline-flex h-[43.61px] items-center justify-start gap-[8.23px] self-stretch rounded-md bg-[#f7f7f7] py-[12.34px] pl-[12.34px] pr-[5.76px] lg:h-[53px]'>
                  <PhoneInput
                    value={phoneValue}
                    inputStyle={{
                      width: "100%",
                      borderColor: "#F1F1F1",
                      fontSize: "16px",
                    }}
                    inputClass='h-8 lg:!h-[53px]'
                    onChange={(value) => setPhoneValue(value)}
                    countryCodeEditable={false}
                    enableSearch={true}
                    disableSearchIcon={true}
                    placeholder='1234567890'
                    disableCountryCode={false}
                    country={"in"}
                  />
                </div>
              </div>
              <div className='inline-flex items-center justify-start gap-[8.23px]'>
                <div className='relative h-[11.52px] w-[23.04px]'>
                  <div className='absolute left-0 top-0 h-[11.52px] w-[23.04px] rounded-[19.20px] bg-[#d75337]' />
                  <div className='absolute left-[11.52px] top-0 h-[11.52px] w-[11.52px] rounded-full border-2 border-[#d75337] bg-white' />
                </div>
                <div className='text-sm font-normal leading-[18.93px] text-[#474747]'>
                  Reach me on whatsapp
                </div>
              </div>
            </div>
          </div>
          <button className='inline-flex h-[43.61px] items-center justify-center gap-[6.58px] self-stretch rounded-md bg-[#d75337] px-[8.23px] py-[12.34px] lg:mt-[30px] lg:h-[53px] lg:gap-2'>
            <div className='text-center text-sm font-semibold leading-[18.93px] text-white lg:text-[18px]'>
              Meet our architect
            </div>
            <div className='flex items-center justify-center gap-[8.23px] rounded-sm bg-[#f0ab27] px-[4.94px] py-[3.29px]'>
              <div className='h-[10.70px] w-[22.22px] text-center text-[9px] font-medium leading-[10.70px] text-white lg:h-auto lg:w-[39px] lg:text-[12px] lg:leading-4'>
                Free
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className='absolute -top-[124px] left-[78px] z-0 block h-[412px] w-[437px] bg-booking bg-center bg-no-repeat lg:hidden' />
      <div className='bg-bookingDesktop absolute -bottom-[170px] -left-[99px] z-0 hidden h-[859px] w-[910px] bg-center bg-no-repeat lg:block' />
    </section>
  );
}

export default BookingFree;