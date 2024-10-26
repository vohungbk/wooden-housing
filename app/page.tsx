import Banner from "./components/Banner";
import ConstructionDetails from "./components/ConstructionDetails";
import FocusWooden from "./components/FocusWooden";
import Glimpse from "./components/Glimpse";
import HowDesignWork from "./components/HowDesignWork";
import LetStart from "./components/LetStart";
import Series from "./components/Series";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Unique from "./components/Unique";
import WhyChoose from "./components/WhyChoose";
import WhyChoosePrefabricated from "./components/WhyChoosePrefabricated";

export default function Home() {
  return (
    <div className='relative h-full w-full overflow-x-hidden bg-white'>
      <Banner />
      <WhyChoose />
      <Technologies />
      <Unique />
      <Services />
      <Series />
      <FocusWooden />
      <HowDesignWork />
      <Glimpse />
      <ConstructionDetails />
      <WhyChoosePrefabricated />
      <LetStart />
    </div>
  );
}
