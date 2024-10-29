import Image from "next/image";
import React from "react";

function HowItWorks() {
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
        <div className='relative mb-[39px] mt-[25px] h-6 w-full xl:h-[107px]'>
          <Image
            src={"/images/how-it-work-step.svg"}
            alt=''
            fill
            className='block xl:hidden'
          />
          <Image
            src={"/images/how-it-work-step-desktop.svg"}
            alt=''
            fill
            className='hidden xl:block'
          />
        </div>
        <div className='relative mb-[34px] h-[253px] w-full xl:mb-0 xl:h-[362px]'>
          <Image
            src={"/images/how-it-work-banner.svg"}
            alt=''
            fill
            className='block xl:hidden'
          />
          <Image
            src={"/images/how-it-work-banner-desktop.svg"}
            alt=''
            fill
            className='hidden xl:block'
          />
        </div>
        <h4 className='text-lg font-medium leading-snug text-[#282828] xl:hidden'>
          3. Book with us
        </h4>
        <p className='w-[377px] text-[11px] font-light leading-[21px] text-[#424242] xl:hidden'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ulla.
        </p>
        <div className='flex-center !hidden xl:!flex'>
          <div className='relative w-[700px]'>
            <p className='text-[163px] font-semibold leading-[204px] text-[#F2F2F2]'>
              03
            </p>
            <div className='absolute left-[150px] top-[28%]'>
              <h4 className='text-xl font-medium text-[#161616]'>
                3. Explore Design Options
              </h4>
              <p className='text-[15px] font-light leading-[23px] text-[#434343]'>
                We’ll present you with various design options and reference
                images to help you choose the style and layout that best suits
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
