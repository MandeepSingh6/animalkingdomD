import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ManageAnimals = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/animals/";
  const [animals, setAnimals] = useState([]);

  const handleDelete = (id) => {
    Axios.delete(url + id).then(() =>
      Axios.get(url).then((res) => setAnimals(res.data))
    );
  };

  useEffect(() => {
    Axios.get(url).then((res) => {
      setAnimals(res.data);
    });
  }, []);

  if (animals.includes("No animal Found")) {
    return <h1 className="text-2xl text-center mt-8">No Animal Found!</h1>;
  }
  if (animals.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  } else {
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        {animals.map((animal, index) => (
          <div
            className="bg-[#579506] w-[90vw] md:w-[70vw] p-2 px-1 rounded-md text-white"
            key={index}
          >
            <p className="flex justify-between">
              <b className="ml-1">{animal.name}</b>
              <button onClick={() => handleDelete(animal._id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default ManageAnimals;
