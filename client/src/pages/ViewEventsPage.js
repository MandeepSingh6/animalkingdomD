import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ViewEventsPage = () => {
  // const url = "http://localhost:4000/tickets";
  const url = "https://animalkingdomparkbackend.onrender.com/events/";
  const [events, setEvents] = useState([]);

  const handleDelete = (id) => {
    console.log(url + id);
    Axios.delete(url + id);
  };

  useEffect(() => {
    Axios.get(url).then((res) => setEvents(res.data));
  }, []);
  if (events.length < 1) {
    return <h1>No Events Found</h1>;
  } else {
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <h2 className="font-bold text-2xl">Upcoming Events</h2>
        {events.map((event, index) => (
          <div
            className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
            key={index}
          >
            <p className="flex justify-between">
              <b className="ml-1">{event.event}</b>
              <button onClick={() => handleDelete(event._id)}>Delete</button>
            </p>
            {/* <p>
              Email:<b className="ml-1"> {ticket.email}</b>
            </p>
            <p>
              Tickets Booked: <b className="ml-1">{ticket.tickets}</b>
            </p> */}
          </div>
        ))}
      </div>
    );
  }
};

export default ViewEventsPage;
