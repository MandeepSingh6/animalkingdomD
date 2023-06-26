import React from "react";
import logo from "../images/animalkingdomparklogo1.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="py-2 px-2 md:px-20 flex items-center justify-between max-sm:text-sm">
      <Link to={"/"} className="max-sm:hidden">
        <img src={logo} alt="logo" className="w-[10rem] sm:w-[15rem]" />
      </Link>
      <div>
        <h2 className="text-green-700">Administrative Access(Demo)</h2>
        <a
          className="text-red-600"
          href="https://animalkingdompark.onrender.com/"
        >
          Open Client Version
        </a>
      </div>

      <div className="flex flex-col ">
        <span className="font-bold">CURRENT HOURS</span>
        <span>9:30am - 7:00pm daily</span>
      </div>
    </div>
  );
};

export default Logo;
