import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <>
      <section className='relative mx-auto w-full bg-banner bg-cover bg-no-repeat pt-[34px] text-center lg:flex lg:h-[440px] lg:items-center lg:pt-0 xl:h-[480px] 2xl:mb-5 2xl:h-[588px]'>
        <div className='flex flex-col justify-center lg:h-full lg:items-start lg:justify-center lg:pl-[5%] 2xl:pl-[200px]'>
          <div className='flex justify-center lg:mb-[9px] lg:justify-start'>
            <div className='h-[113px] w-full max-w-[330px] text-center lg:h-auto lg:w-[630px] lg:max-w-[630px] lg:text-left'>
              <span className='text-3xl font-semibold leading-9 text-[#352e39] lg:text-[42px] lg:leading-[50px]'>
                Our Crafted Wooden house is the future of{" "}
              </span>
              <span className='text-3xl font-semibold leading-9 text-[#d75337] lg:text-[42px] lg:leading-[50px]'>
                Modern Design
              </span>
              <span className='text-3xl font-semibold leading-9 text-[#352e39]'>
                <br />
              </span>
            </div>
          </div>
          <div className='flex justify-center lg:block'>
            <div className='h-[79px] w-[320px] text-center lg:h-[58px] lg:w-[597px] lg:text-left'>
              <span className='text-base font-medium leading-relaxed text-[#352e39] lg:text-[18px]'>
                WoodenHousing
              </span>
              <span className='text-base font-light leading-relaxed text-[#352e39] lg:text-[18px]'>
                {" "}
                made 50+ hassle-free building process that delivers a beautiful,
                sustainable home.
                <br />
              </span>
            </div>
          </div>
          <div className='mb-2 mt-8 hidden text-left lg:block'>
            <span className='text-[18px] font-normal leading-[29px] text-[#3B353E]'>
              Book a{" "}
            </span>
            <span className='text-[18px] font-medium leading-[29px] text-[#3B353E]'>
              free
            </span>
            <span className='text-[18px] font-normal leading-[29px] text-[#3B353E]'>
              {" "}
              design consultation now!
            </span>
          </div>
          <div className='mt-[18px] inline-flex items-center justify-center gap-[11.47px] lg:mt-0 lg:justify-start lg:gap-[15px]'>
            <button className='flex h-[39px] w-[161px] items-center justify-center gap-[7px] rounded-md bg-gradient-to-r from-[#d75337] to-[#e9664a] px-[15px] py-[10.71px] shadow lg:h-[51px] lg:w-auto lg:px-5'>
              <div className='text-sm font-medium text-white'>
                Explore Designs
              </div>
              <Image
                src={"/icons/explore-right.svg"}
                alt='Explore'
                width={13}
                height={9}
                className='shrink-0'
              />
            </button>
            <button className='flex items-center justify-center gap-[7.65px] rounded-md border-[1.53px] border-[#352E3947] px-[15.29px] py-[10.71px] lg:h-[51px] lg:px-5'>
              <div className='text-sm font-medium text-[#352e39]'>Book Now</div>
            </button>
          </div>
        </div>
        <div className='absolute -bottom-[25px] -left-[1px] z-10 h-[50px] w-full origin-bottom rotate-2 bg-white lg:left-0 2xl:-bottom-[45px]'></div>
        <Image
          src={"/images/banner-image.svg"}
          alt='Banner'
          width={521}
          height={379}
          className='block xl:hidden'
          objectFit='cover'
        />
        <Image
          className='!left-auto hidden lg:!h-[480px] lg:!w-[900px] xl:block 2xl:!h-[586px] 2xl:!w-[1100px]'
          src={"/images/banner-desktop.svg"}
          alt='Banner'
          objectFit='cover'
          fill
        />
      </section>
    </>
  );
}

export default Banner;
