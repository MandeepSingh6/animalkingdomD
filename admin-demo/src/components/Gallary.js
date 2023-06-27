import React, { useEffect, useState } from "react";
import Axios from "axios";

const Gallary = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/images";

  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    Axios.get(url).then((res) => setImages(res.data));
  }, []);

  if (images.includes("No image Found")) {
    return <h1 className="text-2xl text-center mt-8">No Image Found</h1>;
  }
  if (images.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  } else {
    return (
      <div>
        {images.length > 0 && (
          <div>
            <img
              src={images[currentIndex].image}
              alt=""
              className="aspect-video mx-auto mt-4 w-full md:w-[70%]"
            />
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full aspect-video bg-cover bg-center bg-no-repeat hover:scale-105 duration-200"
              src={image.image}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Gallary;
