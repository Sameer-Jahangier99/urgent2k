import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

function CounterSection() {
  return (
    <section className="container-wide py-5 off-white-background">
      <div className="row d-flex justify-content-center">
        <div className="col-md-9 my-3">
          <h2 className="weight-700 text-center">
            Lorem ipsum dolor sit amet consectetur. Cras vel odio tincidunt
            bibendum.
          </h2>
        </div>
        <div className="col-md-12 my-3 d-flex gap-5 flex-wrap justify-content-center ">
          <div className={`${styles.aboutCounterContainer} p-3`}>
            <h1 className="m-0 primary-color">15K+</h1>
            <h4 className="m-0 weight-400">People</h4>
          </div>
          <div className={`${styles.aboutCounterContainer} p-3`}>
            <h1 className="m-0 primary-color">145+</h1>
            <h4 className="m-0 weight-400">Society</h4>
          </div>
          <div className={`${styles.aboutCounterContainer} p-3`}>
            <h1 className="m-0 primary-color">50K+</h1>
            <h4 className="m-0 weight-400">Project</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
