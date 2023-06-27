import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddImagesPage = () => {
  const navigate = useNavigate();
  const url = "https://animalkingdomparkbackend.onrender.com/images";
  const [uploadedImage, setUploadedImage] = useState("");
  const [images, setImages] = useState({
    name: "Test Image(Website visitor)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      image: images.image,
      name: images.name,
    }).then(() => navigate("/gallary"));
  };

  const handleChange = (e) => {
    return;
  };

  const uploadImage = (files) => {
    return;
  };
  return (
    <div className="text-center mt-12">
      <h1 className="mb-8 text-xl font-bold">
        ADD NEW IMAGE TO GALLERY <br /> (Visitors can't upload file in this
        Demo) <br /> Instead default file and name will be uploaded.
      </h1>
      <form
        onSubmit={(e) => submit(e)}
        className="leading-8 space-y-4 [&>*]:w-[80%] md:[&>*]:w-[60%]"
      >
        <input
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
          className="border-2"
          type="file"
          name="file"
          id="file"
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="border-2 px-1"
          placeholder="name"
          type="text"
          name="name"
          id="name"
          required
          value={images.name}
        />
        <br />
        <button className="bg-[#579506] px-2 rounded-md text-white">
          Add Image
        </button>
      </form>
      <img src={images.image} alt="" className="mx-auto" />
    </div>
  );
};

export default AddImagesPage;
