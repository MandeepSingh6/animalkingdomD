import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ManageGallary = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/images/";
  const [images, setImages] = useState([]);

  const handleDelete = (id) => {
    Axios.delete(url + id);
    Axios.get(url).then((res) => setImages(res.data));
  };

  useEffect(() => {
    Axios.get(url).then((res) => setImages(res.data));
  }, []);

  if (images.includes("No image Found")) {
    return <h1 className="text-2xl text-center mt-8">No Images Found!</h1>;
  }
  if (images.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  } else {
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        {images.map((image, index) => (
          <div
            className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
            key={index}
          >
            <p className="flex justify-between">
              <img src={image.image} alt="" />
              <button onClick={() => handleDelete(image._id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default ViewEventsPage;
