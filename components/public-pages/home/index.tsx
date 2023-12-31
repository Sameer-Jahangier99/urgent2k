"use client";

// Components
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutCards from "./components/AboutCards";
import Features from "./components/Features";
import OurTeam from "../common/OurTeam";
import AboutFoundation from "./components/AboutFoundation";
import Partners from "./components/Partners";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <AboutCards />
      <Features />
      <OurTeam />
      <AboutFoundation />
      <Testimonials />
      <Partners />
      <Blogs />
    </main>
  );
};

export default HomePage;
