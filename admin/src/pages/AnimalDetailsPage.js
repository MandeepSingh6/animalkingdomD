import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimalDetailsPage = () => {
  const { id } = useParams();
  const url = "https://animalkingdomparkbackend.onrender.com/animals/";
  const [animalDetails, setAnimalDetails] = useState({});

  useEffect(() => {
    Axios.get(url + id).then((res) => setAnimalDetails(res.data));
  }, []);

  return (
    <div className="md:flex mx-auto p-2 gap-4">
      <img
        className="w-full md:max-w-[60vw] aspect-video"
        src={animalDetails.image}
        alt=""
      />
      <div className="max-md:mt-4">
        <b className="text-2xl mb-8">{animalDetails.name}</b>
        <p>{animalDetails.desc}</p>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
