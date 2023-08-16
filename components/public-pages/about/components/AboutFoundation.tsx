import React from "react";
import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

function AboutFoundation() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="col-md-5">
          <div className="d-flex">
            <span></span>
            <span className="caption">About Us</span>
          </div>
          <h2>Lorem ipsum dolor consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Suspendisse orci leo mus
            quis etiam nibh in tempor vitae.
          </p>
          <ul className="px-3">
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
          </ul>

          <button type="button" className={`${styles.aboutFoundationBtn} p-4`}>
            ABOUT FOUNDATION
          </button>
        </div>
        <div className="col-md-7 d-flex gap-4">
          <div
            className={styles?.aboutFoundationImg}
          >
            <Image
              src="/about-computer-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className={styles?.aboutFoundationImg}
          >
            <Image
              src="/about-discussion-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFoundation;
