import Image from "next/image";

// Define the interface for the props
interface TabContainerProps {
  image: string;
  title: string;
  description: string;
}

function AboutCard(props: TabContainerProps) {
  return (
    <div className="card mx-2 py-4 px-2 mt-3">
      <div className="card-body">
        <Image
          src={props?.image}
          alt="Your Image Alt Text"
          height={70}
          width={70}
        />

        <h4 className="weight-600  mt-3">{props?.title || ""}</h4>
        <h6 className="weight-400">{props?.description || ""}</h6>
      </div>
    </div>
  );
}

export default AboutCard;
