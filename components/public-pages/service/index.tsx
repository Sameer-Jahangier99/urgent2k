// Components
import BannerSection from "../common/BannerSection";
import CaseStudy from "./components/CaseStudy";
import ChooseUsSection from "./components/ChooseUsSection";
import ServiceSection from "./components/ServiceSection";
import WorkSection from "./components/WorkSection";

function index() {
  return (
    <main>
      <BannerSection title="Our Services" />
      <WorkSection />
      <ServiceSection />
      <ChooseUsSection />
      <CaseStudy />
    </main>
  );
}

export default index;
