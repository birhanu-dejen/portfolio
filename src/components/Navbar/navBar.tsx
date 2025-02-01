import React from "react";

import links from "../../constants/navigation";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  return (
    <section className="sticky top-0 z-10 py-3 bg-white ">
      <div className=" flex justify-between  font-normal ">
        <div className="ml-9 mt-2">
          <div className="w-64 text-xl  font-[100] ">Birhanu Dejen mulu</div>
          <div className="w-64  text-sm font-[200]">Fullstack Developer</div>
        </div>
        <label
          htmlFor=""
          className="font-[2.8rem] text-blue-900 cursor-pointer block lg:hidden "
        >
          <i className="bx bx-menu "></i>
        </label>
        <div className="flex justify-end ">
          {links.map((element, index) => {
            return (
              <Link
                className="mx-8 cursor-pointer hover:text-blue-500  group"
                key={index}
                to={element}
                smooth
                duration={500}
                spy={true}
                offset={-75}
                activeClass="active"
              >
                {element}
                <div className="h-0.5 w-0 bg-blue-900 transition-all duration-[400ms] ease-in-out group-hover:w-full "></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
