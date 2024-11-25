"use client";

import Pagination from "@/app/components/ui/Pagination";
import { FC, useState } from "react";
import { Filter } from "./components/Filter";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryType, ServiceType } from "@/app/types/services";
import { ServiceBanner } from "./components/ServiceBanner";
import Link from "next/link";

interface ServiceLayoutProps {
  categoryDetail: CategoryType;
  serviceList: ServiceType[];
}

export const ServiceLayout: FC<ServiceLayoutProps> = ({
  categoryDetail,
  serviceList,
}) => {
  const [serviceData, setServiceData] = useState<ServiceType[]>(serviceList);

  return (
    <section className='relative w-full bg-[#f8f8f8]'>
      <ServiceBanner categoryDetail={categoryDetail} />
      <div className='relative mx-auto w-full max-w-[1280px] px-[26px] pt-[221px] xl:px-0 xl:pt-[156px]'>
        <Filter setServiceData={setServiceData} serviceData={serviceList} />
        <p className='mb-5 text-lg font-medium text-[#1d1d1d] xl:mb-[30px] xl:text-[20px]'>
          Results - {serviceData?.length} Models
        </p>
        {!!serviceData?.length ? (
          <div className='mb-[43px] grid w-full gap-[30px] xl:grid-cols-2 xl:gap-[60px]'>
            {serviceData.map((service) => (
              <Link
                key={service.id}
                href={`/service/${service?.categoryId}/inner-page/${service?.frontendIdentifier}`}
                className='flex flex-col items-start justify-start gap-2.5 self-stretch'
              >
                <Image
                  className='h-[243px] w-full rounded-[5px] object-cover xl:h-[350px]'
                  src={service?.img}
                  alt=''
                  width={2572}
                  height={350}
                  priority
                />
                <div className='flex h-[42px] flex-col items-start justify-start gap-1'>
                  <p className='self-stretch text-xs font-light text-[#5f5f5f]'>
                    {service?.description}
                  </p>
                  <p className='self-stretch text-lg font-medium text-[#1c1c1c]'>
                    {service?.title}
                  </p>
                </div>
                <div className='flex flex-col items-start justify-start gap-2.5 self-stretch'>
                  <div className='inline-flex items-center justify-between self-stretch'>
                    <div>
                      <span className='text-base font-light text-[#292929]'>
                        Carpet Area:
                      </span>
                    </div>
                    <div className='text-base font-normal text-[#1a1a1a]'>
                      {service?.projectDetails?.carpetArea} sqft
                    </div>
                  </div>
                  <div className='inline-flex items-center justify-between self-stretch'>
                    <div className='text-base font-light text-[#292929]'>
                      Total Area:
                    </div>
                    <div className='text-base font-normal text-[#1a1a1a]'>
                      {service?.projectDetails?.totalArea} sqft
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex-center h-[300px] w-full'>
            <h4>No service found!!!</h4>
          </div>
        )}
        <div className='mb-[43px] inline-flex w-full items-center justify-center gap-1'>
          <Pagination
            pageCount={Math.ceil(serviceList?.length / 8)}
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
