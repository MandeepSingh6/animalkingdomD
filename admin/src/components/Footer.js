import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#579506] text-xl font-bold flex justify-center text-white p-2">
        <Link to={"/"}>Animal Kingdom Park</Link>
      </div>
    </div>
  );
};

export default Footer;
