import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
// Styles
import styles from "@/styles/public-pages/home/home.module.css";

// Components
import Testimonial from "./Testimonial";

export const servicesSliderSettings = {
  centerMode: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        infinite: true,
        // slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        // slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        infinite: true,
        // slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        infinite: true,
        // slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

function Testimonials() {
  const slider = useRef<any>();

  const next = () => {
    slider.current.slickNext();
  };

  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <section className={`${styles.testimonialMainContainer} py-5`}>
      <div className="row g-0 d-flex justify-content-center py-1 py-md-5">
        <div className="col-1 d-flex align-items-center align-self-center flex-column">
          <Image
            src="/icons/left-arrow.png"
            alt="Your Image Alt Text"
            height={70}
            width={100}
            className={`${styles.testimonialArrows} cursor-pointer`}
            onClick={previous}
          />
        </div>
        <div className="col-8">
          <Slider
            ref={(c) => {
              slider.current = c;
            }}
            {...servicesSliderSettings}
          >
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </Slider>
        </div>
        <div className="col-1 d-flex align-items-center align-self-center flex-column">
          <Image
            src="/icons/right-arrow.png"
            alt="Your Image Alt Text"
            height={70}
            width={100}
            className={`${styles.testimonialArrows} cursor-pointer`}
            onClick={next}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
