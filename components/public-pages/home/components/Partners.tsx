import Slider from "react-slick";
import Image from "next/image";

export const servicesSliderSettings = {
  centerMode: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        infinite: true,
        // slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
        // slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
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

function Partners() {
  return (
    <section className="container-wide py-5">
      <div className="row">
        <div className="col-md-12">
          <Slider {...servicesSliderSettings}>
            <div
              data-custom-property="calendly"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/partners/calendly.png"
                alt="calendly"
                width={160}
                height={45}
              />
            </div>
            <div
              data-custom-property="catalog"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/partners/catalog.png"
                alt="calendly"
                width={160}
                height={45}
              />
            </div>

            <div
              data-custom-property="github"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/partners/github.png"
                alt="calendly"
                width={160}
                height={45}
              />
            </div>

            <div
              data-custom-property="monday"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/partners/monday.png"
                alt="calendly"
                width={160}
                height={45}
              />
            </div>

            <div
              data-custom-property="quotient"
              className="d-flex justify-content-center align-items-center"
            >
              <Image
                src="/partners/quotient.png"
                alt="calendly"
                width={160}
                height={45}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Partners;
