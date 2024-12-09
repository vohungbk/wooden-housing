import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MissionIcon = () => (
  <div>
    <FontAwesomeIcon
      icon={faAngleRight}
      color='#D75337B0'
      className='text-[15px] xl:text-[21px]'
    />
    <FontAwesomeIcon
      icon={faAngleRight}
      color='#D75337'
      className='text-[15px] xl:text-[21px]'
    />
  </div>
);

const MissionList = [
  {
    id: 1,
    title: "Our Mission",
    desc1:
      "At our core, we are deeply committed to revolutionizing the building industry by seamlessly combining sustainability, innovation, and comfort. We are motivated by the belief that the  future of construction should focus on both the residents  well-being and the health of our planet.",
    desc2:
      "Our aim is to transform living spaces by going beyond the constraints of conventional materials such as bricks and concrete.Today wooden houses are more innovative and advanced technologies and eco-friendly practices that improve both quality of life and environmental care.",
  },
  {
    id: 2,
    title: "Our Mission",
    desc1:
      "Our vision is to drive a transformation in the construction industry, where sustainability and innovation are not merely aspirations but essential elements of each project we complete. We foresee a future where homes are more than buildings - they are vibrant ecosystems that support their residents while reducing their environmental impact.",
    desc2:
      "By promoting sustainable practices and cutting-edge technologies, we strive to design living spaces that coexist in harmony with nature, providing unmatched comfort and contemporary style.",
  },
];

function Mission() {
  return (
    <div className='w-full bg-neutral-50 px-[26px] py-[33px]'>
      <div className='mx-auto w-full max-w-[1280px]'>
        <div className='inline-flex w-full flex-col items-start justify-start gap-[25px] xl:flex-row xl:gap-10'>
          {MissionList?.map((mission) => (
            <div
              key={mission.id}
              className='flex flex-col items-start justify-start self-stretch rounded-[15px] bg-white px-[25px] py-5 shadow xl:px-10 xl:py-[30px]'
            >
              <div className='inline-flex items-center justify-start gap-[11.45px]'>
                <MissionIcon />
                <div className='text-lg font-semibold leading-[42px] text-[#352e39] xl:text-[28px] xl:leading-[58px]'>
                  Our Mission
                </div>
              </div>
              <div className='self-stretch text-[11px] font-light leading-tight text-[#585858] xl:text-base xl:leading-[29px]'>
                At our core, we are deeply committed to revolutionizing the
                building industry by seamlessly combining sustainability,
                innovation, and comfort. We are motivated by the belief that the
                future of construction should focus on both the residents
                well-being and the health of our planet.
                <br />
                <br /> Our aim is to transform living spaces by going beyond the
                constraints of conventional materials such as bricks and
                concrete. Today wooden houses are more innovative and advanced
                technologies and eco-friendly practices that improve both
                quality of life and environmental care.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;
