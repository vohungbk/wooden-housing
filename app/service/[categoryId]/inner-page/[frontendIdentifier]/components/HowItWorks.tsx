"use client";

import Image from "next/image";
import React, { useState } from "react";

const stepsData = [
  {
    value: 1,
    label: "Raise a request",
    description:
      "Reach out to us to express your interest in building a wooden house/cottage.",
  },
  {
    value: 2,
    label: "Meet Our Expert",
    description:
      "Our architect will visit you to discuss your ideas, preferences, and budget, ensuring we capture your vision perfectly.",
  },
  {
    value: 3,
    label: "Explore Design Options",
    description:
      "We’ll present you with various design options and reference images to help you choose the style and layout that best suits your needs.",
  },
  {
    value: 4,
    label: "Book with Us",
    description:
      "Once you’re satisfied with the design, secure your booking to begin the next steps.",
  },
  {
    value: 5,
    label: "Receive 3D Design",
    description:
      "We create a detailed 3D model of your wooden house, allowing you to visualize every aspect before construction begins.",
  },
  {
    value: 6,
    label: "Finalize Materials & Specifications",
    description:
      "Work with us to select the perfect materials, from wood types to finishes, ensuring every detail aligns with your preferences.",
  },
  {
    value: 7,
    label: "Monitor Construction Progress",
    description:
      "Stay informed as our team keeps you updated on the construction progress, from foundation to final touches.",
  },
  {
    value: 8,
    label: "Handover to Client",
    description:
      "Upon completion, we hand over your fully finished wooden house, ready for you to move in and enjoy.",
  },
];

function LineConnect({ isActive = false, className = "" }) {
  return (
    <div
      className={`w-[21px] xl:w-[58px] ${isActive ? "h-0.5 bg-[#D75337] xl:h-[7px]" : "h-[0.99px] bg-[#F3D8D2] xl:h-[3px]"} ${className}`}
    />
  );
}

function Step({
  stepValue = 1,
  isActive = false,
  onClick,
}: {
  stepValue: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const animationClass = isActive ? "animate-bg-red" : "animate-bg-white";

  return (
    <button
      className={`flex-center h-[23.78px] w-[23.78px] cursor-pointer rounded-[31.35px] xl:h-[59px] xl:w-[59px] xl:rounded-[77.79px] ${isActive ? "bg-[#d75337]" : "border-[0.81px] border-[#D75337] bg-white"} ${animationClass}`}
      onClick={onClick}
    >
      <p
        className={`text-[8.87px] font-bold leading-[10px] xl:text-[22px] xl:leading-[26px] ${isActive ? "text-white" : "text-[#D75337]"}`}
      >
        {stepValue}
      </p>
    </button>
  );
}

function StepList({
  step,
  setStep,
}: {
  step: number;
  setStep: (value: number) => void;
}) {
  return (
    <div className='flex-center relative h-6 w-full xl:h-[125px]'>
      {stepsData.map(({ value, label }, index) => (
        <div
          key={value}
          className='mr-[3px] inline-flex flex-col items-center justify-start gap-5 xl:w-[178px]'
        >
          <div className='flex items-center gap-[3px] xl:gap-1.5'>
            {index > 0 && <LineConnect isActive={step >= value} />}
            <div className='flex flex-col items-center justify-center'>
              <Step
                stepValue={value}
                isActive={step >= value}
                onClick={() => setStep(value)}
              />
              <h4 className='hidden text-base font-medium text-[#161616] xl:block'>
                {label}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HowItWorks() {
  const [step, setStep] = useState(1);

  return (
    <section className='flex-center w-full xl:mb-[172px]'>
      <div className='w-full max-w-[1280px] px-[26px] pb-[34px] xl:p-0'>
        <div className='inline-flex w-full flex-col items-center justify-start gap-1'>
          <div className='inline-flex w-[380px] items-center justify-center xl:w-full'>
            <Image
              src={"/images/how-it-work.svg"}
              alt=''
              width={112}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/how-it-work-desktop.svg"}
              alt=''
              width={500}
              height={1}
              className='hidden xl:block'
            />
            <h4 className='text-center text-[22px] font-semibold leading-[30.84px] text-[#352d39] xl:text-[32px] xl:leading-[47px]'>
              How it works?
            </h4>
            <Image
              src={"/images/how-it-work.svg"}
              alt=''
              width={112}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/how-it-work-desktop.svg"}
              alt=''
              width={500}
              height={1}
              className='hidden xl:block'
            />
          </div>
          <div className='w-[282.89px] text-center text-xs font-light leading-[17.93px] text-[#636363] xl:hidden'>
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </div>
        </div>
        <div className='relative mb-[39px] mt-[25px] block h-6 w-full xl:hidden xl:h-[107px]'>
          <StepList step={step} setStep={setStep} />
        </div>
        <div className='relative mb-[39px] mt-[25px] hidden h-6 w-full xl:block xl:h-[107px]'>
          <div className='relative flex w-full justify-center xl:h-[125px]'>
            {stepsData.map(({ value, label }, index) => (
              <div
                key={value}
                className='mr-[3px] inline-flex flex-col items-center justify-start gap-5 xl:w-[178px]'
              >
                <div className='relative flex items-center gap-[3px] xl:gap-1.5'>
                  {index > 0 && (
                    <LineConnect
                      isActive={step >= value}
                      className='absolute -left-0.5 top-[27px]'
                    />
                  )}
                  <div className='flex w-[178px] flex-col items-center justify-start gap-5'>
                    <Step
                      stepValue={value}
                      isActive={step >= value}
                      onClick={() => setStep(value)}
                    />
                    <h4 className='text-center text-base font-medium text-[#161616]'>
                      {label}
                    </h4>
                  </div>
                  {index < stepsData?.length - 1 && (
                    <LineConnect
                      isActive={step > value}
                      className='absolute -right-0.5 top-[27px]'
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='relative mb-[34px] h-[253px] w-full xl:mb-0 xl:h-[362px]'>
          <Image src={`/images/how-it-work-${step}.svg`} alt='' fill />
        </div>
        <h4 className='text-lg font-medium leading-snug text-[#282828] xl:hidden'>
          {step}. {stepsData[step - 1].label}
        </h4>
        <p className='w-[377px] text-[11px] font-light leading-[21px] text-[#424242] xl:hidden'>
          {stepsData[step - 1].description}
        </p>
        <div className='flex-center !hidden xl:!flex'>
          <div className='relative w-[700px]'>
            <p className='text-[163px] font-semibold leading-[204px] text-[#F2F2F2]'>
              0{step}
            </p>
            <div className='absolute left-[150px] top-[28%]'>
              <h4 className='text-xl font-medium text-[#161616]'>
                {step}. {stepsData[step - 1].label}
              </h4>
              <p className='text-[15px] font-light leading-[23px] text-[#434343]'>
                {stepsData[step - 1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
