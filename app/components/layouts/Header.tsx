"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RightSidebar } from "../RightSidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <header className='flex w-full justify-center bg-white py-5 pl-[26px] pr-[25px] shadow-header lg:flex-col lg:pb-0'>
        <div className='flex w-full items-center justify-between lg:mb-5 lg:justify-center'>
          <div className='flex items-center gap-[9px]'>
            <Image src='/images/logo.png' alt='Logo' width={33} height={32} />
            <div className='font-livvic text-[16px] font-black text-[#3A2D41] lg:text-[21px]'>
              WOODEN
              <br className='block lg:hidden' />
              HOUSING
            </div>
          </div>
          <div className='ml-[144px] hidden gap-[38px] lg:flex'>
            <div className='inline-flex h-[31px] cursor-pointer items-center justify-center gap-2.5 border-b-2 border-[#d75438] py-1'>
              <div className='text-lg font-medium text-[#1e1e21]'>Home</div>
            </div>
            <div className='inline-flex h-[23px] cursor-pointer items-center justify-start gap-[7px]'>
              <div className='text-lg font-normal text-[#1e1e21]'>Designs</div>
            </div>
            <div className='inline-flex h-[23px] cursor-pointer items-center justify-start gap-[7px]'>
              <div className='text-lg font-normal text-[#1e1e21]'>Services</div>
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              About Us
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              Blog
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              Career
            </div>
          </div>
          <button className='ml-[275px] hidden items-center justify-center gap-2.5 rounded-md bg-[#d75438] px-[23px] py-2.5 lg:inline-flex'>
            <div className='text-lg font-medium leading-[23px] text-white'>
              Contact Us
            </div>
          </button>
          <div className='block lg:hidden'>
            <Image
              src='/icons/menu.svg'
              alt='Menu icon'
              width={26}
              height={23}
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className='hidden h-[55px] w-full items-center justify-start gap-2.5 border-t border-[#d9d9d9] bg-white py-4 lg:inline-flex'>
          <div className='flex items-center justify-start gap-10'>
            <div className='cursor-pointer text-lg font-normal text-[#414141]'>
              Why wooden house?
            </div>
            <div className='cursor-pointer text-lg font-normal text-[#414141]'>
              Our Projects
            </div>
            <div className='cursor-pointer text-lg font-normal text-[#414141]'>
              3D design tour
            </div>
          </div>
        </div>
      </header>

      <RightSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {isOpen && (
        <div
          className='fixed inset-0 z-10 bg-black bg-opacity-50'
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Header;
