import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const ViewTicketsPage = () => {
  // const url = "http://localhost:4000/tickets";
  const url = "https://animalkingdompark.onrender.com";
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    Axios.get(url).then((res) => setTickets(res.data));
  }, []);
  console.log(tickets);
  if (tickets.includes("No Ticket Found")) {
    return <h1>No Ticket Found</h1>;
  } else {
    return (
      <div className="flex justify-center mt-12">
        {tickets.map((ticket, index) => (
          <div className="bg-green-400 w-[70vw] p-4 rounded-md" key={index}>
            <p>
              <b>Name</b> <br /> {ticket.fname}
            </p>
            <p>
              <b>Email</b> <br /> {ticket.email}
            </p>
            <p>
              <b>Tickets Booked</b> <br /> {ticket.tickets}
            </p>
          </div>
        ))}
      </div>
    );
  }
};

export default ViewTicketsPage;
