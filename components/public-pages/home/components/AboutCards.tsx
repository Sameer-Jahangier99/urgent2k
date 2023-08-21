// Styles
import styles from "@/styles/public-pages/home/home.module.css";

// Components
import AboutCard from "./AboutCard";

function AboutCards() {
  return (
    <section
      className={`${styles.aboutCardsMainContainer} container-wide pb-5`}
    >
      <div className="row">
        <div className="col-md-4">
          <AboutCard
            title="MISSION"
            description="Lorem ipsum dolor sit amet consectetur. Nulla amet nisi at sit eleifend sed massa. Vel adipiscing netus magna non nullam amet morbi dignissim quam. Quam duis est nunc aenean id massa quis. Nunc gravida elit et mauris."
            image="/icons/achievement.png"
          />
        </div>
        <div className="col-md-4">
          <AboutCard
            title="VISION"
            description="Lorem ipsum dolor sit amet consectetur. Nulla amet nisi at sit eleifend sed massa. Vel adipiscing netus magna non nullam amet morbi dignissim quam. Quam duis est nunc aenean id massa quis. Nunc gravida elit et mauris."
            image="/icons/vision.png"
          />
        </div>
        <div className="col-md-4">
          <AboutCard
            title="VALUES"
            description="Lorem ipsum dolor sit amet consectetur. Nulla amet nisi at sit eleifend sed massa. Vel adipiscing netus magna non nullam amet morbi dignissim quam. Quam duis est nunc aenean id massa quis. Nunc gravida elit et mauris."
            image="/icons/values.png"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutCards;
