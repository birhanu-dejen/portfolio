import illustration from "../../assets/illustration.webp";
import AnimatedWrapper from "../../utils/animatedWarpper";
function HomeSection() {
  return (
    <AnimatedWrapper>
      <section id="Home" className="py-16">
        <div className="container mx-auto px-16 bg-blue-900 py-32 text-gray-200 rounded-2xl">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
            <div className="container mx-auto text-base/6  tracking-tight ">
              <h2 className="text-2xl">
                Hi 👋, It's{" "}
                <span className="text-[#00FFFF]">Birhanu Dejen</span>
              </h2>
              <div className="text-white text-lg container mx-auto">
                I'm a Junior Full-stack developer based in Addis Ababa ,Ethiopia
                <br /> <br /> I have experience in developing web applications
                using modern technologies. I am familiar with both front-end and
                back-end development, and I possess a solid understanding of
                data structures, algorithms, and database design. I am eager to
                create clean, efficient, and scalable code that enhances user
                experience.
              </div>
            </div>

            <img
              src={illustration}
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
    </AnimatedWrapper>
  );
}
export default HomeSection;
