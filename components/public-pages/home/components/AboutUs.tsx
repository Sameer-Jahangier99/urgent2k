// Styles
import styles from "@/styles/public-pages/home/home.module.css";

function AboutUs() {
  return (
    <section className={styles.homeAboutSectionMainContainer}>
      <div
        className={`${styles.homeAboutSectionContainer} row mx-0 container-wide`}
      >
        <div className={styles.homeAboutDummyContainer}></div>
        <div className="col-md-12 py-5">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex py-3">
                <span className={styles.aboutDividerLine}></span>
                <span
                  className={`${styles.aboutUsCaption} caption weight-600 ms-1 text-white`}
                >
                  About Us
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="weight-800 text-white">
                Lorem ipsum dolor sit amet consectetur. Mattis dui fames tellus
                id tortor mi varius pharetra.
              </h2>
            </div>
            <div className="col-md-6">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur. Sed arcu lacus eget in
                dignissim aliquet sed amet. Posuere ornare adipiscing eu
                suscipit pharetra. Tellus tortor proin lobortis eget mattis ut.
                Eleifend etiam mauris elit dis et leo massa interdum. Ultricies
                urna amet ac praesent sit tincidunt ac in. Magna lacinia
                sagittis sed odio.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.homeAboutDummyContainer}></div>
      </div>
    </section>
  );
}

export default AboutUs;
