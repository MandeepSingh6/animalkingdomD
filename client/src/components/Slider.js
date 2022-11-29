import React, { useEffect, useState } from "react";
import image1 from "../images/slider1.jpg";
import image2 from "../images/slider2.jpeg";
import image3 from "../images/slider3.jpeg";
import image4 from "../images/slider4.jpg";

const Slider = () => {
  const [images, setImages] = useState([image1, image2, image3, image4]);
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
        <img
          className="w-screen object-cover h-[40rem]"
          src={images[index]}
          alt=""
        />
      </section>
    </div>
  );
};

export default Slider;
