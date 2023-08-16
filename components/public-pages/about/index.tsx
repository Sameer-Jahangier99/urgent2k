import React from "react";

// Components
import HeroSection from "./components/HeroSection";
import AboutFoundation from "./components/AboutFoundation";
import CounterSection from "./components/CounterSection";

function index() {
  return (
    <main>
      <HeroSection />
      <AboutFoundation />
      <CounterSection />
    </main>
  );
}

export default index;
