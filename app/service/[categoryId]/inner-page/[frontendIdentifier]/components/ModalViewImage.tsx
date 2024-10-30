/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Modal from "react-responsive-modal";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { Swiper, SwiperSlide } from "swiper/react";

interface ModalViewImageProps {
  open: boolean;
  onCloseModal: () => void;
  gallery: string[];
}
export const ModalViewImage: FC<ModalViewImageProps> = ({
  open,
  onCloseModal,
  gallery,
}) => {
  const ref = React.useRef<any | null>(null);

  const data = gallery?.map((item) => ({ cover: item, title: "" }));

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className='relative hidden w-full xl:block'>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 1440) currentVisibleSlide = 3;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                useGrabCursor
              />
            );
          }}
        />
        <>
          <div
            style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
            className='flex-center !h-[58px] !w-[58px] cursor-pointer rounded-full !bg-[#4B325A]'
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} color='#ffffff' fontSize={20} />
          </div>
          <div
            style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
            className='flex-center !h-[58px] !w-[58px] cursor-pointer rounded-full !bg-[#4B325A]'
            onClick={() => {
              ref.current?.goNext(6);
            }}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              color='#ffffff'
              fontSize={20}
            />
          </div>
        </>
      </div>
      <div className='block lg:hidden'>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className='!h-[400px]'
        >
          {gallery?.map((item, index) => (
            <SwiperSlide key={index.toString()} className='rounded-box'>
              <img src={item} className='h-[400px] w-[300px] rounded-box' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
};

interface CardProps {
  data: Array<{ cover: string }>; // Adjust this according to your data structure
  dataIndex: number;
}

export const Card = React.memo(function Card({ data, dataIndex }: CardProps) {
  const cover = data[dataIndex]?.cover;

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className='my-slide-component'
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
        alt={`Cover for item ${dataIndex}`}
      />
    </div>
  );
});
