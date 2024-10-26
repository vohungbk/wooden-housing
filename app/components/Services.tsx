"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { NavigationOptions } from "swiper/types";

const ServiceData = [
  {
    id: 1,
    title: "Wooden Cottages",
    description:
      "Cozy, handcrafted wooden cottages designed for comfort and natural charm.",
    imageUrl: "/images/cattegoes.svg",
  },
  {
    id: 2,
    title: "Wooden Villas",
    description:
      "Luxurious wooden villas offering elegance and sustainability in every detail.",
    imageUrl: "/images/cattegoes.svg",
  },
  {
    id: 3,
    title: "Wooden Cottages",
    description:
      "Elegant wooden pergolas, perfect for enhancing your outdoor living spaces.",
    imageUrl: "/images/cattegoes.svg",
  },
  {
    id: 4,
    title: "Wooden Cafe",
    description:
      "Beautifully crafted wooden gazebos, ideal for relaxation and outdoor gatherings.",
    imageUrl: "/images/cattegoes.svg",
  },
];

function Services() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiper && swiper.params.navigation && swiper.navigation) {
      const navigation = swiper.params.navigation as NavigationOptions;

      if (navigation && "prevEl" in navigation && "nextEl" in navigation) {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, [swiper]);

  return (
    <section className='bg-[#F2F2F2] px-[25px] pb-[34px] pt-[27px] lg:pb-10 lg:pt-[41px]'>
      <div className='inline-flex w-full flex-col items-center justify-start gap-1'>
        <div className='inline-flex w-[380px] items-center justify-center lg:mb-1.5'>
          <Image
            src={"/images/service.svg"}
            alt='Service'
            width={143}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/service-desktop.svg"}
            alt='Service'
            width={567}
            height={1}
            className='hidden lg:block'
          />
          <div className='text-center text-[22px] font-semibold leading-[30.84px] text-[#352d39] lg:text-[32px] lg:leading-[46px]'>
            Services
          </div>
          <Image
            src={"/images/service.svg"}
            alt='Service'
            width={143}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/service-desktop.svg"}
            alt='Service'
            width={567}
            height={1}
            className='hidden lg:block'
          />
        </div>
        <div className='mb-1.5 flex justify-center'>
          <div className='h-5 w-[299px] text-center lg:flex lg:h-auto lg:w-auto'>
            <Image
              src={"/images/blockquote.svg"}
              alt=''
              width={14}
              height={10}
              className='mb-6 mr-0.5 hidden lg:block'
            />
            <span className='font-orengano text-base font-normal leading-[18.03px] text-[#454545] lg:text-2xl'>
              What we build today makes all the difference{" "}
            </span>
            <span className='font-orengano text-base font-normal leading-[18.03px] text-[#d75337] lg:text-2xl'>
              tomorrow.
            </span>
            <Image
              src={"/images/blockquote.svg"}
              alt=''
              width={14}
              height={10}
              className='mb-6 ml-0.5 hidden lg:block'
            />
            <span className='font-orengano text-base font-normal leading-[18.03px] text-[#454545] lg:text-2xl'>
              <br />
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[354px] text-center lg:w-[820px]'>
            <span className='text-[11px] font-light leading-[17.50px] text-[#626262] lg:text-[18px] lg:leading-6'>
              Our wide selection of{" "}
            </span>
            <span className='text-[11px] font-light leading-[17.50px] text-[#515151] lg:text-[18px] lg:font-medium lg:leading-6'>
              wooden based
            </span>
            <span className='text-[11px] font-light leading-[17.50px] text-[#626262] lg:text-[18px] lg:leading-6'>
              {" "}
              home, resorts, Cafe, Gazibo, and Villas have both traditional and
              modern architectural solutions with high-quality materials. Our
              services include timely project completion and comprehensive
              post-construction support.
              <br />
            </span>
          </div>
        </div>
      </div>
      <div className='mt-[28px] grid w-full grid-cols-2 flex-wrap justify-between gap-[14px] lg:hidden'>
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className='inline-flex h-[287.77px] w-full flex-col items-start justify-start overflow-hidden rounded-[9.84px] shadow'
          >
            <Image
              alt=''
              className='h-[137.77px] self-stretch'
              src='/images/cattegoes.svg'
              width={183}
              height={137}
            />
            <div className='flex h-[150px] flex-col items-center justify-center gap-[15px] self-stretch bg-white px-2.5 py-[15px]'>
              <div className='flex h-[74px] flex-col items-center justify-start self-stretch'>
                <div className='text-sm font-medium leading-snug text-[#222222]'>
                  {item.title}
                </div>
                <div className='self-stretch text-center text-[11px] font-light leading-[17.50px] text-[#6f6f6f]'>
                  {item.description}
                  <br />
                </div>
              </div>
              <div className='inline-flex h-[28.99px] w-[82.63px] items-center justify-between rounded-[26.09px] border border-[#c7c7c7] py-[2.90px] pl-[8.70px] pr-[3.62px]'>
                <div className='w-[41.32px] text-center text-[13.05px] font-normal leading-[18.12px] text-[#222222]'>
                  View
                </div>
                <div className='flex h-[19.57px] w-[19.57px] items-center justify-center gap-[4.89px] rounded-[19.08px] bg-[#d75337]'>
                  <Image
                    alt=''
                    src={"/icons/arrow-right-white.svg"}
                    width={3}
                    height={5}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-[47px] hidden w-full justify-center lg:flex'>
        <div className='relative w-[70%]'>
          <div className='swiper-button -left-[30px] z-10' ref={prevRef}>
            <Image
              src={"/icons/swiper-left.svg"}
              alt='swiper left'
              width={8}
              height={17}
              className=''
            />
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            className='mySwiper !h-[460px]'
            slidesPerView={3}
            pagination={true}
            spaceBetween={40}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            onSwiper={setSwiper}
          >
            {ServiceData.map((item) => (
              <SwiperSlide
                key={item.id}
                className='!h-[422px] !w-[400px] !items-start rounded-[15px]'
              >
                <div className='w-[400px] rounded-[15px]'>
                  <div
                    className='h-[210px] w-full overflow-hidden rounded-[15px] rounded-b-none bg-cover bg-no-repeat'
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className='w-full bg-white p-5'>
                    <h4 className='mb-[5px] text-center text-[22px] font-medium text-[#222222]'>
                      {item.title}
                    </h4>
                    <div className='mb-[25px] flex w-full justify-center'>
                      <h4 className='w-[318px] text-base font-light text-[#707070]'>
                        {item.description}
                      </h4>
                    </div>
                    <div className='inline-flex h-[44px] w-[125px] items-center justify-between rounded-[39px] border border-[#c8c8c8] py-[8px] pl-[13px] pr-[3.62px]'>
                      <div className='w-[62px] text-center text-[19px] font-normal leading-[18.12px] text-[#222222]'>
                        View
                      </div>
                      <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[28px] bg-[#d75337]'>
                        <div className='h-[7px] w-[3px]'>
                          <Image
                            alt=''
                            src={"/icons/arrow-right-white.svg"}
                            width={3}
                            height={7}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper-button -right-[30px] z-10' ref={nextRef}>
            <Image
              src={"/icons/swiper-right.svg"}
              alt='swiper left'
              width={8}
              height={17}
              className=''
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
