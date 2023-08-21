import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/home/home.module.css";

function Features() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="col-md-7">
          <h2 className="weight-700">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <h3 className="weight-600 mt-5">
            Efficient Public BusBooking Operation
          </h3>
          <p className="span mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <h3 className="weight-600 mt-4">
            Streamlining Public Bus Booking and Management
          </h3>
          <p className="span mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <h3 className="weight-600 mt-4">
            Simplifying Public Transport Booking and Administration
          </h3>
          <p className="span mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div className="col-md-5">
          <div className={styles?.FeatureImgContainer}>
            <Image
              src="/about-computer-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className={styles?.featureImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
