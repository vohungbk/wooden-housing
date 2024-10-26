import Image from "next/image";
import React from "react";
import BookingFree from "./BookingFree";

const UniqueData = [
  {
    id: 1,
    iconUrl: "/images/quality-wood.svg",
    title: "Quality of wood",
    description:
      "We use superior wood known for its natural insect protection, low moisture and natural sustainability.",
  },
  {
    id: 2,
    iconUrl: "/images/cutomizes.svg",
    title: "Customization",
    description:
      "We offer personalized design options with 3D view to tailor every detail of your wooden house to your preferences, ensuring a unique and customized living experience.",
  },
  {
    id: 3,
    iconUrl: "/images/deadline.svg",
    title: "Deadline Commitment",
    description:
      "We are dedicated to meeting our deadlines, ensuring your wooden house is completed on time without compromising quality.",
  },
];

function Unique() {
  return (
    <section className='relative z-10 mb-[27px] shrink-0 overflow-hidden pt-[31px] lg:mb-[72px] lg:pt-[53px]'>
      <div className='mb-[42px] inline-flex w-full flex-col items-center justify-center gap-1 lg:mb-10 lg:gap-1.5'>
        <div className='inline-flex w-full items-center justify-center lg:w-full'>
          <Image
            src={"/images/unique.svg"}
            alt='Unique'
            width={58}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/unique-desktop.svg"}
            alt='Unique'
            width={444}
            height={1}
            className='hidden lg:block'
          />
          <div className='text-center'>
            <span className='text-[22px] font-semibold leading-[30.84px] text-[#352d39] lg:text-[32px] lg:leading-[47px]'>
              What makes us{" "}
            </span>
            <span className='text-[22px] font-semibold leading-[30.84px] text-[#d75337] lg:text-[32px] lg:leading-[47px]'>
              unique?{" "}
            </span>
          </div>
          <Image
            src={"/images/unique.svg"}
            alt='Unique'
            width={58}
            height={1}
            className='block lg:hidden'
          />
          <Image
            src={"/images/unique-desktop.svg"}
            alt='Unique'
            width={444}
            height={1}
            className='hidden lg:block'
          />
        </div>
        <div className='w-[342px] text-center text-[11px] font-light leading-[17.50px] text-[#636363] lg:w-[664px] lg:text-[18px] lg:leading-6'>
          Wood cladding is a material applied to the outside of a building to
          protect the exterior from damage. It acts as a shield, keeping your
          building safe from the elements and extending its lifespan.
          <br />
        </div>
      </div>
      <div className='flex flex-col justify-between lg:flex-row lg:px-[120px]'>
        <div className='mb-[27px] flex w-full flex-col items-center justify-center gap-5 lg:mb-0 lg:w-auto lg:gap-10'>
          {UniqueData.map((item) => (
            <div
              key={item.id}
              className='inline-flex items-center justify-center gap-[22px] self-stretch'
            >
              <div className='relative h-[69.62px] w-[72px] lg:h-[104px] lg:w-[108px]'>
                <div className='absolute left-[25.16px] top-0 h-[38.43px] w-[61.97px] origin-top-left rotate-[40.90deg] rounded-lg bg-[#fbf3f0] lg:h-[57px] lg:w-[93px]' />
                <div className='absolute left-[17.04px] top-[13.51px] h-[43.19px] w-[42.10px] lg:top-[27px] lg:h-[58px] lg:w-[63px]'>
                  <Image
                    src={item.iconUrl}
                    alt=''
                    width={42}
                    height={43}
                    className='lg:h-[58px] lg:w-[63px]'
                  />
                </div>
              </div>
              <div className='inline-flex flex-col items-start justify-start gap-[5px]'>
                <div className='w-[198px] text-[15px] font-medium leading-[15.13px] text-[#181818] lg:mb-1 lg:w-full lg:text-[22px]'>
                  {item.title}
                </div>
                <div className='w-64 text-[11px] font-light leading-[17.50px] text-[#3f3f3f] lg:w-[556px] lg:text-base'>
                  {item.description}
                  <br />
                </div>
              </div>
            </div>
          ))}
        </div>
        <BookingFree />
      </div>
    </section>
  );
}

export default Unique;
