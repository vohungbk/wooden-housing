"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";
import { db } from "../configs/firebase";
import { ServiceType } from "../types/services";
import { LIST_ROUTER } from "../shared/constant";

function Services() {
  const [serviceList, setServiceList] = useState<ServiceType[]>();
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      const postCollectionRef = collection(db, "services");
      const postCollectionSnapshot = await getDocs(postCollectionRef);

      const list = postCollectionSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as ServiceType;
      });

      setServiceList(list);
    })();
  }, []);

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
        {serviceList?.map((item, index) => (
          <div
            key={item.id}
            className='inline-flex w-full flex-col items-start justify-start overflow-hidden rounded-[9.84px] shadow'
          >
            <div className='relative h-full w-full pt-[100%]'>
              <Image
                src={item.img}
                alt={item.title}
                layout='fill'
                objectFit='cover'
                priority={index < 2}
                loading={index >= 2 ? "lazy" : "eager"}
                quality={75}
              />
            </div>
            <div className='flex h-[150px] flex-col items-center justify-center gap-[15px] self-stretch bg-white px-2.5 py-[15px]'>
              <div className='flex h-[74px] flex-col items-center justify-start self-stretch'>
                <h4 className='w-[132px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-snug text-[#222222]'>
                  {item.title}
                </h4>
                <p className='line-clamp-3 w-[135px] self-stretch overflow-hidden text-ellipsis text-center text-[11px] font-light leading-[17.50px] text-[#6f6f6f]'>
                  {item.description}
                  <br />
                </p>
              </div>
              <Link
                href={`${LIST_ROUTER.SERVICE}/${item.id}`}
                className='inline-flex h-[28.99px] w-[82.63px] items-center justify-between rounded-[26.09px] border border-[#c7c7c7] py-[2.90px] pl-[8.70px] pr-[3.62px]'
              >
                <div className='w-[41.32px] text-center text-[13.05px] font-normal leading-[18.12px] text-[#222222]'>
                  View
                </div>
                <div className='flex h-[19.57px] w-[19.57px] items-center justify-center gap-[4.89px] rounded-[19.08px] bg-[#d75337]'>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    color='#ffffff'
                    fontSize={7}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-[47px] hidden w-full justify-center lg:flex'>
        <div className='relative w-[70%]'>
          <div className='swiper-button -left-[30px] z-10' ref={prevRef}>
            <FontAwesomeIcon icon={faAngleLeft} color='#363636' fontSize={16} />
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
            {serviceList?.map((item) => (
              <SwiperSlide
                key={item.id}
                className='!h-[422px] !w-[400px] !items-start rounded-[15px]'
              >
                <div className='w-[400px] rounded-[15px]'>
                  <div
                    className='h-[210px] w-full overflow-hidden rounded-[15px] rounded-b-none bg-cover bg-no-repeat'
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                  <div className='w-full bg-white p-5'>
                    <h4 className='mb-[5px] text-center text-[22px] font-medium leading-5 text-[#222222]'>
                      {item.title}
                    </h4>
                    <div className='mb-[25px] flex w-full justify-center'>
                      <h4 className='w-[318px] text-base font-light text-[#707070]'>
                        {item.description}
                      </h4>
                    </div>
                    <Link
                      href={`${LIST_ROUTER.SERVICE}/${item.id}`}
                      className='inline-flex h-[44px] w-[125px] items-center justify-between rounded-[39px] border border-[#c8c8c8] py-[8px] pl-[13px] pr-[3.62px] hover:opacity-90'
                    >
                      <div className='w-[62px] text-center text-[19px] font-normal leading-[18.12px] text-[#222222]'>
                        View
                      </div>
                      <div className='flex h-[30px] w-[30px] items-center justify-center rounded-[28px] bg-[#d75337]'>
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          color='#ffffff'
                          fontSize={7}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='swiper-button -right-[30px] z-10' ref={nextRef}>
            <FontAwesomeIcon
              icon={faAngleRight}
              color='#363636'
              fontSize={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
