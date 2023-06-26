import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col gap-y-12 mt-16 items-center text-white ">
      <div>
        <Link to={"/addAnimals"}>
          <button className="hover:bg-green-700  w-[50vw] h-16 bg-[#579506] rounded-md">
            Add New Animals
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/addImages"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Add New Gallery Images
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/addEvents"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Add New Events
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/viewTickets"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Manage Booked Tickets
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/viewEvents"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Manage Events
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/donations"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Manage Donations
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/manageAnimals"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Manage Animals
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/manageGallary"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-[#579506] rounded-md">
            Manage Gallary
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHomePage;
