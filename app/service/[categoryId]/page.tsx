import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { ServiceLayout } from "./ServiceLayout";
import { db } from "@/app/configs/firebase";
import { CategoryType, ServiceType } from "@/app/types/services";

async function ServicePage({ params }: { params: { categoryId: string } }) {
  const categoryId = params?.categoryId;

  const collectionRef = collection(db, "categories");
  const q = query(collectionRef, where(documentId(), "==", categoryId));

  const categoryCollectionSnapshot = await getDocs(q);

  const categoryList = categoryCollectionSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as CategoryType[];

  const serviceCollectionRef = collection(db, "services");
  const serviceQ = query(
    serviceCollectionRef,
    where("categoryId", "==", categoryId)
  );
  const serviceCollectionSnapshot = await getDocs(serviceQ);
  const serviceList = serviceCollectionSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as ServiceType[];

  return (
    <ServiceLayout
      categoryDetail={categoryList?.[0]}
      serviceList={serviceList}
    />
  );
}

export default ServicePage;
