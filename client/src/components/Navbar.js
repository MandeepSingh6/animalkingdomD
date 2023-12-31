import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <nav className="bg-[#579506] py-2 flex items-center">
        <ul className="flex w-full justify-around text-lg text-white">
          <li className="hover:scale-150 duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:scale-150 duration-300">
            <Link to={"/gallary"}>Gallery</Link>
          </li>
          <li className="hover:scale-150 duration-300">
            <Link to={"/animals"}>Animals</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
