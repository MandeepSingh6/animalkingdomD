import React, { useEffect, useState } from "react";
import Events from "../images/events.jpg";
import Axios from "axios";
const EventsPage = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => setEvents(res.data));
  }, []);

  if (events.length < 1) {
    return <h2>No Upcoming Events</h2>;
  }

  return (
    <div>
      <img src={Events} alt="" className="w-full" />
      <ul className="flex mt-4">
        {events.map((event) => (
          <li className="mx-auto bg-red-600 p-4 rounded-full w-[80%] text-white text-lg">
            <p>{event.name}</p>
            <p>
              {event.startDate}
              {event.startDate !== event.endDate && event.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
