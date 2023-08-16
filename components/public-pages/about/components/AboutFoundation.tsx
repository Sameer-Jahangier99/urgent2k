import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

function AboutFoundation() {
  return (
    <section className="container-wide py-5 off-white-background">
      <div className="row">
        <div className="col-md-5 my-3">
          <div className="d-flex">
            <span className={styles.aboutDividerLine}></span>
            <span className={`${styles.aboutUsCaption} caption weight-600 ms-1`}>About Us</span>
          </div>
          <h2 className="weight-800 mt-2">Lorem ipsum dolor consectetur.</h2>
        
          <p className="text-dull-black ">
            Lorem ipsum dolor sit amet consectetur. Suspendisse orci leo mus
            quis etiam nibh in tempor vitae.
          </p>
    
          <ul className={`${styles.aboutFoundationUnorderList} px-3`}>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
            <li>Lorem ipsum dolor sit amet </li>
          </ul>

          <button
            type="button"
            className={`${styles.aboutFoundationBtn} px-4 py-3`}
          >
            ABOUT FOUNDATION
          </button>
        
        </div>
        <div className="col-md-7 d-flex gap-4 justify-content-center my-3">
          <div className={styles?.aboutFoundationImgContainer}>
            <Image
              src="/about-computer-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className={styles?.aboutFoundationImg}
            />
          </div>
          <div className={styles?.aboutFoundationImg2Container}>
            <Image
              src="/about-discussion-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className={styles?.aboutFoundationImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFoundation;
