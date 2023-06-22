import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnimalsPage = () => {
  const navigate = useNavigate();
  // const url = "http://localhost:4000/animals";
  const url = "https://animalkingdomparkbackend.onrender.com/animals";
  const [uploadedImage, setUploadedImage] = useState("");
  const [animal, setAnimal] = useState({
    name: "",
    image: "",
    desc: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(animal);
    Axios.post(url, {
      image: animal.image,
      name: animal.name,
      desc: animal.desc,
    }).then(() => navigate("/animals"));
  };

  const handleChange = (e) => {
    const newData = { ...animal };
    newData[e.target.name] = e.target.value;
    newData.image = uploadedImage;
    setAnimal(newData);
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
      <h1 className="mb-8 text-xl font-bold">ADD NEW ANIMAL</h1>
      <form onSubmit={(e) => submit(e)} className="leading-8 space-y-4">
        <input
          onChange={(e) => uploadImage(e.target.files)}
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
          value={animal.name}
        />
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="border-2"
          placeholder="description"
          type="text"
          name="desc"
          id="desc"
          required
          value={animal.desc}
        />
        <br />
        <button className="bg-[#579506] px-2 rounded-md text-white">
          Add Animal
        </button>
      </form>
      <img src={animal.image} alt="" />
    </div>
  );
};

export default AddAnimalsPage;
