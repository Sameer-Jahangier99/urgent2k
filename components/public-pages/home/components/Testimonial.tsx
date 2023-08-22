
import Image from "next/image";


function Testimonial() {
  return (
    <div className="row d-flex justify-content-center">
    <div className="col-md-12 d-flex  justify-content-center gap-3  ">
      <div>
        <div className="d-flex  justify-content-center py-3">
          <Image
            src="/testimonial.png"
            alt="Your Image Alt Text"
            height={100}
            width={100}
            className="cursor-pointer"
          />
        </div>
        <p className="weight-600 text-white text-center">
          Rasalina Willamson <br /> (Consultant)
        </p>
        <p className="text-white text-center text-justify">
          Lorem ipsum dolor sit amet consectetur. Ut aliquam nec
          tellus eget aliquam. Sed feugiat erat habitant adipiscing
          auctor. Sagittis quisque massa aliquet ut mauris felis
          auctor nulla mus. Cras commodo netus neque congue ac
          sollicitudin pretium. Amet tellus urna orci non sed eget.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Testimonial