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

        <div className="flex justify-end ">
          {links.map((element, index) => {
            return (
              <Link
                className="mx-8 cursor-pointer hover:text-blue-600 "
                key={index}
                to={element}
                smooth
                duration={500}
                spy={true}
                offset={-75}
              >
                {element}
                <div></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
