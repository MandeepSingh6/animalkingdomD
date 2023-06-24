import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddImagesPage = () => {
  const navigate = useNavigate();
  // const url = "http://localhost:4000/images";
  const url = "https://animalkingdomparkbackend.onrender.com/images";
  const [uploadedImage, setUploadedImage] = useState("");
  const [images, setImages] = useState({
    name: "",
    image: "",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      image: images.image,
      name: images.name,
    }).then(() => navigate("/gallary"));
  };

  const handleChange = (e) => {
    const newData = { ...images };
    newData[e.target.name] = e.target.value;
    newData.image = uploadedImage;
    setImages(newData);
  };

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "cimlmbod");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dzsefja86/image/upload",
      formData
    ).then((res) => setUploadedImage(res.data.secure_url));
  };
  return (
    <div className="text-center mt-12">
      <h1 className="mb-8 text-xl font-bold">ADD NEW IMAGE TO GALLERY</h1>
      <form onSubmit={(e) => submit(e)} className="leading-8 space-y-4">
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
          className="border-2"
          placeholder="name"
          type="text"
          name="name"
          id="name"
          required
          value={images.name}
        />

        <button className="bg-[#579506] px-2 rounded-md text-white">
          Add Image
        </button>
      </form>
      <img src={images.image} alt="" />
    </div>
  );
};

export default AddImagesPage;
