import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

// Define the interface for the props
interface TabContainerProps {
  title: string;
  description: string;
  subDescription: string;
  image1: string;
  image2: string;
}

function TabContainer(props: TabContainerProps) {
  return (
    <div className={`${styles.tabComponentMainContainer} row p-3 mt-5`}>
      <div className="col-md-3">
        <div className={styles?.tabContainerImg}>
          <Image
            src={props?.image1}
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
            className={styles?.aboutFoundationImg}
          />
        </div>
      </div>
      <div className="col-md-6 py-3">
        <h3 className="text-center weight-700 d-flex flex-column">
          {props?.title || ""}
        </h3>
        <p className="caption">{props?.description || ""}</p>

        <p className="caption">{props?.subDescription || ""}</p>
      </div>
      <div className="col-md-3">
        <div className={styles?.tabContainerImg}>
          <Image
            src={props?.image2}
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
            className={styles?.aboutFoundationImg}
          />
        </div>
      </div>
    </div>
  );
}

export default TabContainer;
