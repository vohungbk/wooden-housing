/* eslint-disable @next/next/no-img-element */
"use client";

import Pagination from "@/app/components/ui/Pagination";
import { FC } from "react";
import { Filter } from "./components/Filter";
import ServiceBanner from "./components/ServiceBanner";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ServiceLayoutProps {
  data: any;
}

export const ServiceLayout: FC<ServiceLayoutProps> = ({}) => {
  return (
    <section className='relative w-full bg-[#f8f8f8]'>
      <ServiceBanner />
      <div className='relative mx-auto w-full max-w-[1280px] px-[26px] pt-[221px] xl:px-0 xl:pt-[156px]'>
        <Filter />
        <p className='mb-5 text-lg font-medium text-[#1d1d1d] xl:mb-[30px] xl:text-[20px]'>
          Results - 32 Models
        </p>
        <div className='mb-[43px] grid w-full gap-[30px] xl:grid-cols-2 xl:gap-[60px]'>
          <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
            <Image
              className='h-[243px] w-full rounded-[5px] object-cover xl:h-[350px]'
              src='https://images.unsplash.com/photo-1732024000259-b372b1e1a012?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              width={2572}
              height={350}
              priority
            />
            <div className='flex h-[42px] flex-col items-start justify-start gap-1'>
              <p className='self-stretch text-xs font-light text-[#5f5f5f]'>
                Holiday home 1 floor
              </p>
              <p className='self-stretch text-lg font-medium text-[#1c1c1c]'>
                Glass House 70 - Log Cabin
              </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div>
                  <span className='text-base font-light text-[#292929]'>
                    Carpet Area:
                  </span>
                  <span className='text-base font-normal text-[#292929]'>
                    {" "}
                  </span>
                </div>
                <div className='text-base font-normal text-[#1a1a1a]'>
                  69 sqft
                </div>
              </div>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='text-base font-light text-[#292929]'>
                  Total Area:
                </div>
                <div className='text-base font-normal text-[#1a1a1a]'>
                  99 – 105 sqft
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
            <Image
              className='h-[243px] w-full rounded-[5px] object-cover xl:h-[350px]'
              src='https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'
              alt=''
              width={2572}
              height={350}
              priority
            />
            <div className='flex h-[42px] flex-col items-start justify-start gap-1'>
              <p className='self-stretch text-xs font-light text-[#5f5f5f]'>
                Holiday home 1 floor
              </p>
              <p className='self-stretch text-lg font-medium text-[#1c1c1c]'>
                Glass House 70 - Log Cabin
              </p>
            </div>
            <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div>
                  <span className='text-base font-light text-[#292929]'>
                    Carpet Area:
                  </span>
                  <span className='text-base font-normal text-[#292929]'>
                    {" "}
                  </span>
                </div>
                <div className='text-base font-normal text-[#1a1a1a]'>
                  69 sqft
                </div>
              </div>
              <div className='inline-flex items-center justify-between self-stretch'>
                <div className='text-base font-light text-[#292929]'>
                  Total Area:
                </div>
                <div className='text-base font-normal text-[#1a1a1a]'>
                  99 – 105 sqft
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-[43px] inline-flex w-full items-center justify-center gap-1'>
          <Pagination
            pageCount={14}
            onPageChange={() => null}
            previousLabel={
              <div className='hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-[#4B325A] xl:flex'>
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  color='#fff'
                  className='xl:text-[20px]'
                />
              </div>
            }
            nextLabel={
              <div className='hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-[#4B325A] xl:flex'>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  color='#fff'
                  className='xl:text-[20px]'
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};
