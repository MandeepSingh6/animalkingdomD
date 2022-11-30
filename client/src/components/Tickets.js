import React, { useState } from "react";
import Axios from "axios";

const Tickets = () => {
  // const url = "http://localhost:4000/tickets";
  const url = "https://animalkingdompark.onrender.com";
  const [result, setResult] = useState("");
  const [data, setData] = useState({
    fname: "",
    age: "",
    email: "",
    phone: "",
    tickets: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    Axios.post(url, {
      fname: data.fname,
      age: data.age,
      email: data.email,
      phone: data.phone,
      tickets: data.tickets,
    }).then((res) => setResult(res.data));
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  console.log("result is", result);

  return (
    <div className="text-center flex justify-center mt-12 p-4">
      <form
        action=""
        onSubmit={(e) => submit(e)}
        className="bg-green-400 w-[60%] p-4 rounded-md space-y-4">
        <h2 className="text-lg font-bold underline">Buy Tickets</h2>
        <div>
          <label htmlFor="fname">Enter your full name :</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="fname"
            name="fname"
            className="border-2"
            value={data.fname}
          />
        </div>
        <div>
          <label htmlFor="age">Enter your age :</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            id="age"
            name="age"
            className="border-2"
            value={data.age}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email :</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="email"
            id="email"
            name="email"
            className="border-2"
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="phone">Enter your phone number :</label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="phone"
            name="phone"
            className="border-2"
            value={data.phone}
          />
        </div>
        <div>
          <label htmlFor="tickets">
            Enter number of tickets you want to book :
          </label>
          <br />
          <input
            onChange={(e) => handleChange(e)}
            type="number"
            id="tickets"
            name="tickets"
            className="border-2"
            value={data.tickets}
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className="px-1 bg-white rounded-md mb-2 w-20"
          />
          <br />
          <input
            type="reset"
            value="Reset"
            className="px-1 bg-white rounded-md w-20"
          />
        </div>
      </form>
    </div>
  );
};

export default Tickets;
