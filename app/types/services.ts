interface IFloor {
  hall: boolean;
  toilet: boolean;
  tvUnit: boolean;
  washbasinCabinet: boolean;
  doubleBedroom: boolean;
  area: number;
  diningArea: boolean;
  floorElevation: string;
  miniBar: boolean;
  bathroomLaundryRoom: boolean;
  technicalRoom: boolean;
  livingRoom: boolean;
  washArea: boolean;
  floorElevationName: string;
  livingArea: boolean;
  kitchen: boolean;
  floorPlanName: string;
  storageRoom: boolean;
  deck: boolean;
  stair: boolean;
  description: string;
  fixedWardrobes: boolean;
  floorPlan: string;
  luggageRack: boolean;
  lounge: boolean;
  kitchenWardrobe: boolean;
  store: boolean;
  studyTable: boolean;
  openArea: boolean;
}
interface IProjectDetailsType {
  fireResistance: boolean;
  warrantyYears: number;
  bhk: number;
  earthquakeResistance: boolean;
  livingRoom: number;
  bedrooms: number;
  floors: IFloor[];
  toilets: number;
  soundResistance: boolean;
  areaHeight: number;
  heatAndColdResistance: boolean;
  priceSqft: string;
  areaWidth: number;
  kitchens: number;
  carpetArea: number;
  typeOfConstruction: "residential" | "commercial" | string;
  halls: number;
  totalArea: number;
  decks: number;
  noOfFloors: number;
}

type ServiceType = {
  id: string;
  category: string;
  description: string;
  img: string;
  gallery3d: string[];
  gallery: string[];
  title: string;
  projectDetails: IProjectDetailsType;
  video: string;
  models3d: string;
  frontendIdentifier: string;
};

type CategoryType = {
  coverImage: string;
  description: string;
  id: string;
  name: string;
  sequence: number;
};

export type { ServiceType, CategoryType, IProjectDetailsType, IFloor };
