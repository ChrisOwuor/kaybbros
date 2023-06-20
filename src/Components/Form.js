// import "./Form.css"


import React, { useState } from "react";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSelectedOption("");
    setName("");
    setMessage("");
    setCompany("");
    setPhone("");
      setEmail("");


      console.log(message)
      
  };

  return (
    <form
      className="w-full mx-auto  shadow-md rounded px-6 py-8"
      onSubmit={handleSubmit}
      id="cform"
    >
      <div className="mb-4">
        <label htmlFor="option" className="block font-medium mb-1">
          How did You Know About Us
        </label>
        <select
          id="option"
          className="w-full py-2 px-4 border border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          required
        >
          <option value="">-- Select --</option>
          <option value="option1">Google</option>
          <option value="option2">Friend</option>
          <option value="option3">Social Media</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full py-2 px-4 border border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full py-2 px-4 border border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full py-2 px-4 border border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block font-medium mb-1">
          Company
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full py-2 px-4 border border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">
          Message{" "}
        </label>
        <textarea
          type="text"
          id="firstName"
          className="w-full py-2 px-4 border  border-teal-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          cols={40}
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
