import Image from "next/image";

// Styles
import styles from "@/styles/public-pages/about/about.module.css";

function Member() {
  return (
    <div className="card mx-2">
      <div className="card-body">
      <div className={styles?.aboutTeamContainerImg}>
          <Image
            src="/team1.png"
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
            className={styles?.aboutFoundationImg}
          />
        </div>
        <h6 className="weight-600 text-center mt-3">Guy Hawkins</h6>
        <p className="caption weight-500 text-center m-0 text-grey">DIRECTOR</p>
      </div>
    </div>
  );
}

export default Member;
