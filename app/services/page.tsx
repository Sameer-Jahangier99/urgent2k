import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
};
// Component
import ServicePage from "@/components/public-pages/service/index";

const Service: NextPage = () => {
  return <ServicePage />;
};

export default Service;
