"use client";

import Image from "next/image";
import WoodenCottages from "./WoodenCottages";
import WoodenHouse from "./WoodenHouse";
import WoodenVillas from "./WoodenVillas";

function Series() {
  return (
    <section className='w-full px-[25px] pb-[44px] pt-[35px]'>
      <div className='inline-flex w-full flex-col items-center justify-start gap-1'>
        <div className='Frame31 inline-flex w-full items-center justify-center'>
          <Image
            src={"/images/series.svg"}
            alt='Series'
            width={156}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/series-desktop.svg"}
            alt='Series'
            width={586}
            height={1}
            className='hidden lg:block'
          />
          <div className='text-center text-[22px] font-semibold leading-[30.84px] text-[#352d39] lg:text-[32px] lg:leading-[46px]'>
            Series
          </div>
          <Image
            src={"/images/series.svg"}
            alt='Series'
            width={156}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/series-desktop.svg"}
            alt='Series'
            width={586}
            height={1}
            className='hidden lg:block'
          />
        </div>
        <div className='h-[53px] w-[334px] text-center text-[11px] font-light leading-[17.93px] text-[#636463] lg:w-[624px] lg:text-[18px] lg:leading-6'>
          A series of wooden houses designed with direct-angle views, allowing
          you to see the construction details of your home from every
          perspective.
          <br />
        </div>
      </div>
      <WoodenCottages />
      <WoodenHouse />
      <WoodenVillas />
    </section>
  );
}

export default Series;
