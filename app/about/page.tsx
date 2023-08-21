import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

// Component
import AboutPage from "@/components/public-pages/about/index";

const About: NextPage = () => {
  return <AboutPage />;
};

export default About;
