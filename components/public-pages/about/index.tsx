"use client";

// Components
import BannerSection from "../common/BannerSection";
import AboutFoundation from "./components/AboutFoundation";
import CounterSection from "./components/CounterSection";
import TabsComponent from "./components/TabsComponent";
import OurTeam from "../common/OurTeam";
import OurExpertise from "./components/OurExpertise";

function index() {
  return (
    <main>
      <BannerSection title="About Us" />
      <AboutFoundation />
      <CounterSection />
      <TabsComponent />
      <OurTeam />
      <OurExpertise />
    </main>
  );
}

export default index;
