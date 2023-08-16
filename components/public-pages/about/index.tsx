"use client";

// Components

import BannerSection from "../common/Banner";
import AboutFoundation from "./components/AboutFoundation";
import CounterSection from "./components/CounterSection";
import TabsComponent from "./components/TabsComponent";

function index() {
  return (
    <main>
      <BannerSection title="About Us" />
      <AboutFoundation />
      <CounterSection />
      <TabsComponent />
    </main>
  );
}

export default index;
