"use client";

// Components
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutCards from "./components/AboutCards";
import Features from "./components/Features";
import OurTeam from "../common/OurTeam";
import AboutFoundation from "./components/AboutFoundation";
import Partners from "./components/Partners";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <AboutCards />
      <Features />
      <OurTeam />
      <AboutFoundation />
      <Partners />
    </main>
  );
};

export default HomePage;
