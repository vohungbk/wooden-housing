/* eslint-disable @typescript-eslint/no-unused-vars */
import { RadioOption } from "@/app/components/form/RadioOption";
import { Select } from "@/app/components/form/Select";
import { ServiceType } from "@/app/types/services";
import React, { FC, useState } from "react";

const options = [
  { value: "200", label: "200" },
  { value: "500", label: "500" },
  { value: "1000", label: "1000" },
  { value: "2000", label: "2000" },
  { value: "3000", label: "3000" },
  { value: "5000", label: "5000" },
];

interface FilterProps {
  setServiceData: (value: ServiceType[]) => void;
  serviceData: ServiceType[];
}

export const Filter: FC<FilterProps> = ({ serviceData, setServiceData }) => {
  const Label = ({ title }: { title: string }) => (
    <h4 className='text-base font-medium leading-5 text-[#1c1c1c] xl:text-xl'>
      {title}
    </h4>
  );
  const [currentFilter, setCurrentFilter] = useState<{
    bedroom: number;
    floor: number;
    area: { min: number; max: number };
  }>({
    bedroom: 0,
    floor: 0,
    area: { min: 0, max: 0 },
  });

  const applyFilters = (filter: typeof currentFilter) => {
    return serviceData.filter((service) => {
      const { projectDetails } = service || {};
      const { bedrooms, noOfFloors, totalArea } = projectDetails || {};

      if (filter.bedroom && bedrooms !== filter.bedroom) {
        return false;
      }

      if (filter.floor && noOfFloors !== filter.floor) {
        return false;
      }

      const { min, max } = filter.area || {};
      if (min && totalArea < min) {
        return false;
      }
      if (max && totalArea > max) {
        return false;
      }

      return true;
    });
  };

  const handleBedroomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedBedrooms = parseInt(event.target.value, 10);

    setCurrentFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, bedroom: selectedBedrooms };
      setServiceData(applyFilters(updatedFilter));
      return updatedFilter;
    });
  };

  const handleFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFloor = parseInt(event.target.value, 10);

    setCurrentFilter((prevFilter) => {
      const updatedFilter = { ...prevFilter, floor: selectedFloor };
      setServiceData(applyFilters(updatedFilter));
      return updatedFilter;
    });
  };

  const handleMinChange = (value: string) => {
    const selectedMin = parseInt(value, 10);

    setCurrentFilter((prevFilter) => {
      const updatedFilter = {
        ...prevFilter,
        area: { ...prevFilter.area, min: selectedMin },
      };
      setServiceData(applyFilters(updatedFilter));
      return updatedFilter;
    });
  };

  const handleMaxChange = (value: string) => {
    const selectedMax = parseInt(value, 10);

    setCurrentFilter((prevFilter) => {
      const updatedFilter = {
        ...prevFilter,
        area: { ...prevFilter.area, max: selectedMax },
      };
      setServiceData(applyFilters(updatedFilter));
      return updatedFilter;
    });
  };

  return (
    <div className='absolute -top-[60px] left-1/2 inline-flex h-[259px] -translate-x-1/2 flex-col items-start justify-start gap-[22px] rounded-[10px] bg-white p-[25px] shadow xl:h-[154px] xl:w-[1280px] xl:flex-row xl:justify-between xl:pl-[125px] xl:pr-[185px] xl:pt-[30px]'>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='No. of Bedrooms' />
        <div className='inline-flex items-start justify-start gap-[25px]'>
          <RadioOption
            value={1}
            label='1'
            name='bedrooms'
            onChange={handleBedroomChange}
          />
          <RadioOption
            value={2}
            label='2'
            name='bedrooms'
            onChange={handleBedroomChange}
          />
          <RadioOption
            value={3}
            label='3'
            name='bedrooms'
            onChange={handleBedroomChange}
          />
          <RadioOption
            value={4}
            label='4'
            name='bedrooms'
            onChange={handleBedroomChange}
          />
          <RadioOption
            value={5}
            label='5'
            name='bedrooms'
            onChange={handleBedroomChange}
          />
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='No. of floors' />
        <div className='inline-flex items-start justify-start gap-[25px] xl:gap-[29px]'>
          <RadioOption
            value={1}
            label='1'
            name='floors'
            onChange={handleFloorChange}
          />
          <RadioOption
            value={2}
            label='2'
            name='floors'
            onChange={handleFloorChange}
          />
          <RadioOption
            value={3}
            label='3'
            name='floors'
            onChange={handleFloorChange}
          />
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-3 xl:gap-5'>
        <Label title='Gross Living Area' />
        <div className='inline-flex items-center justify-start gap-2.5'>
          <div className='flex items-center justify-start gap-[4.37px]'>
            <Select
              placeholder='250'
              className='h-[33px] w-[65px] xl:h-10'
              options={options}
              onChange={(event: any) => handleMinChange(event?.value)}
            />
            <div className='text-base font-medium text-[#484848]'>sqft</div>
          </div>
          <div className='h-[1.75px] w-[7px] bg-[#D75337]' />
          <div className='flex items-center justify-start gap-[4.37px]'>
            <Select
              placeholder='500'
              className='h-[33px] w-[65px] xl:h-10'
              options={options}
              onChange={(event: any) => handleMaxChange(event?.value)}
            />
            <div className='text-base font-medium text-[#484848]'>sqft</div>
          </div>
        </div>
      </div>
    </div>
  );
};
