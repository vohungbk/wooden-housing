"use client";
import { ToggleSwitch } from "@/app/components/FormComponents/ToggleSwitch";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function Consultation() {
  const [phoneValue, setPhoneValue] = useState("");

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FEF8F6 0%, #FFFFFF 100%)",
      }}
      className='overflow-hidden px-[26px] pt-[35px] xl:h-[465px] xl:p-0'
    >
      <div
        className='flex-center relative h-full bg-cover bg-center bg-no-repeat pb-[61px] xl:!bg-none'
        style={{ backgroundImage: "url('/images/consultation-bg.png')" }}
      >
        <div className='z-10 max-w-[1280px] xl:flex xl:flex-row-reverse xl:items-center xl:gap-[51px]'>
          <div className='inline-flex h-[275px] w-full shrink-0 flex-col items-start justify-start gap-5 rounded-[15px] border-2 border-[#d75337] bg-white p-5 xl:h-auto xl:w-[587px] xl:p-[30px]'>
            <div className='flex h-[162px] flex-col items-start justify-start gap-2.5 self-stretch xl:mb-[25px] xl:h-auto'>
              <div className='self-stretch'>
                <span className='text-[19px] font-medium leading-[33px] text-[#151515] xl:text-[28px]'>
                  Get{" "}
                </span>
                <span className='text-[19px] font-medium leading-[33px] text-[#d75337] xl:text-[28px]'>
                  free
                </span>
                <span className='text-[19px] font-medium leading-[33px] text-[#151515] xl:text-[28px]'>
                  {" "}
                  consultation
                </span>
              </div>
              <div className='flex h-[119px] flex-col items-start justify-start gap-2.5 self-stretch'>
                <div className='self-stretch text-base font-normal leading-[23px] text-[#464646]'>
                  Please enter your mobile number:
                </div>
                <div className='inline-flex h-[43.61px] items-center justify-start gap-[8.23px] self-stretch rounded-md py-[12.34px] pl-[12.34px] pr-[5.76px] xl:h-[53px] xl:gap-2.5 xl:pl-0'>
                  <PhoneInput
                    value={phoneValue}
                    inputStyle={{
                      width: "100%",
                      borderColor: "#F1F1F1",
                      fontSize: "16px",
                      background: "#f7f7f7",
                    }}
                    inputClass='h-8 xl:!h-[53px]'
                    onChange={(value) => setPhoneValue(value)}
                    countryCodeEditable={false}
                    enableSearch={true}
                    disableSearchIcon={true}
                    placeholder='1234567890'
                    disableCountryCode={false}
                    country={"in"}
                  />
                  <div className='flex-center h-[53px] w-[68px] rounded-lg bg-[#D75337]'>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color='#fff'
                      fontSize={20}
                    />
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2.5'>
                  <ToggleSwitch />
                  <div className='text-sm font-normal leading-[23px] text-[#151515]'>
                    Reach me on whatsapp
                  </div>
                </div>
              </div>
            </div>
            <div className='inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-[#d75337] px-2.5 py-[15px]'>
              <div className='text-base font-semibold leading-[23px] text-white'>
                Meet a designer
              </div>
            </div>
          </div>
          <div className='my-[19px] inline-flex w-full items-center justify-center xl:my-0'>
            <Image
              src={"/images/consultation.svg"}
              alt=''
              width={150}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/consultation-desktop.svg"}
              alt=''
              width={30}
              height={1}
              className='hidden xl:block'
            />
            <h4 className='text-center text-[22px] font-semibold leading-[30.84px] text-[#352d39] xl:text-2xl xl:text-[#888686]'>
              or
            </h4>
            <Image
              src={"/images/consultation.svg"}
              alt=''
              width={150}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/consultation-desktop.svg"}
              alt=''
              width={30}
              height={1}
              className='hidden xl:block'
            />
          </div>

          {/* WhatsApp Us */}
          <div className='flex w-full cursor-pointer justify-center'>
            <div className='inline-flex w-[315px] items-center justify-start gap-[14.56px] rounded-[77.07px] bg-[#f5fcf4] px-[41.04px] py-[25.69px] xl:w-[506px] xl:gap-[23px]'>
              <div className='flex-center h-[55.66px] w-[55.66px] rounded-full border border-[#1daf11]/30 xl:h-[89px] xl:w-[89px]'>
                <Image
                  src={"/icons/whatsapp.svg"}
                  alt=''
                  width={39}
                  height={39}
                  className='xl:!h-[63px] xl:!w-[63px]'
                />
              </div>
              <div className='inline-flex w-[162.70px] flex-col items-start justify-start gap-[4.28px] xl:w-auto'>
                <div className='inline-flex items-center justify-start gap-[10.50px] self-stretch xl:block'>
                  <h4 className='w-[166.12px] text-2xl font-semibold leading-[43.11px] text-[#1daf11] xl:mb-1.5 xl:w-full xl:text-[39px] xl:leading-[60px]'>
                    WhatsApp Us
                  </h4>
                </div>
                <div className='relative flex h-[18px] w-[129.58px] items-center gap-0.5 xl:w-full xl:gap-1'>
                  <div className='text-xs font-normal leading-[17.15px] text-[#51684e] xl:text-xl'>
                    We are online now
                  </div>
                  <div className='animate-ring flex-center h-[15.59px] w-[15.59px] rounded-full border border-[#77cf70]/30 xl:h-[25.07px] xl:w-[25.07px]'>
                    <div className='animate-ring flex-center h-[10.39px] w-[10.39px] rounded-full border border-[#1daf11]/60 xl:h-[16.71px] xl:w-[16.71px]'>
                      <div className='h-[6.24px] w-[6.24px] rounded-full bg-[#1daf11] xl:h-2.5 xl:w-2.5' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute -bottom-[20px] left-[400px] z-0 hidden lg:block'>
          <Image
            src={"/images/consultation-bg-desktop.png"}
            alt=''
            width={558}
            height={528}
          />
        </div>
      </div>
    </section>
  );
}

export default Consultation;
