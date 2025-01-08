import projectimage from "../../assets/project1..png";
import styles from "./card.module.css";
function Card() {
  return (
    <div className={styles.project_card}>
      <img
        src={projectimage}
        alt="project image"
        className={styles.prject_image}
      />
      <div className={styles.project_content}>
        <h2 className={styles.project_title}>{"ECOmmerce website"}</h2>
        <p className={styles.project_description}>
          {
            "this is my first real world project using mernstack and i sucessfully conterbuted to on both front end and the backend"
          }
        </p>
        <h3 className={styles.tools_title}>tools </h3>

        <div className={styles.iconContainer}>
          <img
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="MongoDB"
            className={styles.icon}
          />
          <img
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            alt="React"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
