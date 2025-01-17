import React from "react";

import links from "../../constants/navigation";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-9 mt-2">
        <div className="w-64 text-xl  "> Birhanu Dejen mulu</div>
        <div className="w-64  text-sm"> Fullstack Developer</div>
      </div>

      <div className="flex justify-end">
        {links.map((element, index) => {
          return (
            <Link
              className="mx-8 "
              key={index}
              to={element}
              smooth
              duration={500}
              spy={true}
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
