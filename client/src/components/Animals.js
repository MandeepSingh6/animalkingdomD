import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimalsAtPark from "../images/animals at park.jpg";
import { Link } from "react-router-dom";

const Animals = () => {
  // const url = "http://localhost:4000/animals";
  const url = "https://animalkingdomparkbackend.onrender.com/animals";

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => setData(res.data));
  }, []);
  console.log(data);

  if (data.includes("No animal Found")) {
    return <h1>No Animal Found</h1>;
  } else {
    return (
      <div>
        <img src={AnimalsAtPark} alt="" className="w-full" />
        <div className="flex justify-around m-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.map((animal, index) => (
              <Link
                to={"/animalDetails/" + animal._id}
                key={index}
                className="div rounded-md"
              >
                <img
                  className="w-full aspect-video bg-center min-h-[100%]"
                  src={animal.image}
                  alt=""
                />
                <p className="font-bold text-lg">{animal.name}</p>
                {/* <p className="max-w-full text-justify">{animal.desc}</p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Animals;
