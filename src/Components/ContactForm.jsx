
import { useState } from "react";

export default function ContactForm() {

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    address: "",
    query: ""
  };

  const [input, setInput] = useState(initialForm);

  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(input);

    alert("Thank you! Your enquiry has been submitted.");

    setInput(initialForm);
  }

  return (
    <div className="bg-green-100 rounded-2xl shadow-md m-4 p-6">

      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Get In Touch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label htmlFor="query">Any Query?</label>
          <textarea
            id="query"
            name="query"
            value={input.query}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Write your message..."
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
