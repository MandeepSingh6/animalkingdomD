import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const ViewDonations = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/donations/";

  const [donations, setDonations] = useState([]);

  const handleDelete = async (id) => {
    Axios.delete(url + id).then(() =>
      Axios.get(url).then((res) => setDonations(res.data))
    );
  };

  useEffect(() => {
    Axios.get(url).then((res) => {
      setDonations(res.data);
    });
  }, []);

  if (donations.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  }
  if (donations.includes("No Donations Found")) {
    return <h1 className="text-2xl text-center mt-8">No Donations Found</h1>;
  } else
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <h2 className="font-bold text-2xl">Donations</h2>
        {donations.map((donation, index) => (
          <div
            className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
            key={index}
          >
            <div className="flex justify-between">
              <div>
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
              </div>
              <button onClick={() => handleDelete(donation._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ViewDonations;
