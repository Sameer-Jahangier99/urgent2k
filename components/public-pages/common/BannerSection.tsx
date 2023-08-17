import React from "react";
// Styles
import styles from "@/styles/public-pages/about/about.module.css";

const BannerSection = ({ title }: { title: string }) => {
  return (
    <div className={styles.aboutHeroSectionContainer}>
      <h1 className="text-white weight-800">{title}</h1>
    </div>
  );
};

export default BannerSection;
