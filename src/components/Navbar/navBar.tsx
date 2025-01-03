import React from "react";
import styles from "./nav.module.css";
import links from "../../constants/navigation";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.title}> Birhanu Dejen</div>
      <div className={styles.title}> Fullstack Developer</div>
      <div className={styles.navButtons}>
        {links.map((element, index) => {
          return (
            <Link
              key={index}
              to={element}
              smooth
              duration={500}
              spy={true}
              activeClass={styles.active}
              offset={-75}
            >
              {element}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
