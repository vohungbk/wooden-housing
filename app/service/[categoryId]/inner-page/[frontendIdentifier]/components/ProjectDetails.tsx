"use client";

import { IProjectDetailsType } from "@/app/types/services";
import React, { FC, useState } from "react";
import { ProjectItems } from "./ProjectItems";
import { ModalViewImage } from "./ModalViewImage";

interface ProjectDetailsProps {
  projectDetails: IProjectDetailsType | null;
  gallery: string[];
  mainImage: string;
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({
  projectDetails,
  gallery = [],
  mainImage,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const isLargeScreen = window.innerWidth >= 1280;
  const maxGalleryItems = isLargeScreen ? 4 : 3;
  const galleryExcess = gallery?.length - maxGalleryItems;

  return (
    <div className='flex flex-col xl:mb-[106px] xl:flex-row xl:items-center xl:gap-10'>
      <div className='relative mb-10 h-[283.66px] w-full xl:flex xl:h-[543px] xl:items-center'>
        <div
          className='relative h-[246px] w-full rounded-[10px] bg-cover bg-center bg-no-repeat xl:h-[481px]'
          style={{ backgroundImage: `url('${mainImage}')` }}
        >
          <div className='absolute inset-0 rounded-[10px] bg-gradient-to-b from-transparent to-black opacity-60' />
          <div className='absolute -bottom-[37.5px] left-1 flex gap-1 430:left-[29.69px] 430:gap-[14px] xl:-bottom-[60.5px]'>
            {gallery?.length > 1 && (
              <div className='rounded-lg bg-white p-[3px]'>
                <div
                  className='h-[75px] w-[96px] rounded-lg bg-cover bg-center bg-no-repeat xl:!h-[121px] xl:!w-[156px]'
                  style={{
                    backgroundImage: ` url('${gallery[1]}')`,
                  }}
                ></div>
              </div>
            )}
            {gallery?.length > 2 && (
              <div className='rounded-lg bg-white p-[3px]'>
                <div
                  className='h-[75px] w-[96px] rounded-lg bg-cover bg-center bg-no-repeat xl:!h-[121px] xl:!w-[156px]'
                  style={{
                    backgroundImage: ` url('${gallery[2]}')`,
                  }}
                ></div>
              </div>
            )}
            {gallery?.length > 3 && (
              <div className='hidden rounded-lg bg-white p-[3px] xl:block'>
                <div
                  className='rounded-lg bg-cover bg-center bg-no-repeat xl:!h-[121px] xl:!w-[156px]'
                  style={{
                    backgroundImage: ` url('${gallery[1]}')`,
                  }}
                ></div>
              </div>
            )}
            {gallery.length > maxGalleryItems && (
              <div className='rounded-lg bg-white p-[3px]'>
                <div
                  className='flex-center relative h-[75.37px] w-[96.78px] cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat xl:!h-[121px] xl:!w-[156px]'
                  style={{
                    backgroundImage: `url('${gallery[gallery.length - 1]}')`,
                  }}
                  onClick={() => setOpenModal(true)}
                >
                  <div className='absolute left-0 top-0 h-[75.37px] w-[96.78px] rounded-lg bg-black/50 xl:!h-[121px] xl:!w-[156px]' />
                  <div className='z-10 text-center text-xs font-medium leading-[12.88px] text-white'>
                    View more ({galleryExcess})
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='mb-[37px] xl:mb-0 xl:w-[470px] xl:flex-shrink-0'>
        <h4 className='mb-5 text-[22px] font-medium leading-[27px] text-black'>
          Project details
        </h4>

        <div className='project-info inline-flex w-full flex-col items-start justify-start overflow-hidden rounded-[11px] border border-neutral-300'>
          {!!projectDetails?.totalArea && (
            <ProjectItems
              title='Total Area'
              value={`${projectDetails?.totalArea} sqft`}
              iconSrc='/icons/inner-project-1.svg'
            />
          )}
          {!!projectDetails?.carpetArea && (
            <ProjectItems
              title='Carpet Area'
              value={`${projectDetails?.carpetArea} sqft`}
              iconSrc='/icons/inner-project-8.svg'
            />
          )}
          {!!projectDetails?.noOfFloors && (
            <ProjectItems
              title='Floors'
              value={projectDetails?.noOfFloors!}
              iconSrc='/icons/inner-project-2.svg'
            />
          )}
          {!!projectDetails?.priceSqft && (
            <ProjectItems
              title='Price - /sqft'
              value={projectDetails?.priceSqft!}
              iconSrc='/icons/inner-project-3.svg'
            />
          )}
          {!!projectDetails?.bedrooms && (
            <ProjectItems
              title='No. of bedrooms'
              value={projectDetails?.bedrooms!}
              iconSrc='/icons/inner-project-4.svg'
            />
          )}

          {!!projectDetails?.halls && (
            <ProjectItems
              title='No. of hall'
              value={projectDetails?.halls!}
              iconSrc='/icons/inner-project-5.svg'
            />
          )}
          {!!projectDetails?.toilets && (
            <ProjectItems
              title='No. of Toilet'
              value={projectDetails?.toilets!}
              iconSrc='/icons/inner-project-9.svg'
            />
          )}
          {!!projectDetails?.decks && (
            <ProjectItems
              title='No. of Deck'
              value={projectDetails?.decks!}
              iconSrc='/icons/inner-project-10.svg'
            />
          )}
          {!!projectDetails?.kitchens && (
            <ProjectItems
              title='No. of kitchen'
              value={projectDetails?.kitchens!}
              iconSrc='/icons/inner-project-6.svg'
            />
          )}
          {!!projectDetails?.typeOfConstruction && (
            <ProjectItems
              title='Type of construction'
              value={projectDetails?.typeOfConstruction!}
              iconSrc='/icons/inner-project-7.svg'
              isHasBorder={false}
            />
          )}
        </div>
      </div>
      {!!openModal && (
        <ModalViewImage
          open={openModal}
          onCloseModal={() => setOpenModal(false)}
          gallery={gallery}
        />
      )}
    </div>
  );
};
