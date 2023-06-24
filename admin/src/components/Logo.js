import React from "react";
import logo from "../images/animalkingdomparklogo1.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="py-2 px-2 md:px-20 flex items-center justify-between">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-[10rem] sm:w-[15rem]" />
      </Link>
      <h2 className="text-green-700">Administrative Access</h2>
      <div className="flex flex-col ">
        <span className="font-bold">CURRENT HOURS</span>
        <span>9:30am - 7:00pm daily</span>
      </div>
    </div>
  );
};

export default Logo;
