import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/home/home.module.css";

// Component
import RoundCard from "./RoundCard";

function AboutFoundation() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="col-md-5 my-3 my-md-5">
          <div className="d-flex py-3">
            <span className={styles.aboutFoundationDividerLine}></span>
            <span
              className={`${styles.aboutUsCaption} caption weight-600 ms-1`}
            >
              Lorem ipsum dolor
            </span>
          </div>
          <h2 className="weight-700">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-dull-black">
            Lorem ipsum dolor sit amet consectetur. Netus non ornare diam est
            ultricies lectus porta molestie.
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
        <div className="col-md-7 my-3 my-md-5 ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-end p-0">
              <RoundCard
                icon="/icons/file 1.png"
                title="8,550"
                caption="Project Completed"
              />
            </div>
            <div className="col-6 d-flex justify-content-center p-0">
              <RoundCard
                icon="/icons/customer-review.png"
                title="3860"
                caption="Satisfied Clients"
              />
            </div>
            <div className="col-6 d-flex justify-content-center p-0">
              <RoundCard
                icon="/icons/group-1.png"
                title="90+"
                caption=" Team Member"
              />
            </div>
            <div className="col-12 d-flex justify-content-center align-items-start p-0">
              <RoundCard
                icon="/icons/antenna.png"
                title="180+"
                caption="Bands Joined"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutFoundation;
