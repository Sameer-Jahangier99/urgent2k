// Styles
import styles from "@/styles/public-pages/about/about.module.css";

// Components
import TeamMembers from "./TeamMembers";

function OurTeam() {
  return (
    <section className={`${styles.aboutOurTeamContainer} container-wide py-5`}>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex">
            <span className={styles.abooutMeetOurTeamDivider}></span>
            <span
              className={`${styles.aboutUsCaption} caption text-white weight-600 ms-1`}
            >
              MEET WITH OUR TEAM
            </span>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <h2 className="text-white weight-700">
              Meet With Our <br /> team members
            </h2>
            <button className={`${styles.aboutMeetOurTeamBtn} weight-700`}>
              OUR TEAM
            </button>
          </div>
        </div>
        <div className="col-md-12 mt-4">
          <TeamMembers />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
