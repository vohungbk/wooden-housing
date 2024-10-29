"use client";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { db } from "../configs/firebase";
import { LIST_ROUTER } from "../shared/constant";
import { CategoryType } from "../types/services";

interface RightSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const RightSidebar: FC<RightSidebarProps> = ({
  isOpen,
  toggleSidebar,
}) => {
  const [categoryList, setCategoryList] = useState<CategoryType[]>();

  useEffect(() => {
    (async () => {
      const postCollectionRef = collection(db, "serviceCategories");
      const postCollectionSnapshot = await getDocs(postCollectionRef);

      const list = postCollectionSnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() } as CategoryType;
      });

      setCategoryList(list);
    })();
  }, []);

  const handleClickLink = () => toggleSidebar;

  return (
    <motion.div
      className={`fixed right-0 top-0 w-[347px] bg-white ${isOpen && "z-30"}`}
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex max-h-screen w-[347px] flex-col items-end justify-start gap-[15px] overflow-y-scroll px-[22px] py-[25px] pb-[100px]'>
        <div className='flex items-center justify-center gap-3'>
          <div className='text-center text-base font-medium text-[#3a2d41]'>
            close
          </div>
          <div>
            <Image
              src={"/icons/close.svg"}
              alt='Close icon'
              width={15}
              height={15}
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className='flex flex-col items-end justify-start gap-2.5 self-stretch'>
          <div className='relative h-[81px] w-[302px]'>
            <Link
              onClick={handleClickLink}
              href={"/"}
              className='absolute left-0 top-0 inline-flex h-[81px] w-[94px] flex-col items-center justify-center gap-2.5 rounded-lg bg-[#fff1ec] px-[23.50px] py-[15px]'
            >
              <Image
                src={"/icons/home.svg"}
                alt='Home'
                width={29}
                height={27}
              />
              <div className='Home w-[47px] text-center text-[11px] text-[#282828]'>
                Home
              </div>
            </Link>
            <div className='absolute left-[104px] top-0 inline-flex h-[81px] w-[94px] flex-col items-center justify-center gap-2.5 rounded-lg bg-[#fff1ec] px-3.5 py-[15px]'>
              <Image
                src={"/icons/contact.svg"}
                alt='Contact'
                width={27}
                height={27}
              />
              <div className='w-[66px] text-center text-[11px] text-[#282828]'>
                Contact Us
              </div>
            </div>
            <div className='absolute left-[208px] top-0 inline-flex h-[81px] w-[94px] flex-col items-center justify-center gap-[9px] rounded-lg bg-[#fff1ec] px-[23.50px] py-[15px]'>
              <Image src={"/icons/faq.png"} alt='Faq' width={24} height={28} />
              <div className='w-[47px] text-center text-[11px] text-[#282828]'>
                FAQ
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2.5 self-stretch rounded-lg bg-[#fff1ec] p-2.5'>
            <div className='inline-flex items-center justify-start gap-2.5 self-stretch'>
              <div className='Services text-center text-sm font-medium text-[#282828]'>
                Services
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
              <div className='grid grid-cols-2 gap-1.5'>
                {categoryList?.map((item) => (
                  <Link
                    href={`${LIST_ROUTER.SERVICE}/${item.id}`}
                    key={item.id}
                    className='inline-flex shrink grow basis-0 flex-col items-start justify-start self-stretch rounded-[5px] shadow'
                  >
                    <Image
                      className='h-[69px] self-stretch rounded-tl-[5px] rounded-tr-[5px] border border-white'
                      src={item?.coverImage}
                      alt=''
                      width={138.5}
                      height={69}
                    />
                    <div className='inline-flex h-10 items-center justify-center gap-2.5 self-stretch rounded-[5px] bg-white py-1.5'>
                      <div className='overflow-hidden text-ellipsis whitespace-nowrap text-center text-[11px] font-normal text-[#191919]'>
                        {item?.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='inline-flex items-center justify-between self-stretch rounded-[5px] bg-white p-2.5 shadow'>
                <div className='OurProjects text-center text-[11px] font-normal text-[#282828]'>
                  Our Projects
                </div>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color='#D75438'
                  fontSize={6}
                />
              </div>
              <div className='inline-flex items-center justify-between self-stretch rounded-[5px] bg-white p-2.5 shadow'>
                <div className='text-center text-[11px] font-normal text-[#282828]'>
                  Why Wooden House?
                </div>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color='#D75438'
                  fontSize={6}
                />
              </div>
            </div>
          </div>
          <div className='flex w-[303px] items-center justify-between rounded-md bg-gradient-to-b from-[#f8f1fc] to-[#ebdcf4]'>
            <div className='py-[7px] pl-[13px]'>
              <div className=''>
                <span className='text-[13px] font-normal text-neutral-800'>
                  Book a
                </span>
                <span className='text-[13px] font-normal text-[#d75438]'>
                  {" "}
                </span>
                <span className='text-[13px] font-semibold text-[#6d2794]'>
                  free
                </span>
                <span className='text-[13px] font-normal text-neutral-800'>
                  {" "}
                  design consulation!
                </span>
              </div>
              <div className=''>
                <span className='text-[10px] font-light text-[#6c557b]'>
                  Meet our{" "}
                </span>
                <span className='text-[10px] font-normal text-[#6c557b]'>
                  architect
                </span>
                <span className='text-[10px] font-light text-[#6c557b]'>
                  {" "}
                  & start planning!{" "}
                </span>
              </div>
              <div className='inline-flex items-center justify-center gap-[5px] rounded pt-[2px]'>
                <button className='text-[11px] font-medium text-[#6d2793]'>
                  Book now{" "}
                </button>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color='#6D2794'
                  fontSize={6}
                />
              </div>
            </div>
            <div className='h-[68px] w-[91px]'>
              <Image
                src={"/images/mobile-login.svg"}
                alt=''
                width={111}
                height={125}
                className='h-full'
              />
            </div>
          </div>
          <div className='inline-flex h-[42px] items-center justify-between self-stretch rounded-[5px] bg-[#fff1ec] p-2.5'>
            <div className='flex items-center justify-start gap-[7px]'>
              <div className='relative h-[22px] w-[22px]'>
                <Image
                  src={"/icons/add-user.svg"}
                  alt=''
                  width={22}
                  height={22}
                />
              </div>
              <div className='text-center text-xs font-normal text-[#282828]'>
                Refer a friend
              </div>
              <div className='flex items-center justify-center gap-2.5 rounded-[3px] bg-[#d75438] px-[5px] py-[3px]'>
                <div className='text-center text-[7px] font-normal text-white'>
                  ₹50,000 Cashback
                </div>
              </div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} color='#D75438' fontSize={6} />
          </div>
          <div className='mb-[15px] flex h-[168px] flex-col items-start justify-start self-stretch rounded-[5px]'>
            <div className='inline-flex items-center justify-between self-stretch border-b border-[#f4d5ca] bg-[#fff1ec] p-2.5'>
              <div className='flex items-center justify-start gap-[7px]'>
                <div className='h-[22px] w-[22px]'>
                  <Image
                    src='/icons/home-design.svg'
                    alt='home'
                    width={22}
                    height={22}
                  />
                </div>
                <div className='text-center text-xs font-normal text-[#282828]'>
                  Designs
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                color='#D75438'
                fontSize={6}
              />
            </div>
            <div className='inline-flex items-center justify-between self-stretch border-b border-[#f4d5ca] bg-[#fff1ec] p-2.5'>
              <div className='Frame338 flex items-center justify-start gap-[7px]'>
                <div className='h-[22px] w-[22px]'>
                  <Image
                    src='/icons/info-circle.svg'
                    alt='home'
                    width={22}
                    height={22}
                  />
                </div>
                <div className='About text-center text-xs font-normal text-[#282828]'>
                  About
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                color='#D75438'
                fontSize={6}
              />
            </div>
            <div className='inline-flex items-center justify-between self-stretch border-b border-[#f4d5ca] bg-[#fff1ec] p-2.5'>
              <div className='flex items-center justify-start gap-[7px]'>
                <div className='h-[22px] w-[22px]'>
                  <Image
                    src='/icons/career.svg'
                    alt='home'
                    width={22}
                    height={22}
                  />
                </div>
                <div className='Career text-center text-xs font-normal text-[#282828]'>
                  Career
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                color='#D75438'
                fontSize={6}
              />
            </div>
            <div className='inline-flex items-center justify-between self-stretch bg-[#fff1ec] p-2.5'>
              <div className='flex items-center justify-start gap-[7px]'>
                <div className='h-[22px] w-[22px]'>
                  <Image
                    src='/icons/note.svg'
                    alt='home'
                    width={22}
                    height={22}
                  />
                </div>
                <div className='text-center text-xs font-normal text-[#282828]'>
                  Blog
                </div>
              </div>
              <div className='h-1.5'>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color='#D75438'
                  fontSize={6}
                />
              </div>
            </div>
          </div>
          <div className='flex w-full justify-between'>
            <Image src={"/images/sidebar.svg"} alt='' width={50} height={1} />
            <div className='flex gap-[25px]'>
              <Image
                src={"/icons/facebook-red.svg"}
                alt=''
                width={19}
                height={19}
              />
              <Image src={"/icons/in-red.svg"} alt='' width={19} height={19} />
              <Image
                src={"/icons/instagram-red.svg"}
                alt=''
                width={19}
                height={19}
              />
              <Image
                src={"/icons/whatsapp-red.svg"}
                alt=''
                width={19}
                height={19}
              />
            </div>
            <Image src={"/images/sidebar.svg"} alt='' width={50} height={1} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
