"use client";

import Image from "next/image";
import Consultation from "../service/[categoryId]/inner-page/[frontendIdentifier]/components/Consultation";
import Banner from "./components/Banner";
import Mission from "./components/Mission";
import { cn } from "../shared/utils";
import useIsMobile from "../hooks/useIsMobile";

const data = [
  {
    id: 1,
    title: {
      main: "Sustainability",
      sub: "Building a Greener Future",
    },
    value: [
      {
        title: "Recyclable Materials for a Circular Economy",
        description:
          "We are dedicated to utilizing materials that support a circular economy, where no resource is wasted, and everything serves a purpose. Wood, the foundation of our construction, is fully renewable, enabling us to minimize waste and support a sustainable life cycle. This strategy not only decreases environmental impact by reducing the carbon footprint but also ensures our buildings foster a healthier planet for future generations.",
      },
      {
        title: "Reducing Carbon Footprint: A Commitment to Biodiversity",
        description:
          "We consistently pursue and apply eco-friendly construction methods that reduce carbon emissions. Our designs aim for a low carbon footprint, supporting the global fight against climate change. By selecting wood as the main construction material and techniques that enhance biodiversity and environmental well-being, we guarantee that our buildings are not only sustainable but also considerate of the ecosystems they reside in.",
      },
    ],
    image: "/images/about-1.png",
    imageDesktop: "/images/about-1-desktop.png",
    imageHeightMobile: 325,
    imageHeightDesktop: 703,
  },
  {
    id: 2,
    title: {
      main: "Comfort",
      sub: "Creating Spaces that Enhance Well-being",
    },
    value: [
      {
        title: "Superior Insulation for Optimal Comfort",
        description:
          "Comfort starts with effective insulation. We utilize wooden materials that offer exceptional thermal and soundproofing, guaranteeing our homes maintain a stable and comfortable indoor climate no matter the external weather. This creates peaceful, tranquil spaces that support relaxation and well-being all year round.",
      },
      {
        title: "Customized Environments Tailored to Your Needs",
        description:
          "Each home we construct mirrors the distinct lifestyle and needs of our customers. Our design process is highly tailored, enabling us to craft spaces that are not only functional but also closely aligned with our clients' daily lives. From the floor plan to the finishes, every detail is thoughtfully designed to improve comfort, practicality, and visual appeal.",
      },
      {
        title:
          "Modern Living Technologies: Seamless Integration for a Smart Home",
        description:
          "We believe that comfort in the modern world is closely tied to technology. Our homes are equipped with the latest advancements in home automation and climate control, offering residents the ability to manage their living environment with ease. Whether through a simple touch or a voice command, our integrated systems ensure that every aspect of your home is attuned to your preferences, enhancing your daily comfort and convenience.",
      },
    ],
    image: "/images/about-2.png",
    imageDesktop: "/images/about-2-desktop.png",
    imageHeightMobile: 338,
    imageHeightDesktop: 704,
  },
  {
    id: 3,
    title: {
      main: "Innovation",
      sub: "Pioneering the Future of Construction",
    },
    value: [
      {
        title:
          "Cutting-Edge CFS Technology: The Backbone of Modern Construction",
        description:
          "Innovation is the cornerstone of our construction philosophy. Cold-Formed Steel (CFS) technology represents a significant advancement in the building industry, offering a lightweight yet robust alternative to traditional materials. This technology allows for greater design flexibility, enabling us to create structures that are not only resilient but also adaptable to a wide range of architectural styles and environmental conditions.",
      },
      {
        title:
          "Continuous Research and Development: Staying Ahead of the Curve",
        description:
          "Our committed research and development team continuously investigates new techniques and technologies, ensuring that each project we handle stays at the forefront of innovation. This focus on R&D guarantees our clients receive the most advanced solutions, specifically designed to address the unique requirements of contemporary living.",
      },
    ],
    image: "/images/about-3.png",
    imageDesktop: "/images/about-3-desktop.png",
    imageHeightMobile: 306,
    imageHeightDesktop: 692,
  },
];

const journeyData = [
  {
    id: 1,
    title: "Discovering Your Vision: Let’s Get to Know Each Other",
    description:
      "Designing an establishment is a highly personal experience, and we believe it begins with grasping your vision. In our first consultation, we’ll delve into the inspiration behind your decision for wooden housing and discuss how our values resonate with your goals. This conversation is crucial for fostering a connection, ensuring the end result perfectly captures your dream.",
  },
  {
    id: 2,
    title: "Requesting a Free, Detailed Quote",
    description:
      "Once we have a full understanding of your project, we will offer a detailed, obligation-free quote. This thorough proposal will specify the costs, timelines, and technologies required to turn your vision into reality, providing you with a clear understanding of what lies ahead as we progress.",
  },
  {
    id: 3,
    title: "Commencing Construction: Bringing Your Dream to Life",
    description:
      "We emphasize on transparency and teamwork. During every stage of the project, from foundation to completion, you’ll stay informed and engaged, letting you enjoy watching your dream establishment come to life. We manage all elements of the project, providing a stress-free experience where you can rely on our expertise and professionalism.",
  },
  {
    id: 4,
    title: "Delivery and Ongoing Support: A Commitment to Excellence",
    description:
      "Our commitment to you continues even after we are done with the assembly. We uphold the quality of our work by providing a 3 years warranty. We also guarantee that any adjustments or concerns are swiftly resolved, ensuring you can enjoy your new home with total peace of mind.",
  },
];

export default function AboutUs() {
  const isMobile = useIsMobile();

  return (
    <div className='w-full bg-white'>
      <Banner />
      <Mission />

      <div className='h-[65px] w-full bg-[#f2f2f2] xl:h-[152px]'>
        <div className='inline-flex h-full w-full items-center justify-center gap-[15.28px] xl:gap-[39px]'>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f] xl:text-[40px] xl:leading-[62px]'>
              SUSTAINIBILITY
            </span>
            <span className='text-base font-black leading-normal text-[#d75337] xl:text-[40px] xl:leading-[62px]'>
              .
            </span>
          </div>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f] xl:text-[40px] xl:leading-[62px]'>
              COMFORT
            </span>
            <span className='text-base font-black leading-normal text-[#d75337] xl:text-[40px] xl:leading-[62px]'>
              .
            </span>
          </div>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f] xl:text-[40px] xl:leading-[62px]'>
              INNOVATION
            </span>
            <span className='text-base font-black leading-normal text-[#d75337] xl:text-[40px] xl:leading-[62px]'>
              .
            </span>
          </div>
        </div>
      </div>
      {data?.map((item, index) => (
        <div
          key={item.id}
          className={cn("flex flex-col xl:gap-[127px] xl:pt-[131px]", {
            "xl:mr-[67px] xl:flex-row": index % 2 === 0,
            "xl:ml-[123px] xl:flex-row-reverse": index % 2 === 1,
          })}
        >
          <div
            className={cn(`relative w-full max-w-[929px]`)}
            style={{
              height: isMobile
                ? `${item.imageHeightMobile}px`
                : `${item.imageHeightDesktop}px`,
            }}
          >
            <Image
              src={isMobile ? item.image : item.imageDesktop}
              alt=''
              fill
            />
          </div>
          <div className='relative inline-flex flex-col items-start justify-start gap-3 px-[34px] py-10 xl:justify-center xl:p-0'>
            <div
              className={cn(
                "absolute top-0 text-[67.17px] font-semibold leading-[115.45px] text-[#f3f3f3] xl:-left-[100px] xl:text-[128px] xl:leading-[221px]",
                {
                  "xl:top-[60px]": index % 2 === 1,
                  "xl:top-[117px]": index % 2 === 0,
                }
              )}
            >
              0{index + 1}
            </div>
            <div className='z-10 self-stretch'>
              <span className='text-base font-medium leading-[20.86px] text-[#d75337] xl:text-[28px] xl:leading-10'>
                {item.title.main}: {"  "}
              </span>
              <span className='text-base font-medium leading-[20.86px] text-[#352e39] xl:text-[28px] xl:leading-10'>
                {item.title.sub}
              </span>
            </div>
            <div className='z-10 flex flex-col items-start justify-center gap-[10.43px] xl:gap-5'>
              {item.value?.map((val, index) => (
                <div
                  key={val.title}
                  className='flex flex-col items-start justify-start self-stretch'
                >
                  <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39] xl:text-[18px] xl:leading-10'>
                    {index + 1}. {val.title}
                  </div>
                  <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a] xl:text-base'>
                    {val.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className='inline-flex w-full flex-col items-start justify-start gap-5 bg-neutral-50 px-[26px] py-5'>
        <div className='mx-auto w-full max-w-[1280px]'>
          <div className='mb-5 flex flex-col items-center justify-start gap-[5px] self-stretch xl:mb-10'>
            <div className='inline-flex items-center justify-center self-stretch'>
              <Image
                src={
                  isMobile
                    ? "/images/about-line-1.svg"
                    : "/images/about-line-1-desktop.svg"
                }
                alt=''
                height={1}
                width={50}
                className='430:w-[73px] xl:w-[272px]'
              />
              <div className='text-center text-xl font-semibold leading-[30.84px] text-[#352e39] xl:text-[32px] xl:leading-[46px]'>
                Your Journey with Us:
                <br className='block xl:hidden' /> From Vision to Reality
              </div>
              <Image
                src={
                  isMobile
                    ? "/images/about-line-2.svg"
                    : "/images/about-line-2-desktop.png"
                }
                alt=''
                height={1}
                width={50}
                className='430:w-[73px] xl:w-[272px]'
              />
            </div>
            <div className='text-center text-xs font-light leading-[17.93px] text-[#353535] xl:text-[18px] xl:leading-[27px]'>
              Delivering the Finest Wooden Buildings, Crafted to Perfection
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-[15px] self-stretch'>
            {journeyData?.map((item, index) => (
              <div
                key={item.id}
                className='flex flex-col items-start justify-start self-stretch'
              >
                <h4 className='w-full text-xs font-medium leading-[25px] text-[#352e39] xl:text-[18px] xl:leading-10'>
                  {index + 1}. {item.title}
                </h4>
                <p className='w-full text-[11px] font-light leading-tight text-[#5a5a5a] xl:text-base'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
}
