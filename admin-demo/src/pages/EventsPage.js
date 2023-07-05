import React, { useEffect, useState } from "react";
import Events from "../images/events.jpg";
import Axios from "axios";
const EventsPage = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/events";

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => {
      setEvents(res.data);
    });
  }, []);

  if (events.length < 1) {
    return (
      <h2 className="text-2xl text-center mt-8">
        Loading...(Avg. time for initial load : 42 seconds)
      </h2>
    );
  }
  if (events[0].hasOwnProperty("event") === false) {
    return <h2 className="text-2xl text-center mt-8">No Upcoming Events!</h2>;
  }
  return (
    <div>
      <img src={Events} alt="" className="w-full" />
      <ul className="flex flex-col gap-4 mt-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="mx-auto bg-red-600 p-4 rounded-2xl w-[90%] md:w-[80%] text-white text-lg max-sm:text-sm"
          >
            <p>{event.event}</p>
            <p>
              {event.startDate}
              {event.startDate !== event.endDate && " to " + event.endDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
