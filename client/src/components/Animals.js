import React, { useEffect, useState } from "react";
import Axios from "axios";

const Animals = () => {
  const url = "http://localhost:4000/animals";
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
        <h1 className="text-center mt-4 font-bold text-4xl">Animals at Park</h1>
        <div className="flex justify-around my-8">
          <div className="grid grid-cols-2 gap-x-28 gap-y-12">
            {data.map((animal, index) => (
              <div key={index} className="div w-[30vw] border-2 rounded-md">
                <img className="w-full" src={animal.image} alt="" />
                <div className="px-4 py-2">
                  <p className="font-bold text-lg">{animal.name}</p>
                  <p className="max-w-full text-justify">{animal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Animals;
