import React, { useEffect, useState } from "react";
import Axios from "axios";

const Gallary = () => {
  const url = "http://localhost:4000/images";
  const [images, setImages] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => setImages(res.data));
  }, []);
  console.log(images);
  if (images.includes("No image Found")) {
    return <h1>No Image Found</h1>;
  } else {
    return (
      <div className="grid grid-cols-3 gap-2 p-12">
        {images.map((image, index) => (
          <img
            key={index}
            className="h-[20vw] hover:scale-105 duration-200 w-[33.3vw]"
            src={image.image}
          />
        ))}
      </div>
    );
  }
};

export default Gallary;
