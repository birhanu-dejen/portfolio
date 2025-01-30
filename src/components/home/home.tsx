import background_image from "../../assets/home-background.webp";
function Home() {
  return (
    <section id="Home" className="py-16">
      <div className="container mx-auto px-20 bg-blue-900 py-20 text-gray-200">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          <div className="container mx-auto text-base/6  tracking-tight">
            <h2>
              Hi 👋, It's <span>Birhanu Dejen</span>
            </h2>
            <div className="text-white text-lg">
              I'm a Full-stack developer based in Addis Ababa ,Ethiopia
              <br /> <br />I have experience in developing web applications
              using modern technologies. Proficient in both front-end and
              back-end development, with a strong understanding of
              data-structure and algorithm , Passionate about creating clean,
              efficient, and scalable code that delivers a great user
              experience.
            </div>
          </div>

          <img
            src={background_image}
            alt="background"
            loading="lazy"
            width={500}
            height={500}
            decoding="async"
            className="m-auto w-72 hover:scale-[109%] transition-transform duration-1000 "
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
