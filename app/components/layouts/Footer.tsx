import { LIST_ROUTER } from "@/app/shared/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className='z-10'>
      <div className='block h-full w-full bg-[#4B325A] px-[25px] pb-[33px] pt-[28px] lg:hidden'>
        <div className='mb-[25px] inline-flex w-full items-start justify-between'>
          <div className='inline-flex flex-1 flex-col items-start justify-start gap-5'>
            <div className='self-stretch text-lg font-semibold text-white'>
              Menu
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5'>
              <div className='Home text-base font-light tracking-wide text-white'>
                Home
              </div>
              <div className='Designs text-base font-light tracking-wide text-white'>
                Designs
              </div>
              <div className='Services text-base font-light tracking-wide text-white'>
                Services
              </div>
              <Link
                href={LIST_ROUTER.ABOUT_US}
                className='text-base font-light tracking-wide text-white'
              >
                About Us
              </Link>
              <div className='ContactUs text-base font-light tracking-wide text-white'>
                Contact Us
              </div>
            </div>
          </div>
          <div className='inline-flex flex-1 flex-col items-start justify-start gap-5'>
            <div className='Categories self-stretch text-lg font-semibold text-white'>
              Categories
            </div>
            <div className='Frame219 flex flex-col items-start justify-start gap-3.5'>
              <div className='WoodenCottages text-base font-light tracking-wide text-white'>
                Wooden Cottages
              </div>
              <div className='WoodenHouses text-base font-light tracking-wide text-white'>
                Wooden Houses
              </div>
              <div className='WoodenVillas text-base font-light tracking-wide text-white'>
                Wooden Villas
              </div>
              <div className='WoodenPergola text-base font-light tracking-wide text-white'>
                Wooden Pergola
              </div>
              <div className='Gazebo text-base font-light tracking-wide text-white'>
                Gazebo
              </div>
              <div className='TerraceWoodenHouse text-base font-light tracking-wide text-white'>
                Terrace Wooden House
              </div>
            </div>
          </div>
        </div>
        <div className='mb-[33px] inline-flex w-full items-start justify-between'>
          <div className='inline-flex flex-1 flex-col items-start justify-start gap-5'>
            <div className='self-stretch text-lg font-semibold text-white'>
              Other page links
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5'>
              <div className='text-sm font-light tracking-wide text-white'>
                Why wooden house?
              </div>
              <div className='w-[159px] text-sm font-light leading-[19px] tracking-wide text-white'>
                Benifits of wooden house
              </div>
              <div className='text-sm font-light tracking-wide text-white'>
                3D design tour
              </div>
              <div className='text-sm font-light tracking-wide text-white'>
                Blogs
              </div>
            </div>
          </div>
          <div className='inline-flex flex-1 flex-col items-start justify-start gap-5'>
            <div className='self-stretch text-lg font-semibold text-white'>
              Support
            </div>
            <div className='flex h-[114px] flex-col items-start justify-start gap-3.5 self-stretch'>
              <div className='self-stretch text-sm font-light tracking-wide text-white'>
                Terms and conditions
              </div>
              <div className='inline-flex items-center justify-start gap-2.5'>
                <div className='text-sm font-light tracking-wide text-white'>
                  Privacy prolicy
                </div>
                <div className='h-[3px] w-[3px] rounded-full bg-white' />
                <div className='text-sm font-light tracking-wide text-white'>
                  F&Q{" "}
                </div>
              </div>
              <div className='text-sm font-light tracking-wide text-white'>
                Cancellation policy
              </div>
              <div className='text-sm font-light tracking-wide text-white'>
                Referral policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden w-full justify-center bg-[#4B325A] py-[55px] lg:flex'>
        <div className='inline-flex h-64 items-start justify-between lg:w-[1000px] xl:w-[1150px] 2xl:w-[1280px]'>
          <div className='inline-flex flex-col items-start justify-start gap-5'>
            <div className='font-self-stretch text-[22px] font-semibold text-white'>
              Menu
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5'>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Home
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Designs
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Services
              </Link>
              <Link
                href={LIST_ROUTER.ABOUT_US}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                About Us
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-5'>
            <div className='font-self-stretch text-[22px] font-semibold text-white'>
              Categories
            </div>
            <div className='flex flex-col items-start justify-start gap-3.5'>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Wooden Cottages
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Wooden Houses
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Wooden Villas
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Wooden Pergola
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Gazebo
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Terrace Wooden House
              </Link>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-5'>
            <div className='font-self-stretch text-[22px] font-semibold text-white'>
              Other page links
            </div>
            <div className='flex h-[134px] flex-col items-start justify-start gap-3.5 self-stretch'>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Why wooden house?
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Benefits of wooden house
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                3D design tour
              </Link>
              <Link
                href={"/"}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-5'>
            <div className='font-self-stretch text-[22px] font-semibold text-white'>
              Support
            </div>
            <div className='flex h-[171px] flex-col items-start justify-start gap-3.5 self-stretch'>
              <Link
                href={""}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Terms and conditions
              </Link>
              <Link
                href={""}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Privacy prolicy
              </Link>
              <Link
                href={""}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Cancellation policy
              </Link>
              <Link
                href={""}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                Referral policy
              </Link>
              <Link
                href={""}
                className='font-text-lg font-light tracking-wide text-white hover:text-[#ffda30]'
              >
                F & Q{" "}
              </Link>
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-5'>
            <div className='font-self-stretch text-[22px] font-semibold text-white'>
              Contact Us
            </div>
            <div className='flex h-[60px] flex-col items-start justify-start gap-3.5 self-stretch'>
              <div className='inline-flex items-center justify-start gap-2.5'>
                <Image src={"/icons/phone.svg"} alt='' width={20} height={20} />
                <div>
                  <span className='font-text-lg font-normal tracking-wide text-white'>
                    +91
                  </span>
                  <span className='font-text-lg font-light tracking-wide text-white'>
                    {" "}
                    1234567890
                  </span>
                </div>
              </div>
              <div className='inline-flex items-center justify-start gap-2.5'>
                <Image src={"/icons/mail.svg"} alt='' width={22} height={17} />
                <div className='font-text-lg font-light tracking-wide text-white'>
                  care@woodenhousing.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#372442] px-[25px] py-[26px]'>
        <div className='flex items-start gap-[37px]'>
          <div className='lg:flex lg:w-full lg:items-center lg:justify-between'>
            <div className='flex items-center gap-2.5'>
              <div className='h-[41.49px] w-[43.65px]'>
                <Image
                  src={"/images/logo.svg"}
                  alt='Logo'
                  width={43}
                  height={41}
                />
              </div>
              <div>
                <div className='font-livvic text-xl font-bold tracking-wide text-white'>
                  WOODEN
                </div>
                <div className='font-livvic text-xl font-bold tracking-wide text-white'>
                  HOUSING
                </div>
              </div>
            </div>
            <div className='mt-0 hidden items-center justify-center lg:flex'>
              <Image
                src={"/icons/copy-right.svg"}
                alt='copy'
                width={16}
                height={16}
                className='mr-2'
              />
              <span className='text-sm font-light tracking-wide text-white lg:text-[18px]'>
                Woodenhousing.com
              </span>
              <span className='text-sm font-medium tracking-wide text-white lg:text-[18px]'>
                &nbsp; All rights reserved
              </span>
            </div>
            <div className='mt-[11px] flex items-center gap-[19px]'>
              <Image
                src={"/icons/whats-app.svg"}
                alt=''
                width={22}
                height={22}
                className='cursor-pointer'
              />
              <Image
                src={"/icons/youtube.svg"}
                className='cursor-pointer'
                alt=''
                width={26}
                height={21}
              />
              <Image
                src={"/icons/facebook.svg"}
                alt=''
                width={22}
                height={22}
                className='cursor-pointer'
              />
              <Image
                src={"/icons/twitter.svg"}
                className='cursor-pointer'
                alt=''
                width={23}
                height={22}
              />
            </div>
          </div>
          <div className='inline-flex h-[93px] flex-col items-start justify-start gap-5 lg:hidden'>
            <div className='self-stretch text-lg font-semibold text-white'>
              Contact Us
            </div>
            <div className='flex h-[50px] flex-col items-start justify-start gap-3.5 self-stretch'>
              <div className='inline-flex items-center justify-start gap-2.5'>
                <div className='911234567890'>
                  <span className='text-sm font-normal tracking-wide text-white'>
                    +91
                  </span>
                  <span className='text-sm font-light tracking-wide text-white'>
                    {" "}
                    1234567890
                  </span>
                </div>
              </div>
              <p className='break-all text-sm font-light tracking-wide text-white'>
                care@woodenhousing.com
              </p>
            </div>
          </div>
        </div>
        <div className='mt-8 flex items-center justify-center lg:hidden'>
          <Image
            src={"/icons/copy-right.svg"}
            alt='copy'
            width={16}
            height={16}
            className='mr-2'
          />
          <span className='text-sm font-light tracking-wide text-white'>
            Woodenhousing.com
          </span>
          <span className='text-sm font-medium tracking-wide text-white'>
            &nbsp; All rights reserved
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
