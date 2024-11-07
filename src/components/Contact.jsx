import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    if (name === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: "Please enter a valid email." });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800" id="contact">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact Me</h2>
      <div className="container mx-auto max-w-lg">
        <form className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800"
              onChange={handleInputChange}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800"
              onChange={handleInputChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              name="message"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-800"
              rows="4"
              onChange={handleInputChange}
            ></textarea>
          </label>
          <div className="flex justify-center items-center">

          <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Send Message
          </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
