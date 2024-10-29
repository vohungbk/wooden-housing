"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { ModalView3D } from "./ModalView3D";

interface View3DProps {
  gallery3d: string[];
  link3D: string;
}

export const View3D: FC<View3DProps> = ({ gallery3d = [], link3D }) => {
  const [openModal, setOpenModal] = useState(false);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const isLargeScreen = window.innerWidth >= 1280;

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
    <section className='bg-[#f6f3f6] xl:pb-[63px]'>
      <div className='flex-center w-full bg-[#f6f3f6] pb-[26px]'>
        <div className='w-full max-w-[1280px]'>
          <div className='mb-[18px] mt-[13px] flex justify-between px-[27px] xl:mb-[30px] xl:mt-[59px]'>
            <div className='text-[22px] font-semibold leading-[41px] text-[#352e39]'>
              View in 3D
            </div>
            <div className='text-lg font-normal leading-[41px] text-[#d75337] xl:hidden'>
              See All
            </div>
          </div>
          <div className='mb-[29px] px-[26px]'>
            <div className='relative flex h-[222px] w-full items-center justify-center rounded-[20px] bg-white py-[33px] xl:h-[606px] xl:py-0'>
              <div className='relative h-[205px] w-full overflow-hidden rounded-[20px] xl:h-full'>
                <Image
                  src={gallery3d?.[0]}
                  alt='Gallery 3D'
                  fill
                  className='rounded-[20px]'
                />
              </div>
              <div
                className='absolute bottom-4 left-4 cursor-pointer xl:bottom-[41px] xl:left-[46px]'
                onClick={() => setOpenModal(true)}
              >
                <Image
                  src={"/icons/3d-black.svg"}
                  alt=''
                  width={24}
                  height={24}
                  className='lg:!h-[56px] lg:!w-[56px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full xl:pb-10'>
        <Swiper
          className='view-3d-swipper mt-[5px] !h-[168px] xl:!h-[360px]'
          slidesPerView={isLargeScreen ? 3 : 2}
          spaceBetween={20}
          pagination={{
            el: isLargeScreen
              ? ".view-3d-swiper-pagination"
              : ".swiper-custom-pagination",
            type: isLargeScreen ? "bullets" : "progressbar",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
          modules={[Pagination, Navigation]}
          onSwiper={setSwiper}
          initialSlide={1}
          wrapperClass='xl:!h-[360px]'
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
        >
          {gallery3d.map((item, index) => (
            <SwiperSlide key={index.toString()}>
              <div className='relative h-full w-full overflow-hidden rounded-lg bg-white xl:p-0'>
                <Image
                  src={item}
                  className='rounded-md'
                  alt=''
                  width={212}
                  height={138}
                />
                <div
                  className='absolute bottom-0 left-0 flex h-[75px] w-full items-end justify-end rounded-lg px-3 pb-[11px]'
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.46) 100%)",
                  }}
                >
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
        <div className='flex-center relative hidden w-full xl:mt-[43px] xl:flex'>
          <div className='hidden h-[58px] w-full max-w-[1280px] items-center justify-between lg:flex'>
            <div
              className='swiper-button !relative !inset-0 -left-[30px] z-10 !h-[58px] !w-[58px] !bg-[#4B325A]'
              ref={prevRef}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                color='#ffffff'
                fontSize={20}
              />
            </div>
            <div className='view-3d-swiper-pagination block h-10' />
            <div
              className='swiper-button !relative !inset-0 -left-[30px] z-10 !h-[58px] !w-[58px] !bg-[#4B325A]'
              ref={nextRef}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                color='#ffffff'
                fontSize={20}
              />
            </div>
          </div>
        </div>
        <div className='swiper-custom-pagination !left-[45%] block rounded-[15px] xl:hidden' />
      </div>
      {!!openModal && (
        <ModalView3D
          open={openModal}
          onCloseModal={() => setOpenModal(false)}
          link3D={link3D}
        />
      )}
    </section>
  );
};
