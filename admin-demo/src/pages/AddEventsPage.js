import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEventsPage = () => {
  const navigate = useNavigate();
  const url = "https://animalkingdomparkbackend.onrender.com/events";
  const [event, setEvent] = useState({
    event: "Test Event(Website Visitor)",
    startDate: "",
    endDate: "",
  });

  console.log(event);

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      event: event.event,
      startDate: event.startDate,
      endDate: event.endDate,
    }).then(() => {
      navigate("/events");
    });
  };

  const handleChange = (e) => {
    setEvent((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        event: "Test Event(Website Visitor)",
      };
    });
  };
  return (
    <div>
      <form
        action=""
        onSubmit={onSubmit}
        className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] border-2 mx-auto mt-16 p-2 "
      >
        <h2 className="mb-4 text-center font-extrabold text-lg  max-sm:text-[1.1rem]">
          Add New Upcoming Event <br /> (Visitors can't add new event, <br />
          Instead default Event will be added.)
        </h2>
        <div className="flex flex-col [&>*]:border-2 [&>*]:p-1 [&>*]:mb-6">
          <input
            required
            type="text"
            placeholder="Event"
            name="event"
            onChange={handleChange}
          />
          Start Date
          <input
            required
            type="date"
            name="startDate"
            onChange={handleChange}
          />
          End Date
          <input required type="date" name="endDate" onChange={handleChange} />
        </div>

        <input
          type="submit"
          value="Add"
          className="mx-auto block bg-[#579506] text-white py-1 px-3 hover:scale-125 duration-300"
        />
      </form>
    </div>
  );
};

export default AddEventsPage;
