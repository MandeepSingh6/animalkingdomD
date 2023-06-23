import React from "react";
import Donate from "../images/donate.jpg";

const DonationsPage = () => {
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
        onSubmit={(e) => e.preventDefault()}
        className="w-[90%] sm:w-[80%] md:w-[50%] lg:[w-30%] mx-auto border-2 mt-4 py-2 px-4"
      >
        <h2 className="text-center text-2xl text-[#579506]">
          Donation Details
        </h2>
        <div>
          <h3 className="mb-1">Donation Amount</h3>
          <div className="flex gap-2 mb-4">
            <button className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white">
              $50
            </button>
            <button className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white">
              $100
            </button>
            <button className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white">
              $150
            </button>
            <button className="border-2 border-[#579506] p-1 hover:bg-[#579506] hover:text-white">
              $200
            </button>
          </div>
          <div>
            <button className="border-2 p-1">$</button>
            <input
              type="number"
              placeholder="Custom amount"
              className="border-2 border-l-0 p-1 mb-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="border-2 px-1"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="border-2 px-1"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="border-2 px-1"
              type="number"
              name="phone"
              placeholder="Phone"
            />
            <input
              className="border-2 px-1"
              type="text"
              name="address"
              placeholder="Address"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Complete"
          className="mt-4 p-1 px-2 block mx-auto bg-[#579506] text-white hover:scale-110 duration-300"
        />
      </form>
    </div>
  );
};

export default DonationsPage;
