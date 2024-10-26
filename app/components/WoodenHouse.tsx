import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

function WoodenHouse() {
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
    <div className='mt-[34px] flex w-full justify-center'>
      <div className='inline-flex w-full max-w-[1272px] flex-col items-start justify-start lg:mt-10 lg:justify-center'>
        <div className='flex items-center gap-1.5'>
          <div className='text-center font-libreFranklin text-[15px] font-black leading-normal text-[#352d39] lg:text-2xl'>
            WOODEN HOUSES
          </div>
          <div className='text-center font-libreFranklin text-xs font-extrabold leading-[13.02px] text-[#d75337] lg:text-[18px]'>
            SERIES
          </div>
        </div>
        <div className='flex h-[169px] w-full flex-col items-start justify-start gap-[5px] lg:h-auto'>
          <div className='relative h-[169px] w-full lg:h-auto'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-[10.72px] font-normal leading-tight text-[#352e39] lg:text-base'>
                1 Bedroom, Hall and Kitchen (BHK)
              </div>
              <div className='text-center text-xs font-normal leading-[17px] text-[#d75337] lg:text-[19px]'>
                See All
              </div>
            </div>
          </div>
          <div className='relative h-[142px] w-full lg:h-auto'>
            <div
              className='swiper-button -left-[30px] z-10 !hidden lg:!flex'
              ref={prevRef}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                color='#363636'
                fontSize={16}
              />
            </div>
            <Swiper
              modules={[Navigation]}
              className='mySwiper mt-[5px] h-[142px] lg:!h-[231px]'
              slidesPerView={2}
              spaceBetween={20}
              wrapperClass='h-[142px] lg:!h-[231px]'
              onSwiper={setSwiper}
              navigation={{
                prevEl: prevRef?.current,
                nextEl: nextRef?.current,
              }}
            >
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide1.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide2.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide1.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide2.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide5.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
              <SwiperSlide className='h-[142px] lg:h-[231px] lg:!w-[302px]'>
                <Image
                  src={"/images/slide6.svg"}
                  className='rounded-md lg:!w-[302px]'
                  alt=''
                  width={185}
                  height={142}
                />
              </SwiperSlide>
            </Swiper>
            <div
              className='swiper-button -right-[30px] z-10 !hidden lg:!flex'
              ref={nextRef}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                color='#363636'
                fontSize={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WoodenHouse;
