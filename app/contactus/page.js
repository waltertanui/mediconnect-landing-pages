'use client';
import { useState } from 'react';
import { db } from '../../firebase'; // Import the db from firebase.js
import { collection, addDoc } from "firebase/firestore";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });
      console.log('Form submitted!');
      // Optionally, you can reset the form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="mt-12 sm:mt-16 mb-8">
      <div className="text-3xl sm:text-4xl font-bold text-black font-inter leading-8 sm:leading-10 text-center">Contact Us</div>
      <p className="text-gray-600 text-base sm:text-lg font-normal font-inter leading-6 sm:leading-8 max-w-3xl text-center mt-4 mx-auto">
        Have questions or need assistance? Reach out to us using the form below or contact us directly.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-gray-500 rounded-lg shadow-md p-4 sm:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-base sm:text-lg font-inter text-gray-800 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white text-gray-800 py-2 sm:py-3 px-3 sm:px-4 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-base sm:text-lg font-inter text-gray-800 mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-gray-800 py-2 sm:py-3 px-3 sm:px-4 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-base sm:text-lg font-inter text-gray-800 mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="bg-white text-gray-800 py-2 sm:py-3 px-3 sm:px-4 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button type="submit" className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-xl font-medium mt-4 sm:mt-6 hover:bg-gray-800 transition-colors duration-300">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
