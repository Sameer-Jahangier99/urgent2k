import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

function OurExpertise() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="col-md-12">
          <p className="caption text-grey text-center">OUR EXPERTISE</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <h2 className="weight-700 text-center">
              Lorem ipsum dolor sit amet consectetur.{" "}
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mt-3 d-flex justify-content-center">
            <div className={styles?.ourExpertiseImg}>
              <Image
                src="/about-discussion-img.png"
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
                className={styles?.aboutFoundationImg}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.ourExpertise1InfoContainer} p-3 mt-3`}>
              <p className="weight-700 text-white">
                Lorem ipsum dolor sit amet{" "}
              </p>
              <p className="weight-400 caption text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className={`${styles.ourExpertiseInfoContainer} p-3 mt-3`}>
              <p className="weight-700">Lorem ipsum dolor sit amet </p>
              <p className="weight-400 caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`${styles.ourExpertiseInfoContainer} p-3 mt-3`}>
              <p className="weight-700">Lorem ipsum dolor sit amet </p>
              <p className="weight-400 caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            <div className={`${styles.ourExpertiseInfoContainer} p-3 mt-3`}>
              <p className="weight-700">Lorem ipsum dolor sit amet </p>
              <p className="weight-400 caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
