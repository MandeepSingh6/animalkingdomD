import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ViewTicketsPage = () => {
  const url = "https://animalkingdomparkbackend.onrender.com/tickets/";
  const [tickets, setTickets] = useState([]);

  const handleDelete = (id) => {
    Axios.delete(url + id);
    Axios.get(url).then((res) => setTickets(res.data));
  };

  useEffect(() => {
    Axios.get(url).then((res) => setTickets(res.data));
  }, []);
  if (tickets.length < 1) {
    return <h1 className="text-2xl text-center mt-8">Loading...</h1>;
  }
  if (tickets.includes("No ticket Found")) {
    return <h1 className="text-2xl text-center mt-8">No Tickets Found</h1>;
  } else {
    return (
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <h2 className="font-bold text-2xl">Booked Tickets</h2>
        {tickets.map((ticket, index) => (
          <div
            className="bg-[#579506] w-[70vw] p-4 rounded-md text-white"
            key={index}
          >
            <p>
              Name:
              <b className="ml-1">{ticket.fname}</b>
            </p>
            <p>
              Email:<b className="ml-1"> {ticket.email}</b>
            </p>
            <p>
              Tickets Booked: <b className="ml-1">{ticket.tickets}</b>
            </p>
            <button onClick={() => handleDelete(ticket._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
};

export default ViewTicketsPage;
