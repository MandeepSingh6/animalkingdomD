import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <div className="flex flex-col gap-y-12 mt-32 items-center ">
      <div>
        <Link to={"/addAnimals"}>
          <button className="hover:bg-green-700  w-[50vw] h-16 bg-green-400 rounded-md">
            Add New Animals
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/addImages"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-green-400 rounded-md">
            Add New Images
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/viewTickets"}>
          <button className="hover:bg-green-700 w-[50vw] h-16 bg-green-400 rounded-md">
            View Booked Tickets
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminHomePage;
