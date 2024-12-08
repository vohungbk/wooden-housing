import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Consultation from "../service/[categoryId]/inner-page/[frontendIdentifier]/components/Consultation";

const MissionIcon = () => (
  <div>
    <FontAwesomeIcon
      icon={faAngleRight}
      color='#D75337B0'
      className='text-[15px] xl:text-[8px]'
    />
    <FontAwesomeIcon
      icon={faAngleRight}
      color='#D75337'
      className='text-[15px] xl:text-[8px]'
    />
  </div>
);

export default function AboutUs() {
  return (
    <div className='w-full bg-white'>
      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(38, 33, 41, 0.8), rgba(38, 33, 41, 0.8)), url(/images/about-bg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className='h-[209px] w-full'
      >
        <div className='mt-1.5 inline-flex items-center justify-start gap-1.5 pl-[31px]'>
          <p className='text-center text-[10px] font-normal leading-[18.67px] text-white xl:text-[14px]'>
            Home
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            color='#D75337'
            className='text-[5px] xl:text-[8px]'
          />
          <p className='text-[10px] font-semibold leading-[18.67px] text-white xl:text-[14px]'>
            About Us
          </p>
        </div>
        <div className='mt-[43px] inline-flex h-full w-full flex-col items-center gap-[5px]'>
          <div className='inline-flex items-center justify-center self-stretch'>
            <div className='text-center'>
              <span className='text-[22px] font-semibold leading-[30.84px] text-white'>
                About{" "}
              </span>
              <span className='text-[22px] font-semibold leading-[30.84px] text-[#ec6346]'>
                Us
              </span>
            </div>
          </div>
          <div className='w-[282.89px] text-center text-xs font-light leading-[17.93px] text-white'>
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </div>
        </div>
      </div>

      <div className='w-full bg-neutral-50 px-[26px] py-[33px]'>
        <div className='inline-flex flex-col items-start justify-start gap-[25px]'>
          <div className='flex flex-col items-start justify-start self-stretch rounded-[15px] bg-white px-[25px] py-5 shadow'>
            <div className='inline-flex items-center justify-start gap-[11.45px]'>
              <MissionIcon />
              <div className='text-lg font-semibold leading-[42px] text-[#352e39]'>
                Our Mission
              </div>
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#585858]'>
              At our core, we are deeply committed to revolutionizing the
              building industry by seamlessly combining sustainability,
              innovation, and comfort. We are motivated by the belief that the
              future of construction should focus on both the residents
              well-being and the health of our planet.
              <br />
              <br /> Our aim is to transform living spaces by going beyond the
              constraints of conventional materials such as bricks and concrete.
              Today wooden houses are more innovative and advanced technologies
              and eco-friendly practices that improve both quality of life and
              environmental care.
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch rounded-[15px] bg-white px-[25px] py-5 shadow'>
            <div className='inline-flex items-center justify-start gap-[11.45px]'>
              <MissionIcon />
              <div className='text-lg font-semibold leading-[42px] text-[#352e39]'>
                Our Vision
              </div>
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#585858]'>
              Our vision is to drive a transformation in the construction
              industry, where sustainability and innovation are not merely
              aspirations but essential elements of each project we complete. We
              foresee a future where homes are more than buildings - they are
              vibrant ecosystems that support their residents while reducing
              their environmental impact.
              <br />
              <br />
              By promoting sustainable practices and cutting-edge technologies,
              we strive to design living spaces that coexist in harmony with
              nature, providing unmatched comfort and contemporary style.
            </div>
          </div>
        </div>
      </div>

      <div className='h-[65px] w-full bg-[#f2f2f2]'>
        <div className='inline-flex h-full w-full items-center justify-center gap-[15.28px]'>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f]'>
              SUSTAINIBILITY
            </span>
            <span className='text-base font-black leading-normal text-[#d75337]'>
              .
            </span>
          </div>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f]'>
              COMFORT
            </span>
            <span className='text-base font-black leading-normal text-[#d75337]'>
              .
            </span>
          </div>
          <div>
            <span className='text-base font-medium leading-normal text-[#51281f]'>
              INNOVATION
            </span>
            <span className='text-base font-black leading-normal text-[#d75337]'>
              .
            </span>
          </div>
        </div>
      </div>
      <div className='relative h-[325px] w-full'>
        <Image src={"/images/about-1.png"} alt='' fill />
      </div>

      <div className='relative inline-flex flex-col items-start justify-start gap-3 px-[34px] py-10'>
        <div className='absolute top-0 text-[67.17px] font-semibold leading-[115.45px] text-[#f3f3f3]'>
          01
        </div>
        <div className='z-10 self-stretch'>
          <span className='text-base font-medium leading-[20.86px] text-[#d75337]'>
            Sustainability:
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Building a{" "}
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#2e392e]'>
            Greener
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Future
          </span>
        </div>
        <div className='z-10 flex flex-col items-start justify-center gap-[10.43px]'>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              1. Recyclable Materials for a Circular Economy
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We are committed to using materials that contribute to a circular
              economy, where nothing is wasted, and everything has a purpose.
              Cold-Formed Steel (CFS), the backbone of our construction, is 100%
              recyclable, allowing us to reduce waste and promote a sustainable
              life cycle. This approach not only lowers the environmental impact
              but also ensures that our buildings contribute to a healthier
              planet for future generations.
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              2. Energy Efficiency: Achieving NZEB Standards
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Our dedication to sustainability is reflected in our design
              philosophy, where energy efficiency is paramount. We construct
              buildings that meet and exceed the Near Zero Energy Building
              (NZEB) standards, achieving energy class A4. Through the
              integration of intelligent architectural design and the latest in
              energy-saving technologies, we significantly reduce the energy
              consumption of our homes, making them not only cost-effective but
              also environmentally responsible.
              <br />
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              3. Reducing Carbon Footprint: A Commitment to Biodiversity
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We actively seek out and implement eco-friendly construction
              solutions that minimize carbon emissions. Our projects are
              designed to have a low carbon footprint, contributing to the
              global effort to combat climate change. By choosing materials and
              methods that promote biodiversity and environmental health, we
              ensure that our constructions are not only sustainable but also
              respectful of the ecosystems they inhabit.
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[338px] w-full'>
        <Image src={"/images/about-2.png"} alt='' fill />
      </div>
      <div className='relative inline-flex flex-col items-start justify-start gap-3 px-[34px] py-10'>
        <div className='absolute top-0 text-[67.17px] font-semibold leading-[115.45px] text-[#f3f3f3]'>
          02
        </div>
        <div className='z-10 self-stretch'>
          <span className='text-base font-medium leading-[20.86px] text-[#d75337]'>
            Sustainability:
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Building a{" "}
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#2e392e]'>
            Greener
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Future
          </span>
        </div>
        <div className='z-10 flex flex-col items-start justify-center gap-[10.43px]'>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              1. Recyclable Materials for a Circular Economy
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We are committed to using materials that contribute to a circular
              economy, where nothing is wasted, and everything has a purpose.
              Cold-Formed Steel (CFS), the backbone of our construction, is 100%
              recyclable, allowing us to reduce waste and promote a sustainable
              life cycle. This approach not only lowers the environmental impact
              but also ensures that our buildings contribute to a healthier
              planet for future generations.
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              2. Energy Efficiency: Achieving NZEB Standards
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Our dedication to sustainability is reflected in our design
              philosophy, where energy efficiency is paramount. We construct
              buildings that meet and exceed the Near Zero Energy Building
              (NZEB) standards, achieving energy class A4. Through the
              integration of intelligent architectural design and the latest in
              energy-saving technologies, we significantly reduce the energy
              consumption of our homes, making them not only cost-effective but
              also environmentally responsible.
              <br />
            </div>
          </div>
          <div className='flex h-[161px] flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              3. Reducing Carbon Footprint: A Commitment to Biodiversity
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We actively seek out and implement eco-friendly construction
              solutions that minimize carbon emissions. Our projects are
              designed to have a low carbon footprint, contributing to the
              global effort to combat climate change. By choosing materials and
              methods that promote biodiversity and environmental health, we
              ensure that our constructions are not only sustainable but also
              respectful of the ecosystems they inhabit.
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[306px] w-full'>
        <Image src={"/images/about-3.png"} alt='' fill />
      </div>

      <div className='relative inline-flex flex-col items-start justify-start gap-3 px-[34px] py-10'>
        <div className='absolute top-0 text-[67.17px] font-semibold leading-[115.45px] text-[#f3f3f3]'>
          03
        </div>
        <div className='z-10 self-stretch'>
          <span className='text-base font-medium leading-[20.86px] text-[#d75337]'>
            Sustainability:
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Building a{" "}
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#2e392e]'>
            Greener
          </span>
          <span className='text-base font-medium leading-[20.86px] text-[#352e39]'>
            {" "}
            Future
          </span>
        </div>
        <div className='z-10 flex flex-col items-start justify-center gap-[10.43px]'>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              Recyclable Materials for a Circular Economy
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We are committed to using materials that contribute to a circular
              economy, where nothing is wasted, and everything has a purpose.
              Cold-Formed Steel (CFS), the backbone of our construction, is 100%
              recyclable, allowing us to reduce waste and promote a sustainable
              life cycle. This approach not only lowers the environmental impact
              but also ensures that our buildings contribute to a healthier
              planet for future generations.
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              2. Energy Efficiency: Achieving NZEB Standards
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Our dedication to sustainability is reflected in our design
              philosophy, where energy efficiency is paramount. We construct
              buildings that meet and exceed the Near Zero Energy Building
              (NZEB) standards, achieving energy class A4. Through the
              integration of intelligent architectural design and the latest in
              energy-saving technologies, we significantly reduce the energy
              consumption of our homes, making them not only cost-effective but
              also environmentally responsible.
              <br />
            </div>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <div className='self-stretch text-xs font-medium leading-[20.86px] text-[#352e39]'>
              3. Reducing Carbon Footprint: A Commitment to Biodiversity
            </div>
            <div className='self-stretch text-[11px] font-light leading-tight text-[#5a5a5a]'>
              We actively seek out and implement eco-friendly construction
              solutions that minimize carbon emissions. Our projects are
              designed to have a low carbon footprint, contributing to the
              global effort to combat climate change. By choosing materials and
              methods that promote biodiversity and environmental health, we
              ensure that our constructions are not only sustainable but also
              respectful of the ecosystems they inhabit.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className='inline-flex w-full flex-col items-start justify-start gap-5 bg-neutral-50 px-[26px] py-5'>
        <div className='flex flex-col items-center justify-start gap-[5px] self-stretch'>
          <div className='inline-flex items-center justify-center self-stretch'>
            <Image
              src={"/images/about-line-1.svg"}
              alt=''
              height={1}
              width={50}
              className='430:w-[73px]'
            />
            <div className='text-center text-xl font-semibold leading-[30.84px] text-[#352e39]'>
              Your Journey with Us:
              <br /> From Vision to Reality
            </div>
            <Image
              src={"/images/about-line-2.svg"}
              alt=''
              height={1}
              width={50}
              className='430:w-[73px]'
            />
          </div>
          <div className='text-center text-xs font-light leading-[17.93px] text-[#353535]'>
            Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
            odio laborum
          </div>
        </div>
        <div className='flex flex-col items-start justify-start gap-[15px] self-stretch'>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <h4 className='mb-2 w-full text-xs font-medium text-[#352e39]'>
              1. Discovering Your Vision: Let’s Get to Know Each Other
            </h4>
            <p className='w-full text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Building a home is a deeply personal journey, and we believe it
              starts with understanding your vision. During our initial
              consultation, we’ll explore what inspired you to choose a wooden
              house, and discuss how our values align with your aspirations.
              This dialogue is essential for creating a synergy between us,
              ensuring that the final product is a true reflection of your
              dream.
            </p>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <h4 className='mb-2 w-full text-xs font-medium text-[#352e39]'>
              2. Requesting a Free, Detailed Quote
            </h4>
            <p className='w-full text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Once we have a clear understanding of your project, we will
              provide a comprehensive, obligation-free quote. This detailed
              proposal will outline the costs, timeframes, and technologies
              involved in bringing your vision to life, giving you a clear
              picture of what to expect as we move forward.
            </p>
          </div>
          <div className='flex flex-col items-start justify-start self-stretch'>
            <h4 className='mb-2 w-full text-xs font-medium text-[#352e39]'>
              3. Commencing Construction: Bringing Your Dream to Life
            </h4>
            <p className='w-full text-[11px] font-light leading-tight text-[#5a5a5a]'>
              When you’re ready to proceed, we’ll begin the construction process
              with a focus on transparency and collaboration. Throughout every
              phase of the project, from foundation to finish, you’ll be kept
              informed and involved, allowing you to enjoy the experience of
              seeing your dream home take shape. We handle all aspects of the
              project, ensuring a stress-free experience where you can trust our
              expertise and professionalism.
            </p>
          </div>
          <div className='flex h-[145px] flex-col items-start justify-start self-stretch'>
            <h4 className='mb-2 w-full text-xs font-medium text-[#352e39]'>
              4. Delivery and Ongoing Support: A Commitment to Excellence
            </h4>
            <p className='w-full text-[11px] font-light leading-tight text-[#5a5a5a]'>
              Our commitment to you doesn’t end when we hand over the keys. We
              stand by the quality of our work, offering two post-sales
              assistance visits per year for the first two years following the
              completion of your home. This ensures that any adjustments or
              issues are promptly addressed, allowing you to enjoy your new home
              with complete peace of mind.
            </p>
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
}
