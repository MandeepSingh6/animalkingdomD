import React, { useEffect, useState } from "react";
import image1 from "../images/bannerAnimalKingdom1.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [images, setImages] = useState([image1]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((oldIndex) => {
        if (index < images.length - 1) {
          return oldIndex + 1;
        } else {
          return 0;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <section>
        <Link to={"/tickets"}>
          <img className="w-full object-contain" src={images[index]} alt="" />
        </Link>
      </section>
    </div>
  );
};

export default Slider;
