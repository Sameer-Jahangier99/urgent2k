"use client";
// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import BannerSection from "../common/BannerSection";
import AboutFoundation from "./components/AboutFoundation";
import CounterSection from "./components/CounterSection";
import TabsComponent from "./components/TabsComponent";
import OurTeam from "./components/OurTeam";
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
