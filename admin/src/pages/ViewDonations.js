import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ViewDonations = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/donations/";

  const [donations, setDonations] = useState([]);

  const handleDelete = async (id) => {
    Axios.delete(url + id);
    Axios.get(url).then((res) => setDonations(res.data));
  };

  useEffect(() => {
    Axios.get(url).then((res) => {
      setDonations(res.data);
    });
  }, []);
  if (donations.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  }
  if (donations.includes("No donations Found")) {
    return <h1 className="text-2xl text-center mt-8">No Image Found</h1>;
  } else
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <h2 className="font-bold text-2xl">Donations</h2>
        {donations.map((donation, index) => (
          <div
            className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
            key={index}
          >
            <p>
              Name:
              <b className="ml-1">{donation.name}</b>
            </p>
            <p>
              Email:<b className="ml-1"> {donation.email}</b>
            </p>
            <p>
              Donated Amount: <b className="ml-1">{donation.amount}</b>
            </p>
            <button onClick={() => handleDelete(donation._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
};

export default ViewDonations;
