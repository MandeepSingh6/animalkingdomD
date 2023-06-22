import React from "react";
import Events from "../images/events.jpg";
const EventsPage = () => {
  return (
    <div>
      <img src={Events} alt="" className="max-w-full" />
      <ul className="flex mt-4">
        <li className="mx-auto bg-red-600 p-4 rounded-full w-[80%] text-white text-lg">
          <p>June 1 - 30</p>
          <p>National Indegenous Heritage Month</p>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
