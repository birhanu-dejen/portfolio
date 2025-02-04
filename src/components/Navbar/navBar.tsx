import { useState } from "react";
import links from "../../constants/navigation";
import { Link } from "react-scroll";

function NavSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <section className="sticky top-0 z-10 py-3 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="ml-4 lg:ml-9 mt-2">
          <div className="w-64 text-xl font-thin">Birhanu Dejen Mulu</div>
          <div className="w-64 text-sm font-light">Fullstack Developer</div>
        </div>

        <button
          className="text-3xl text-blue-900 cursor-pointer block lg:hidden"
          onClick={toggleMenu}
        >
          <i className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:justify-end w-full lg:w-auto`}
        >
          <div className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
            {links.map((element, index) => (
              <Link
                className="mx-4 lg:mx-8 cursor-pointer hover:text-blue-900 group py-2 lg:py-0 font-[350]"
                key={index}
                to={element}
                smooth
                duration={500}
                spy={true}
                offset={-75}
                activeClass="active"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {element}
                <div className="h-0.5 w-0 bg-blue-900 transition-all duration-[400ms] ease-in-out group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavSection;
