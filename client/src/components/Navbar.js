import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-green-400 h-8 flex items-center ">
        <ul className="flex w-full justify-around">
          <li className=" font-bold">
            <Link to={"/"}>Animal Kingdom Park</Link>
          </li>
          <li>
            <Link to={"/gallary"}>Gallery</Link>
          </li>
          <li>
            <Link to={"/animals"}>Animals</Link>
          </li>
          <li>
            <Link to={"/tickets"}>Tickets</Link>
          </li>
          <li>
            <Link to={"/login"}>Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
