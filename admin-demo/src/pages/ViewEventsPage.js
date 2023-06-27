import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ViewEventsPage = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/events/";
  const [events, setEvents] = useState([]);

  const handleDelete = (id) => {
    Axios.delete(url + id).then(() =>
      Axios.get(url).then((res) => setEvents(res.data))
    );
  };

  useEffect(() => {
    Axios.get(url).then((res) => setEvents(res.data));
  }, []);

  if (events.length < 1) {
    return <h2 className="text-2xl text-center mt-8">Loading...</h2>;
  }
  if (events[0].hasOwnProperty("event") === false) {
    return <h2 className="text-2xl text-center mt-8">No Upcoming Events!</h2>;
  } else {
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <h2 className="font-bold text-2xl">Upcoming Events</h2>
        {events.map((event, index) => (
          <div
            className="bg-[#579506] w-[90vw]  md:w-[70vw] p-2 px-1 rounded-md text-white"
            key={index}
          >
            <p className="flex justify-between">
              <b className="ml-1">{event.event}</b>
              <button onClick={() => handleDelete(event._id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default ViewEventsPage;
