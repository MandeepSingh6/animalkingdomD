import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-green-400 text-xl font-bold flex justify-center">
        <Link to={"/"}>Animal Kingdom Park</Link>
      </div>
    </div>
  );
};

export default Footer;
