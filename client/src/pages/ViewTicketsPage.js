import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ViewTicketsPage = () => {
  // const url = "http://localhost:4000/tickets";
  const url = "https://animalkingdomparkbackend.onrender.com/tickets";
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => setTickets(res.data));
  }, []);
  console.log(tickets);
  if (tickets.includes("No Ticket Found")) {
    return <h1>No Ticket Found</h1>;
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
          </div>
        ))}
      </div>
    );
  }
};

export default ViewTicketsPage;
