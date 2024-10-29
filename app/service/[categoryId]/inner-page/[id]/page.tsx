import { db } from "@/app/configs/firebase";
import { LIST_ROUTER } from "@/app/shared/constant";
import { CategoryType, ServiceType } from "@/app/types/services";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import Consultation from "./components/Consultation";
import HowItWorks from "./components/HowItWorks";
import { InnerBanner } from "./components/InnerBanner";
import { ProjectDetails } from "./components/ProjectDetails";
import SafetyFeatures from "./components/SafetyFeatures";
import { FloorPlan } from "./components/FloorPlan";
import { View3D } from "./components/View3D";

async function ServiceInnerPage({ params: { id = "", categoryId = "" } }) {
  let serviceDetail = null;
  let categoryDetail = null;

  const docRef = doc(db, "services", id);
  const docCategoryRef = doc(db, "serviceCategories", categoryId);
  const docSnap = await getDoc(docRef);
  const docCategorySnap = await getDoc(docCategoryRef);

  if (docSnap.exists()) {
    serviceDetail = { id: docSnap.id, ...docSnap.data() } as ServiceType;
  }

  if (docCategorySnap.exists()) {
    categoryDetail = {
      id: docCategorySnap.id,
      ...docCategorySnap.data(),
    } as CategoryType;
  }

  return (
    <section className='bg-white'>
      <InnerBanner
        categoryId={categoryId}
        categoryName={String(categoryDetail?.name)}
        serviceName={String(serviceDetail?.title)}
        bannerImage={String(serviceDetail?.img)}
      />
      <div className='items-center justify-center pl-[27px] pr-[25px] xl:flex'>
        <div className='w-full max-w-full xl:max-w-[1280px]'>
          <div className='mb-[29px] inline-flex items-center justify-start gap-1.5 pl-[1px] xl:mb-[43px] xl:mt-[11px]'>
            <Link
              href={"/"}
              className='text-center text-xs font-normal leading-[18.67px] text-[#232323]'
            >
              Home
            </Link>
            <FontAwesomeIcon icon={faAngleRight} color='#D75337' fontSize={9} />
            <Link
              href={LIST_ROUTER.SERVICE}
              className='text-center text-xs font-normal leading-[18.67px] text-[#232323]'
            >
              {categoryDetail?.name}
            </Link>
            <FontAwesomeIcon icon={faAngleRight} color='#D75337' fontSize={9} />
            <div className='text-xs font-semibold leading-[18.67px] text-[#232323]'>
              {serviceDetail?.title}
            </div>
          </div>
          <SafetyFeatures />
          <ProjectDetails
            projectDetails={serviceDetail?.projectDetails!}
            gallery={serviceDetail?.gallery!}
          />
          <FloorPlan floorData={serviceDetail?.projectDetails?.floors!} />
        </div>
      </div>
      <View3D
        gallery3d={serviceDetail?.gallery3d!}
        link3D={serviceDetail?.models3d?.[0]!}
      />
      {/* 3D Video */}
      <div className='flex-center mb-8 mt-[30px] h-[242px] w-full xl:mb-[55px] xl:mt-[98px] xl:h-[828px]'>
        <div className='h-full w-full xl:max-w-[1280px]'>
          <video autoPlay muted loop className='h-full w-full object-cover'>
            <source src={serviceDetail?.video} type='video/mp4' />
          </video>
        </div>
      </div>
      <HowItWorks />
      <Consultation />
    </section>
  );
}

export default ServiceInnerPage;
