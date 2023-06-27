import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnimalsPage = () => {
  const navigate = useNavigate();
  const url = "https://animalkingdomparkbackend.onrender.com/animals";
  const [uploadedImage, setUploadedImage] = useState("");
  const [animal, setAnimal] = useState({
    name: "Test Animal(Website Visitor)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png",
    desc: "Visitors can't add description, default description will be uploaded to check the functinality.",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      image: animal.image,
      name: animal.name,
      desc: animal.desc,
    }).then(() => navigate("/animals"));
  };

  const handleChange = (e) => {
    return;
  };

  const uploadImage = (files) => {
    return;
  };

  return (
    <div className="text-center mt-12">
      <h1 className="mb-8 text-xl font-bold max-sm:text-[1.1rem]">
        ADD NEW ANIMAL <br />
        (Visitors can't upload file in this Demo) <br />
        Instead default file, name and description will be uploaded.
      </h1>
      <form
        onSubmit={(e) => submit(e)}
        className="leading-8 space-y-4 [&>*]:w-[90%] md:[&>*]:w-[70%]"
      >
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
          className="border-2 px-1"
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
          className="border-2 px-1"
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
      <img src={animal.image} alt="" className="mx-auto" />
    </div>
  );
};

export default AddAnimalsPage;
