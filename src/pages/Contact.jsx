import React from "react";
import "../style/Contact.css";
import { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h1>
        Contact <span>Us</span>
      </h1>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={data.name}
        placeholder="enter name"
      ></input>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={data.email}
        placeholder="example@gmail.com"
      ></input>
      <input
        type="phone"
        name="phone"
        onChange={handleChange}
        value={data.phone}
        placeholder="+90"
      ></input>
      <textarea
        name="message"
        id=""
        cols="30"
        onChange={handleChange}
        value={data.message}
        rows="10"
        placeholder="type here..."
      />
      <button type="submit">SEND</button>
    </form>
  );
}

export default Contact;
