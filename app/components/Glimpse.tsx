"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

const imageArray = [
  "/images/glimpse1.svg",
  "/images/glimpse2.svg",
  "/images/glimpse3.svg",
  "/images/glimpse2.svg",
  "/images/glimpse1.svg",
];

function Glimpse() {
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
    <section className='flex justify-center bg-[#F6F3F6] pb-[51px] lg:pb-[60px] lg:pt-[41px]'>
      <div className='w-full lg:w-[1000px] xl:w-[1200px] 2xl:w-[1337px]'>
        <div className='px-[25px] pt-[25px] lg:flex lg:items-center lg:justify-between lg:p-0'>
          <div>
            <div className='mb-[3px] w-full text-xl font-semibold leading-7 text-[#352d39] lg:text-[28px] lg:leading-[47px]'>
              Get a glimpse of our personalized 3D models
            </div>
            <div className='h-[35px] w-full text-[11px] font-light leading-[17.50px] text-[#636363] lg:text-[18px]'>
              Our personalized wooden houses 3D model gives you a clear,
              realistic view of your unique home design.
              <br />
            </div>
          </div>
          <button className='hidden h-[50px] w-[210px] rounded-[10px] bg-[#D75337] text-white lg:block'>
            Get a free quote
          </button>
        </div>
        <div className='relative mt-[23px] pl-[25px] lg:mt-10 lg:p-0'>
          <div
            className='swiper-button -left-[30px] z-10 !hidden lg:!flex'
            ref={prevRef}
          >
            <Image
              src={"/icons/swiper-left.svg"}
              alt='swiper left'
              width={8}
              height={17}
              className=''
            />
          </div>
          <Swiper
            className='glimpseSwiper mt-[5px] !h-[168px] lg:!h-[305px]'
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              el: ".swiper-custom-pagination",
              type: "progressbar",
            }}
            modules={[Pagination, Navigation]}
            onSwiper={setSwiper}
          >
            {imageArray.map((item, index) => (
              <SwiperSlide
                key={index.toString()}
                className='!h-[168px] !w-[227px] rounded-lg lg:!h-[305px] lg:!w-[413px]'
              >
                <div className='relative h-full w-full overflow-hidden rounded-lg bg-white px-[7px] py-[15px]'>
                  <Image
                    src={item}
                    className='rounded-md'
                    alt=''
                    width={212}
                    height={138}
                  />
                  <div
                    className='absolute bottom-0 left-0 flex h-[75px] w-[227px] items-end justify-between rounded-lg px-3 pb-[11px] lg:w-[413px]'
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.46) 100%)",
                    }}
                  >
                    <div>
                      <Image
                        src={"/icons/3d.svg"}
                        alt=''
                        width={19}
                        height={19}
                        className='!lg:w-[35px] lg:!h-[35px]'
                      />
                    </div>
                    <div>
                      <Image
                        src={"/icons/full.svg"}
                        alt=''
                        width={15}
                        height={13}
                        className='lg:!h-[25px] lg:!w-[27px]'
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className='swiper-button -right-[30px] z-10 !hidden lg:!flex'
            ref={nextRef}
          >
            <Image
              src={"/icons/swiper-right.svg"}
              alt='swiper left'
              width={8}
              height={17}
              className=''
            />
          </div>
          <div className='swiper-custom-pagination !left-1/2 block rounded-[15px] lg:hidden' />
        </div>
      </div>
    </section>
  );
}

export default Glimpse;
