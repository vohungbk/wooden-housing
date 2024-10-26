import Image from "next/image";
import React from "react";

const TechData = [
  {
    id: 1,
    imageUrl: "/images/kiln.svg",
    title: "Kiln Dried Wood",
    description:
      "Kiln-drying removes up to 90% of moisture, preventing decay and killing pests, thus extending wooden life.",
  },
  {
    id: 2,
    imageUrl: "/images/tongue.svg",
    title: "Tongue & Groove",
    description:
      "The tongue and groove joint is a strong, edge-to-edge wood connection used in flooring and paneling...",
  },
  {
    id: 3,
    imageUrl: "/images/post.svg",
    title: "Post & Beam Construction",
    description:
      " Post and Beam homes are pricier because they require skilled labor and high-quality timber and tongue-and-groove materials.",
  },
  {
    id: 4,
    imageUrl: "/images/wood.svg",
    title: "Wood Cladding",
    description:
      "Wood cladding is a material applied to the outside of a building to protect the exterior from damage...",
  },
];

function Technologies() {
  return (
    <section
      style={{
        backgroundImage: `url('/images/technologies.png')`,
      }}
      className='bg-cover bg-center bg-no-repeat px-[25px] py-[45px] lg:py-[71px]'
    >
      <div className='inline-flex w-full flex-col items-start justify-start gap-[27px] lg:gap-10'>
        <div className='flex flex-col items-center justify-start gap-px self-stretch'>
          <div className='self-stretch text-center text-lg font-normal leading-loose text-[#eb6a4e] lg:text-2xl'>
            Technologies We Use
          </div>
          <div className='inline-flex items-center justify-center gap-[7px] self-stretch'>
            <Image
              src={"/images/tech-line.svg"}
              alt=''
              width={60}
              height={1}
              className='block lg:hidden'
            />
            <Image
              src={"/images/tech-line-desktop.svg"}
              alt=''
              className='hidden lg:block'
              width={445}
              height={1}
            />
            <div className='text-center text-[22px] font-medium leading-[30px] text-white lg:text-[32px] lg:leading-[47px]'>
              What’s our approach?
            </div>
            <Image
              className='block lg:hidden'
              src={"/images/tech-line.svg"}
              alt=''
              width={60}
              height={1}
            />
            <Image
              src={"/images/tech-line-desktop.svg"}
              alt=''
              className='hidden lg:block'
              width={445}
              height={1}
            />
          </div>
          <div className='w-[266px] text-center text-xs font-light leading-tight text-white/70 lg:h-[54px] lg:w-[426px] lg:text-[18px] lg:leading-7'>
            We use high quality wood & follow the best possible process to build
            a strong home
          </div>
        </div>
        <div className='flex max-w-[1420px] justify-center'>
          <div className='grid w-full max-w-[1420px] grid-cols-2 gap-[15px] sm:col-span-7 lg:grid-cols-4 lg:gap-10'>
            {TechData.map((item) => (
              <div key={item.id}>
                <div
                  className='h-[128px] w-full overflow-hidden rounded bg-cover bg-no-repeat lg:h-[187px] lg:max-h-[187px]'
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                />
                <div className='mt-[7.53px] inline-flex h-[102.53px] w-full flex-col items-start justify-start gap-2 lg:mt-2.5'>
                  <div className='flex h-[95px] flex-col items-start justify-start self-stretch'>
                    <div className='self-stretch text-sm font-medium leading-normal text-white lg:mb-[5px] lg:text-[20px] lg:leading-[32px]'>
                      {item.title}
                    </div>
                    <div className='self-stretch text-[11px] font-light leading-[17.50px] text-white/75 lg:text-base'>
                      {item.description}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
