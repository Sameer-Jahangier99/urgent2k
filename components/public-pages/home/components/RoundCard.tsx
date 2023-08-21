import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/home/home.module.css";

// Define the interface for the props
interface RoundCardProps {
  icon: string;
  title: string;
  caption: string;
}

function RoundCard(props: RoundCardProps) {
  return (
    <div className={`${styles.aboutFoundationCard} p-3`}>
      <Image
        src={props.icon}
        alt="Your Image Alt Text"
        height={30}
        width={30}
      />
      <h6 className="weight-700 mb-0 mt-2">{props.title}</h6>

      <p className="caption text-dull-black text-center mt-1 mb-0">
        {props.caption}
      </p>
    </div>
  );
}

export default RoundCard;
