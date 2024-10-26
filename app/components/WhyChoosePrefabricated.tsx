import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Superior Quality:",
    description:
      "We use high-quality, dried materials, crafted in a controlled environment with advanced CNC machinery, ensuring top-notch surface quality.",
    icon: "/images/why-choose-1-desktop.svg",
  },
  {
    id: 2,
    title: "Precision and Compatibility:",
    description:
      "We ensures each house is precisely manufactured and all parts fit perfectly together.",
    icon: "/images/why-choose-2.svg",
  },
  {
    id: 3,
    title: "Quick and Accurate Construction:",
    description:
      "Fully automated CNC machines make the production process fast and highly accurate.",
    icon: "/images/why-choose-3.svg",
  },
  {
    id: 4,
    title: "Ready-to-Install Walls:",
    description:
      "The walls come fully prepared, requiring no further processing, just surface finishing by the client.",
    icon: "/images/why-choose-4.svg",
  },
  {
    id: 5,
    title: "Easy Assembly:",
    description:
      "All parts are numbered and packed in order, making on-site setup fast and cost-effective.",
    icon: "/images/why-choose-5.svg",
  },
  {
    id: 6,
    title: "Stable Structure:",
    description:
      "Glued laminated timber maintains its shape and doesn’t require long settling times, speeding up the finishing process.",
    icon: "/images/why-choose-6.svg",
  },
];

function WhyChoosePrefabricated() {
  return (
    <section className='px-[25px] pb-[52px] pt-[30px] lg:flex lg:justify-center lg:pb-[110px] lg:pt-[42px]'>
      <div className='w-full lg:w-[1000px] xl:w-[1250px] 2xl:w-[1280px]'>
        <div className='mb-[21px] inline-flex w-full flex-col items-center justify-start lg:mb-10'>
          <div className='inline-flex w-full items-center justify-center'>
            <Image
              src={"/images/unique.svg"}
              alt='Unique'
              width={55}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/why-choose-pre-desktop.svg"}
              alt='Why choose'
              width={279}
              height={1}
              className='hidden xl:block'
            />
            <div className='text-center text-xl font-semibold leading-[25px] text-[#352d39] lg:text-[28px]'>
              Why Choose Prefabricated Wooden Houses?
            </div>
            <Image
              src={"/images/unique.svg"}
              alt='Unique'
              width={55}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/why-choose-pre-desktop.svg"}
              alt='Why choose'
              width={279}
              height={1}
              className='hidden xl:block'
            />
          </div>
          <div className='text-center text-[11px] font-light leading-[27px] text-[#636463] lg:hidden'>
            Take a look at our work process below!
          </div>
        </div>
        <div className='inline-flex w-full flex-col items-start justify-center gap-[12.69px] lg:flex-row lg:flex-wrap'>
          {data?.map((item) => (
            <div
              key={item.id}
              className='inline-flex items-center justify-start gap-[12.69px] self-stretch rounded-[8.88px] border border-[#c8c8c8] px-[15px] py-3 lg:w-[500px] lg:px-[25px] lg:py-[25px] xl:w-[600px]'
            >
              <div className='flex h-[53px] w-[53px] items-center justify-center'>
                <Image
                  src={item.icon}
                  alt=''
                  width={36}
                  height={37}
                  className='lg:h-[69px] lg:!w-[67px]'
                />
              </div>
              <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-[2.89px]'>
                <div className='text-sm font-medium leading-[17.33px] text-[#181818] lg:mb-1 lg:text-xl'>
                  {item.title}
                </div>
                <div className='self-stretch text-[11px] font-light leading-none text-[#3F3F3F] lg:h-auto lg:text-base'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-5 hidden justify-center lg:flex'>
          <div className='inline-flex items-center justify-start gap-[12.69px] self-stretch rounded-[8.88px] border border-[#c8c8c8] px-[15px] py-3 lg:w-[500px] lg:px-[25px] lg:py-[25px] xl:w-[600px]'>
            <div className='flex h-[53px] w-[53px] items-center justify-center'>
              <Image
                src={"/images/why-choose-7.svg"}
                alt=''
                width={36}
                height={37}
                className='lg:h-[69px] lg:!w-[67px]'
              />
            </div>
            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-[2.89px]'>
              <div className='text-sm font-medium leading-[17.33px] text-[#181818] lg:mb-1 lg:text-xl'>
                Lightweight and Strong:
              </div>
              <div className='self-stretch text-[11px] font-light leading-none text-[#3F3F3F] lg:h-auto lg:text-base'>
                Wood offers an excellent balance between weight and strength,
                making it an ideal building material.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoosePrefabricated;
