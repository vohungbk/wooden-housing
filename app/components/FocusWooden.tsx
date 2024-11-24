import Image from "next/image";
import React from "react";

function FocusWooden() {
  return (
    <section className='relative w-full bg-[#4A3456] px-[25px] py-[21px] lg:flex lg:justify-center lg:bg-[#F6F3F6] lg:py-[57px]'>
      <div className='block h-[206px] w-[193px] lg:hidden'>
        <div className='w-[193px] text-base font-semibold leading-snug text-white'>
          India-focused Wooden company tailoring solutions to meet client needs.
        </div>
        <div className='mt-[5px]'>
          <span className='text-[13px] font-light leading-[15.13px] text-white'>
            Built over{" "}
          </span>
          <span className='text-[13px] font-semibold leading-[15.13px] text-white'>
            50+
          </span>
          <span className='text-[13px] font-light leading-[15.13px] text-white'>
            {" "}
            homes
          </span>
        </div>
        <div className='mt-[5px] h-[47px] w-[164px] text-[11px] font-light leading-[15.13px] text-white/60'>
          Contact us today and take the first step to building your forever
          home.
          <br />
        </div>
        <button className='mt-[13px] inline-flex h-8 items-center justify-center gap-[5.67px] rounded bg-gradient-to-r from-[#e96043] to-[#d75337] px-[12.10px] py-2'>
          <div className='text-xs font-medium leading-[15.13px] text-white'>
            Contact Now
          </div>
          <Image
            src={"/icons/double-arrow-right.svg"}
            alt='arrow right'
            width={8}
            height={6}
          />
        </button>
      </div>
      <div className='absolute -right-6 top-0 block h-[248px] w-[306px] bg-3dViewHouseModel1 lg:hidden'></div>
      <div className='absolute -right-3 top-0 block h-[248px] w-[254px] bg-3dViewHouseModel2 lg:hidden'></div>
      <div className='relative hidden rounded-[20px] bg-[#4A3456] pb-[51px] pl-[57px] pt-[45px] lg:block lg:w-[1000px] xl:w-[1250px] 2xl:w-[1280px]'>
        <div className='inline-flex w-[623px] flex-col items-start justify-start gap-1'>
          <div className='self-stretch'>
            <span className='text-[32px] font-medium leading-10 text-white'>
              India-
            </span>
            <span className='text-[32px] font-medium leading-10 text-[#ff6949]'>
              focused
            </span>
            <span className='text-[32px] font-medium leading-10 text-white'>
              {" "}
              Wooden company tailoring solutions to meet client needs.
            </span>
          </div>
          <div className='self-stretch'>
            <span className='text-2xl font-light leading-10 text-white'>
              Built over{" "}
            </span>
            <span className='text-2xl font-medium leading-10 text-white'>
              50+
            </span>
            <span className='text-2xl font-light leading-10 text-white'>
              {" "}
              homes
            </span>
          </div>
          <div className='h-[54px] w-[433px] text-lg font-light leading-[27px] text-white/75'>
            Contact us today and take the first step to building your forever
            home.
            <br />
          </div>
          <div className='mt-[38px] inline-flex h-[50px] items-center justify-center gap-[15px] rounded-[10px] bg-gradient-to-r from-[#e96043] to-[#d75337] px-8 py-[5px]'>
            <button className='text-base font-bold uppercase leading-10 tracking-wide text-white'>
              Contact Now
            </button>
            <Image
              src={"/icons/double-arrow-right.svg"}
              alt='arrow right'
              width={15}
              height={11}
            />
          </div>
        </div>
        <div className='absolute -bottom-2 right-3 h-[432px] w-[760px] bg-3dViewHouseModel1Desktop'></div>
        <div className='absolute bottom-0 right-[18px] h-[360px] w-[794px] bg-3dViewHouseModel2Desktop'></div>
      </div>
    </section>
  );
}

export default FocusWooden;
