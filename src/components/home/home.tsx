import styles from "./home.module.css";
import background_image from "../../assets/background.png";
function Home() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={background_image} alt="background" />
    </div>
  );
}
export default Home;
