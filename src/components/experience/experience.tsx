import styles from "./experience.module.css";
function About() {
  return (
    <section className={styles.section}>
      <h2>Experience</h2>
      <p>Sept 2022 - present</p>
      <h4>John Snow, Inc. - Software Engineer</h4>
      <ul>
        <li>
          Worked on a budget-tool platform, A platform to manage budgets for the
          company's various projects worldwide.
        </li>
      </ul>
    </section>
  );
}
export default About;
