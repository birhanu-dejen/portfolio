import background_image from "../../assets/home-background.webp";
function Home() {
  return (
    <div className="flex items-center">
      <div>
        <h2>
          Hi 👋, It's <span>Birhanu Dejen</span>
        </h2>
        I'm a Full-stack developer based in Addis Ababa ,Ethiopia
        <br /> <br />I have experience in developing web applications using
        modern technologies. Proficient in both front-end and back-end
        development, with a strong understanding of data-structure and algorithm
        , Passionate about creating clean, efficient, and scalable code that
        delivers a great user experience.
      </div>

      <img src={background_image} alt="background" />
    </div>
  );
}
export default Home;
