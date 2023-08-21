import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/home/home.module.css";

function HeroSection() {
  return (
    <section className="container-wide pt-5">
      <div className="row">
        <div className="col-md-9">
          <h1 className="weight-700">
            Lorem ipsum dolor sit amet consectetur. Vulputate odio nisl lacinia
            aliquam nec.{" "}
          </h1>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0">
          <Image
            src="/icons/play-icon.png"
            alt="Your Image Alt Text"
            width={60}
            height={60}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-8 ">
          <div className={styles?.heroImgContainer}>
            <Image
              src="/about-discussion-img.png"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className={styles?.heroImg}
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default HeroSection;
