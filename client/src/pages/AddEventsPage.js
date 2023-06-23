import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEventsPage = () => {
  const navigate = useNavigate();
  const url = "https://animalkingdomparkbackend.onrender.com/events";
  const [event, setEvent] = useState({
    name: "1",
    startDate: "1",
    endDate: "1",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: event.name,
      startDate: event.startDate,
      endDate: event.endDate,
    }).then(() => navigate("/events"));
  };

  //   const handleChange = (e)=>{
  //     const
  //   }

  return (
    <div>
      <form
        action=""
        onSubmit={onSubmit}
        className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[30%] border-2 mx-auto mt-16 p-8 "
      >
        <h2 className="mb-4 text-center font-extrabold text-lg">
          Add New Upcoming Event
        </h2>
        <div className="flex flex-col [&>*]:border-2 [&>*]:p-1 [&>*]:mb-6">
          <input type="text" placeholder="Event" />
          Start Date
          <input type="date" placeholder="Start Date" name="" id="startDate" />
          End Date
          <input type="date" name="" id="" />
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
