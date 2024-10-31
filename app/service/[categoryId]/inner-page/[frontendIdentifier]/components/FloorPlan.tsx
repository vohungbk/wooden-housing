"use client";

import { getOrdinalSuffix } from "@/app/shared/utils";
import { IFloor } from "@/app/types/services";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC, useState } from "react";

interface FloorPlanProps {
  floorData: IFloor[];
}

export const FloorPlan: FC<FloorPlanProps> = ({ floorData }) => {
  const [aspectRatio, setAspectRatio] = useState(1);
  const [aspectRatio1, setAspectRatio1] = useState(1);

  const handleImageLoad = (naturalWidth: number, naturalHeight: number) => {
    setAspectRatio(naturalWidth / naturalHeight);
  };

  const handleImage1Load = (naturalWidth: number, naturalHeight: number) => {
    setAspectRatio1(naturalWidth / naturalHeight);
  };

  const FeatureItem = ({ label }: { label: string }) => (
    <div className='inline-flex items-center justify-start gap-[8.18px] self-stretch xl:gap-[12.75px]'>
      <FontAwesomeIcon
        icon={faCheckCircle}
        color='#4a3456'
        fontSize={13}
        className='xl:text-[19px]'
      />
      <div className='text-sm font-normal leading-[14.73px] text-[#3f3f3f] xl:text-[18px] xl:leading-[23px]'>
        {label}
      </div>
    </div>
  );

  const FeaturesList = ({ features }: { features: string[] }) => (
    <div className='flex flex-col items-start justify-start gap-[15px] self-stretch xl:gap-[22px]'>
      {features.map((feature, index) => (
        <FeatureItem key={index} label={feature} />
      ))}
    </div>
  );

  const renderFloorFeature = (data: IFloor) => {
    const arrayList = [];

    const itemsMap: Record<keyof IFloor, string> = {
      doubleBedroom: "Double Bed",
      toilet: "Toilet",
      deck: "Deck",
      fixedWardrobes: "Fixed Wardrobes",
      tvUnit: "TV Unit",
      studyTable: "Study Table",
      livingArea: "Living Area",
      diningArea: "Dining Area",
      kitchen: "Kitchen",
      stair: "Stair",
      kitchenWardrobe: "Kitchen Wardrobes",
      washbasinCabinet: "Washbasin Cabinet",
      lounge: "Lounge",
      hall: "Hall",
      store: "Store",
      washArea: "Wash Area",
      area: "",
      floorElevation: "",
      bathroomLaundryRoom: "Bathroom/Laundry Room",
      miniBar: "Mini Bar",
      technicalRoom: "Technical Room",
      livingRoom: "Living Room",
      floorElevationName: "",
      description: "",
      floorPlanName: "",
      storageRoom: "Storage Room",
      luggageRack: "Luggage Rack",
      floorPlan: "",
      openArea: "Open Area",
    };

    for (const [key, text] of Object.entries(itemsMap) as [
      keyof IFloor,
      string,
    ][]) {
      if (data[key] === true) {
        arrayList.push(text);
      }
    }

    return arrayList;
  };

  const FloorInfo = ({ floor, index }: { floor: IFloor; index: number }) => (
    <div className='inline-flex w-full flex-col items-start justify-start gap-5 rounded-[10px] bg-[#f3f3f3] px-[25px] py-5 xl:w-[510px] xl:gap-6 xl:px-10 xl:py-[30px]'>
      <div className='flex flex-col items-start justify-start gap-2.5 xl:gap-6'>
        <h3 className='self-stretch text-[19px] font-medium leading-7 text-[#1a1a1a] xl:text-[33px] xl:leading-[45px]'>
          {getOrdinalSuffix(index + 1)} Floor
        </h3>
        <h4 className='text-base font-normal leading-3 text-[#1b1b1b] xl:text-[22px] xl:leading-[19px]'>
          Total area: {floor.area} sqft
        </h4>
      </div>
      <FeaturesList features={renderFloorFeature(floor)} />
    </div>
  );

  return (
    <section className='flex w-full flex-col'>
      <div className='mb-[38px] w-full xl:mb-0'>
        <div className='inline-flex w-full flex-col items-center justify-start'>
          <div className='mb-1 inline-flex items-center justify-center'>
            <Image
              src={"/images/floor-plan.svg"}
              alt=''
              width={100}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/floor-plan-desktop.svg"}
              alt=''
              width={500}
              height={1}
              className='hidden xl:block'
            />
            <h3 className='text-center text-[22px] font-semibold leading-[30.84px] text-[#352d39] xl:text-[32px] xl:leading-[47px]'>
              Floor Plan
            </h3>
            <Image
              src={"/images/floor-plan.svg"}
              alt=''
              width={100}
              height={1}
              className='block xl:hidden'
            />
            <Image
              src={"/images/floor-plan-desktop.svg"}
              alt=''
              width={500}
              height={1}
              className='hidden xl:block'
            />
          </div>
          <h4 className='mb-2 w-[282.89px] text-center text-xs font-light leading-[17.93px] text-[#636363] xl:mb-[45px] xl:w-[426px] xl:text-[18px] xl:leading-[27px]'>
            Take a look at the floor plan of Wooden Cottage Model
          </h4>

          <div className='hidden w-full flex-col gap-[85px] xl:flex'>
            {floorData?.map((item, index) => (
              <div key={index.toString()} className='w-full'>
                <div
                  className={`mb-[95px] hidden w-full gap-12 xl:mb-0 xl:flex xl:items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                >
                  <FloorInfo floor={item} index={index} />
                  <div className='relative h-[470px] w-full'>
                    <Image src={item.floorPlan} alt='' fill />
                  </div>
                </div>
                <div
                  className='flex-center hidden h-full w-full bg-no-repeat py-20 xl:inline-flex'
                  style={{
                    backgroundImage: "url('/images/1st-floor-bg-desktop.png')",
                  }}
                >
                  <div className='relative w-full' style={{ aspectRatio }}>
                    <Image
                      src={item.floorElevation}
                      alt='Floor Elevation'
                      layout='fill'
                      objectFit='contain'
                      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        handleImageLoad(naturalWidth, naturalHeight)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Floor */}
      <div className='w-full'>
        {floorData?.map((item, index) => (
          <div key={index.toString()} className='mb-9 block xl:hidden'>
            <div
              style={{ aspectRatio: aspectRatio1 }}
              className='relative mb-[38px] w-full max-w-full'
            >
              <Image
                src={item.floorPlan}
                alt=''
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes='(max-width: 768px) 100vw, 700px'
                onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                  handleImage1Load(naturalWidth, naturalHeight)
                }
              />
            </div>
            <FloorInfo floor={item} index={index} />
            <div
              className='flex-center mb-[27px] mt-[17px] h-[270px] w-full bg-cover bg-center bg-no-repeat'
              style={{ backgroundImage: "url('/images/1st-floor-bg.png')" }}
            >
              <div
                className='relative w-full max-w-[376px]'
                style={{ aspectRatio }}
              >
                <Image
                  src={item.floorElevation}
                  alt='Floor Elevation'
                  layout='fill'
                  objectFit='contain'
                  onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    handleImageLoad(naturalWidth, naturalHeight)
                  }
                />
              </div>
            </div>
            {index !== floorData?.length - 1 && (
              <div className='mb-[40px] mt-[27px]'>
                <Image
                  src={"/images/1st-floor-2.svg"}
                  alt=''
                  width={350}
                  height={1}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
