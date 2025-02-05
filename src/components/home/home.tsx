import illustration from "../../assets/illustration.webp";
import AnimatedWrapper from "../../utils/animatedWarpper";

function HomeSection() {
  return (
    <AnimatedWrapper>
      <section id="Home" className="py-8 md:py-10">
        <div
          className="container mx-auto px-4 sm:pl-3 md:pl-1 bg-blue-900 py-16 md:pt-14 md:pb-20
         text-gray-200 rounded-none md:rounded-lg max-w-[1480px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:pl-3">
            <div>
              <div className="container mx-auto ">
                <h2 className="text-xl font-semibold mb-4">
                  Hi 👋, It&apos;s{" "}
                  <span className="text-cyan-600">Birhanu Dejen</span>
                </h2>

                <div className="text-justify font-[100] ">
                  I&apos;m a Junior Full-stack developer based in Addis Ababa,
                  Ethiopia
                  <br />
                  <br />
                  Ethiopia I have experience in developing web applications
                  using modern technologies. I'm familiar with both front-end
                  and back-end development, with a solid understanding of data
                  structures, algorithms, and database design. I'm eager to
                  create clean, efficient, and scalable code that enhances user
                  experience.
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="container md:mx-8 ">
                <img
                  src={illustration}
                  alt="Illustration"
                  width={500}
                  height={500}
                  className="m-auto w-72 hover:scale-[109%] transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}

export default HomeSection;
