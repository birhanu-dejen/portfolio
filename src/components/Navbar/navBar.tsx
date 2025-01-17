import React from "react";

import links from "../../constants/navigation";
import { Link } from "react-scroll";
const Navbar: React.FC = () => {
  return (
    <div>
      <div>
        <div> Birhanu Dejen mulu</div>
        <div> Fullstack Developer</div>
      </div>

      <div className="flex justify-end">
        {links.map((element, index) => {
          return (
            <Link
              className="mx-8 p"
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
