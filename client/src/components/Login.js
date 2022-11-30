import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

const Login = () => {
  const [output, setOutput] = useState(false);
  const navigate = useNavigate();
  // const url = "http://localhost:4000/login";
  const url = "https://animalkingdomparkbackend.onrender.com/login";
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      username: data.username,
      password: data.password,
    }).then((result) => {
      console.log(result);
      if (result.data === "correct") {
        navigate("/admin");
      } else if (result.data === "error") {
        setOutput(true);
      }
    });
  }

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  return (
    <div className="mt-8">
      <section className="flex justify-center">
        <form
          onSubmit={(e) => submit(e)}
          className="flex flex-col gap-4 items-center bg-green-400 p-12 rounded-md mt-12">
          <h1 className="text-2xl">Admin Login</h1>
          <input
            onChange={(e) => handleChange(e)}
            value={data.username}
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
            className="rounded-sm p-2"
          />
          <input
            onChange={(e) => handleChange(e)}
            value={data.password}
            type="text"
            name="password"
            id="password"
            placeholder="password"
            required
            className="rounded-sm p-2"
          />

          <button className="bg-white cursor-pointer px-4 py-2 rounded-lg">
            Submit
          </button>
          {output && <p>Wrong Username or Password</p>}
        </form>
      </section>
    </div>
  );
};

export default Login;
