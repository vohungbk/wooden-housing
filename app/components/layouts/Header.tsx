"use client";

import { db } from "@/app/configs/firebase";
import { LIST_ROUTER } from "@/app/shared/constant";
import { CategoryType } from "@/app/types/services";
import { collection, getDocs } from "firebase/firestore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RightSidebar } from "../RightSidebar";

function Header() {
  const [categoryList, setCategoryList] = useState<CategoryType[]>();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDrown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    (async () => {
      const postCollectionRef = collection(db, "categories");
      const postCollectionSnapshot = await getDocs(postCollectionRef);

      const list = postCollectionSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as CategoryType;
      });

      setCategoryList(list);
    })();
  }, []);

  useEffect(() => {
    if (isOpenDrown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpenDrown]);

  return (
    <>
      <header className='flex w-full justify-center bg-white py-5 pl-[26px] pr-[25px] shadow-header xl:flex-col xl:pb-0'>
        <div className='flex w-full items-center justify-between xl:mb-5'>
          <Link href={"/"} className='flex shrink-0 items-center gap-[9px]'>
            <Image src='/images/logo.png' alt='Logo' width={33} height={32} />
            <div className='font-livvic text-[16px] font-black text-[#3A2D41] xl:text-[21px] xl:leading-[27px]'>
              WOODEN
              <br className='block xl:hidden' />
              HOUSING
            </div>
          </Link>
          <div className='ml-[144px] hidden gap-[38px] xl:flex'>
            <Link
              href={"/"}
              className='inline-flex cursor-pointer items-center justify-center gap-2.5 border-b-2 border-[#d75438]'
            >
              <p className='text-lg font-medium text-[#1e1e21]'>Home</p>
            </Link>
            <div className='inline-flex cursor-pointer items-center justify-start gap-[7px]'>
              <div className='text-lg font-normal text-[#1e1e21]'>Designs</div>
            </div>
            <div className='relative inline-flex' ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className='inline-flex items-center rounded text-lg font-normal text-[#1e1e21]'
              >
                Services
                <svg
                  className='ml-2 h-4 w-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
                </svg>
              </button>

              <AnimatePresence>
                {isOpenDrown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-[30px] z-20 h-[190px] w-[247px] overflow-y-auto rounded-[10px] bg-white px-[17px] pb-5 pt-2.5 text-[#1B1B1B] shadow-dropdownMenu'
                  >
                    {categoryList?.map((item) => (
                      <Link
                        onClick={() => setIsOpenDropdown(false)}
                        key={item.id}
                        href={`${LIST_ROUTER.SERVICE}/${item.id}`}
                        className='block cursor-pointer rounded-md pl-2 leading-10 hover:bg-gray-200'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              <Link
                href={LIST_ROUTER.ABOUT_US}
                className='text-lg font-normal text-[#1e1e21]'
              >
                About Us
              </Link>
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              <div className='text-lg font-normal text-[#1e1e21]'> Blog</div>
            </div>
            <div className='inline-flex cursor-pointer text-lg font-normal text-[#1e1e21]'>
              <div className='text-lg font-normal text-[#1e1e21]'>Career</div>
            </div>
          </div>
          <button className='ml-[100px] hidden items-center justify-center gap-2.5 rounded-md bg-[#d75438] px-[23px] py-2.5 xl:inline-flex 2xl:ml-[275px]'>
            <div className='text-lg font-medium leading-[23px] text-white'>
              Contact Us
            </div>
          </button>
          <div className='block xl:hidden'>
            <Image
              src='/icons/menu.svg'
              alt='Menu icon'
              width={26}
              height={23}
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className='hidden h-[55px] w-full items-center justify-start gap-2.5 border-t border-[#d9d9d9] bg-white py-4 xl:inline-flex'>
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
