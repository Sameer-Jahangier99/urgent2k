import Slider from "react-slick";
import Member from "./Member";

export const servicesSliderSettings = {
  centerMode: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
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

export default function TeamMembers() {
  return (
    <Slider {...servicesSliderSettings}>
      <Member title="Alextina Ditarson" caption="CONSULTANT" image="/team1.png" />

      <Member title="Esther Howard" caption="DIRECTOR" image="/team2.png" />

      <Member title="Guy Hawkins" caption="FINANCIAL PLANER" image="/team3.png" />

      <Member title="Alextina Ditarson" caption="CONSULTANT" image="/team1.png" />

      <Member title="Esther Howard" caption="DIRECTOR" image="/team2.png" />

      <Member title="Guy Hawkins" caption="FINANCIAL PLANER" image="/team3.png" />
    </Slider>
  );
}
