"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ItemProps {
  data: {
    imageUrl: string;
    title: string;
    description: string;
  };
}

const data = [
  {
    id: 1,
    title: "Affordable Cost",
    description: "Quality design within your budget",
    imageUrl: "/images/warranty.svg",
  },
  {
    id: 2,
    title: "15 Years Warranty",
    description: "Long-term protection for your investment",
    imageUrl: "/images/warranty.svg",
  },
  {
    id: 3,
    title: "3D Models",
    description: "Realistic preview of your design",
    imageUrl: "/images/3d-model.svg",
  },
  {
    id: 4,
    title: "No Hidden Charges",
    description: "Transparent pricing, no surprises.",
    imageUrl: "/images/no-hidden-charge.svg",
  },
  {
    id: 5,
    title: "Durable Materials",
    description: "Built to last with high-quality materials",
    imageUrl: "/images/durable.svg",
  },
  {
    id: 6,
    title: "Personalized Designs",
    description: "Customize wooden design built just for you",
    imageUrl: "/images/personalised-designs.svg",
  },
  {
    id: 7,
    title: "Technical Assistance",
    description: "Expert support from start to finish.",
    imageUrl: "/images/technical-assistance.svg",
  },
  {
    id: 8,
    title: "Timely Delivery",
    description: "We 100% deliver our service on time!",
    imageUrl: "/images/time-delivery.svg",
  },
];

function WhyChoose() {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.insertAdjacentElement("afterend", clone);
    }
  }, []);

  function Items({ data }: ItemProps) {
    return (
      <li className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start overflow-hidden rounded-[7.02px] border border-[#e0e0e0] bg-white'>
        <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
          <div className='inline-flex h-[60px] w-[60px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className='flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
          <div className='text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
            {data.title}
          </div>
          <div className='w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
            {data.description}
          </div>
        </div>
      </li>
    );
  }

  return (
    <section className='bg-white pb-[28px] pt-[43px] lg:pb-[56px] lg:pt-[21px]'>
      <div className='mb-[28px] flex justify-center px-[25px] lg:mb-10'>
        <div className='inline-flex w-full flex-col items-center justify-start gap-[3px]'>
          <div className='inline-flex w-full items-center justify-center'>
            <Image
              src={"/images/why-choose-desktop.svg"}
              alt=''
              width={390}
              height={1}
              className='hidden lg:block'
            />
            <div className='text-center'>
              <span className='text-[22px] font-semibold leading-[30.84px] text-[#352d39] lg:text-[32px] lg:leading-[46px]'>
                Why Choose{" "}
              </span>
              <span className='text-[22px] font-semibold leading-[30.84px] text-[#d75337] lg:text-[32px] lg:leading-[46px]'>
                WoodenHousing?
              </span>
            </div>
            <Image
              src={"/images/why-choose-desktop.svg"}
              alt=''
              width={390}
              height={1}
              className='hidden lg:block'
            />
          </div>
          <div className='w-[282.89px] text-center text-[11px] font-light leading-[17.50px] text-[#636363] lg:mt-1.5 lg:w-[426px] lg:text-[18px]'>
            We build smart, futuristic, and effortlessly stylish wooden homes
            and resorts.
          </div>
        </div>
      </div>
      <div className='mb-5 block lg:hidden'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden'>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-right flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2.5'
          >
            {data
              ?.slice(0, 4)
              ?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-right flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2.5'
          >
            {data
              ?.slice(0, 4)
              ?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden'>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-left flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2.5'
          >
            {data
              ?.slice(-4)
              ?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-left flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2.5'
          >
            {data
              ?.slice(-4)
              ?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
        </div>
      </div>
      <div className='hidden text-center lg:block'>
        <div className='inline-flex w-full flex-nowrap overflow-hidden'>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-right flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-5'
          >
            {data?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
          <ul
            ref={logosRef}
            className='animate-infinite-scroll-right flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-5'
          >
            {data?.map((item) => <Items data={item} key={item.id} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
