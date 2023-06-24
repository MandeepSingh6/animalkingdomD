import React from "react";
import Donate from "../images/donate.jpg";
import { useState } from "react";
import Axios from "axios";

const DonationsPage = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/donations";

  const [donationDetails, setDonationDetails] = useState({
    name: "",
    amount: 0,
    email: "",
    phone: 0,
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, donationDetails);
  };

  const handleChange = (e) => {
    console.log("first");
    setDonationDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <div className="relative">
        <img src={Donate} alt="" className="w-full" />
        <span className="absolute bottom-1 md:bottom-4 right-10 text-white sm:text-[2rem] md:text-[3rem] font-extrabold">
          DONATE NOW
        </span>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-[80%] md:w-[50%] lg:[w-30%] mx-auto border-2 mt-4 py-2 px-4"
      >
        <h2 className="text-center text-2xl text-[#579506]">
          Donation Details
        </h2>
        <div>
          <h3 className="mb-1">Donation Amount</h3>
          <div className="flex gap-2 mb-4">
            <button
              name="amount"
              value={50}
              onClick={(e) => handleChange(e)}
              className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white"
            >
              $50
            </button>
            <button
              name="amount"
              value={100}
              onClick={(e) => handleChange(e)}
              className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white"
            >
              $100
            </button>
            <button
              value={150}
              name="amount"
              onClick={(e) => handleChange(e)}
              className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white"
            >
              $150
            </button>
            <button
              value={200}
              name="amount"
              onClick={(e) => handleChange(e)}
              className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white"
            >
              $200
            </button>
          </div>
          <div>
            <button className="border-2 p-1">$</button>
            <input
              required
              value={donationDetails.amount}
              name="amount"
              type="number"
              placeholder="Custom amount"
              className="border-2 border-l-0 p-1 mb-2"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              required
              className="border-2 px-1"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              required
              className="border-2 px-1"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              required
              className="border-2 px-1"
              type="number"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <input
              required
              className="border-2 px-1"
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Donate"
          className="mt-4 p-1 px-2 block mx-auto bg-[#579506] text-white hover:scale-110 duration-300"
        />
      </form>
    </div>
  );
};

export default DonationsPage;
