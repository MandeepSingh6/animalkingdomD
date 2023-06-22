import React, { useState } from "react";
import Axios from "axios";

const Tickets = () => {
  const [submitted, setSubmitted] = useState(false);
  // const url = "http://localhost:4000/tickets";
  const url = "https://animalkingdomparkbackend.onrender.com/tickets";
  const [result, setResult] = useState("");
  const [data, setData] = useState({
    fname: "",
    age: "",
    email: "",
    phone: "",
    tickets: "",
  });

  console.log(data);
  const submit = (e) => {
    setSubmitted(true);
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
    setSubmitted(false);
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
        className="w-[90%] sm:w-[80%] md:w-[50%] lg:[30%] px-4 py-16  rounded-md space-y-6 shadow-2xl"
      >
        <h2 className="text-lg font-bold mb-6">Book Tickets</h2>
        <div>
          <label htmlFor="fname">Enter your full name </label>
          <br />
          <input
            required
            onChange={(e) => handleChange(e)}
            type="text"
            id="fname"
            name="fname"
            className="border-2 w-full"
            value={data.fname}
          />
        </div>
        <div>
          <label htmlFor="age">Enter your age </label>
          <br />
          <input
            required
            min={14}
            max={100}
            onChange={(e) => handleChange(e)}
            type="number"
            id="age"
            name="age"
            className="border-2 w-full"
            value={data.age}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your email </label>
          <br />
          <input
            required
            onChange={(e) => handleChange(e)}
            type="email"
            id="email"
            name="email"
            className="border-2 w-full"
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="phone">Enter your phone number </label>
          <br />
          <input
            required
            minLength={10}
            maxLength={10}
            onChange={(e) => handleChange(e)}
            type="text"
            id="phone"
            name="phone"
            className="border-2 w-full"
            value={data.phone}
          />
        </div>
        <div>
          <label htmlFor="tickets">
            Enter number of tickets you want to book
          </label>
          <br />
          <input
            required
            min={1}
            max={10}
            onChange={(e) => handleChange(e)}
            type="number"
            id="tickets"
            name="tickets"
            className="border-2 w-full"
            value={data.tickets}
          />
        </div>

        <div>
          {!submitted && (
            <input
              type="submit"
              value="Submit"
              className="px-1 bg-white rounded-md mb-2 w-20 hover:bg-green-700 hover:text-white border-2"
            />
          )}
          <br />
          <input
            type="reset"
            value="Reset"
            className="px-1 bg-white rounded-md w-20 hover:bg-red-600 hover:text-white border-2"
            onClick={() => {
              setSubmitted(false);
              setData({
                fname: "",
                age: "",
                email: "",
                phone: "",
                tickets: "",
              });
            }}
          />
          {submitted && (
            <p className="text-xl mt-4">
              Thank you! {data.tickets} ticket(s) Booked.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Tickets;
