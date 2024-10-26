import Image from "next/image";
import React from "react";

function WhyChoose() {
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
      <div className='inline-flex w-full animate-infinite-scroll flex-col items-center justify-start gap-5 lg:flex-row'>
        <div className='inline-flex items-start justify-start gap-5 self-stretch'>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start overflow-hidden rounded-[7.02px] border border-[#e0e0e0] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/warranty.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='Frame26 flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='AffordableCost text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                Affordable Cost
              </div>
              <div className='QualityDesignWithinYourBudget w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Quality design within your budget
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start overflow-hidden rounded-[7.02px] border border-[#e0e0e0] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/warranty.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='Frame26 flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='AffordableCost text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                15 Years Warranty
              </div>
              <div className='QualityDesignWithinYourBudget w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Long-term protection for your investment
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start overflow-hidden rounded-[7.02px] border border-[#e0e0e0] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/3d-model.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                3D Models
              </div>
              <div className='w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Realistic preview of your design
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start overflow-hidden rounded-[7.02px] border border-[#e0e0e0] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/no-hidden-charge.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                No Hidden Charges
              </div>
              <div className='w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Transparent pricing, no surprises.
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex items-start justify-start gap-5 self-stretch'>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start self-stretch overflow-hidden rounded-[7.02px] border border-[#e2e2e2] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/durable.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                Durable Materials
              </div>
              <div className='BuiltToLastWithHighQualityMaterials w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Built to last with high-quality materials
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start self-stretch overflow-hidden rounded-[7.02px] border border-[#e2e2e2] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/personalised-designs.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='Frame26 flex h-[85.02px] flex-col items-center justify-center gap-[7.02px] self-stretch p-3.5'>
              <div className='PersonalizedDesigns text-center text-sm font-medium leading-[14.03px] text-[#232323]'>
                Personalized Designs
              </div>
              <div className='CustomizeWoodenDesignBuiltJustForYou w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Customize wooden design built just for you
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start self-stretch overflow-hidden rounded-[7.02px] border border-[#e2e2e2] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/technical-assistance.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[7.02px] p-3.5'>
              <div className='text-center text-sm font-medium leading-[19px] text-[#232323]'>
                Technical Assistance
              </div>
              <div className='w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                Expert support from start to finish.
              </div>
            </div>
          </div>
          <div className='inline-flex w-[180px] shrink-0 flex-col items-center justify-start self-stretch overflow-hidden rounded-[7.02px] border border-[#e2e2e2] bg-white'>
            <div className='inline-flex h-[72.97px] items-center justify-center gap-[7.02px] self-stretch bg-[#fef8f6] py-[7.02px]'>
              <div className='inline-flex h-[64px] w-[64px] flex-col items-center justify-center gap-[6.43px] rounded-[27px] bg-[#fdf7f6]'>
                <Image
                  src={"/images/time-delivery.svg"}
                  alt=''
                  width={68}
                  height={51}
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[7.02px] p-3.5'>
              <div className='text-center text-sm font-medium leading-[19px] text-[#232323]'>
                Timely Delivery
              </div>
              <div className='w-[144.55px] text-center text-[11px] font-light leading-[17.50px] text-[#737373]'>
                We 100% deliver our service on time!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
