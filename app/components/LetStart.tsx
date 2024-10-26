import Image from "next/image";
import React from "react";

function LetStart() {
  return (
    <section
      className='relative overflow-hidden py-[60px] lg:pb-[110px] lg:pt-[69px]'
      style={{
        background: "linear-gradient(360deg, #7CBFDE 0%, #FFFFFF 100%)",
      }}
    >
      <div className='lg:bg-startDesktop flex h-[258px] w-full flex-col items-center justify-center bg-start bg-center bg-no-repeat lg:h-[470px]'>
        <h4 className='mb-1 bg-start-text bg-clip-text bg-center text-center text-[32px] font-bold leading-10 text-[#352E39] lg:text-[60px] lg:leading-[75px] lg:text-[#F3A97442]'>
          Let’s Start Today!
        </h4>
        <div className='flex w-full justify-center'>
          <div className='h-[105px] w-[329px] text-center lg:h-[178px] lg:w-[731px]'>
            <span className='text-[11px] font-light leading-[17.50px] text-[#282828] lg:text-[21px] lg:leading-8'>
              We have a floor plan for you! We deliver{" "}
            </span>
            <span className='text-[11px] font-medium leading-[17.50px] text-[#282828] lg:text-[21px] lg:leading-8'>
              world-class
            </span>
            <span className='text-[11px] font-light leading-[17.50px] text-[#282828] lg:text-[21px] lg:leading-8'>
              {" "}
              log and Modular prefab home on time, on budget, and in balance
              with nature’s perfection.
              <br />
              Our best design team also assist you in creating that customized
              home you’ve been dreaming of.
              <br />
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='inline-flex h-9 w-[145.65px] items-center justify-center gap-[6.07px] rounded-md bg-[#d75337] px-[17px] py-[9px] lg:h-[84px] lg:w-[315px]'>
            <div className='text-sm font-medium text-white lg:text-[28px]'>
              Contact Us Now
            </div>
          </button>
        </div>
      </div>
      <div className='absolute bottom-0 right-0 block h-[145px] w-[78px] lg:hidden'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            className='left-0 top-0 h-full w-full object-cover'
            src={"/images/start1.svg"}
            alt=''
            objectFit='cover'
            fill
          />
        </div>
      </div>
      <div className='absolute bottom-[18px] left-0 block h-[283px] w-[127px] lg:hidden'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            className='left-0 top-0 h-full w-full object-cover'
            src={"/images/start2.svg"}
            alt=''
            objectFit='cover'
            fill
          />
        </div>
      </div>
      <div className='absolute bottom-[24px] right-0 block h-[283px] w-[182px] lg:hidden'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            className='left-0 top-0 h-full w-full object-cover'
            src={"/images/start3.svg"}
            alt=''
            objectFit='cover'
            fill
          />
        </div>
      </div>

      <div className='absolute -bottom-[10px] left-0 hidden h-[372px] w-[482px] lg:block'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            src={"/images/start1-desktop.svg"}
            alt=''
            objectFit='contain'
            fill
          />
        </div>
      </div>
      <div className='absolute -bottom-[10px] right-0 hidden h-[455px] w-[564px] lg:block'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            src={"/images/start2-desktop.svg"}
            alt=''
            objectFit='contain'
            fill
          />
        </div>
      </div>
      <div className='absolute -top-[150px] left-0 hidden h-[467px] w-[718px] lg:block'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            src={"/images/start3-desktop.svg"}
            alt=''
            objectFit='contain'
            fill
          />
        </div>
      </div>
      <div className='absolute -top-[270px] right-0 hidden h-[449px] w-[858px] lg:block'>
        <div className='relative h-full w-full pt-[100%]'>
          <Image
            src={"/images/start4-desktop.svg"}
            alt=''
            objectFit='contain'
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default LetStart;
