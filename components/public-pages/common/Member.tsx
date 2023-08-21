import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

// Define the interface for the props
interface TeamCardProps {
  image: string;
  title: string;
  caption: string;
}

function Member(props: TeamCardProps) {
  return (
    <div className="card mx-2">
      <div className="card-body">
        <div className={styles?.aboutTeamContainerImg}>
          <Image
            src={props?.image}
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
            className={styles?.aboutFoundationImg}
          />
        </div>
        <h6 className="weight-600 text-center mt-3">{props?.title}</h6>
        <p className="caption weight-500 text-center m-0 text-grey">
          {props?.caption}
        </p>
      </div>
    </div>
  );
}

export default Member;
