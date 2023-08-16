import React from "react";

// Components

import BannerSection from "../common/Banner";
import AboutFoundation from "./components/AboutFoundation";
import CounterSection from "./components/CounterSection";

function index() {
  return (
    <main>
      <BannerSection title="About Us" />
      <AboutFoundation />
      <CounterSection />
    </main>
  );
}

export default index;
