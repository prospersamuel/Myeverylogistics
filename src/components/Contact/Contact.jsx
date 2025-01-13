import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

// Contact Page Hero Section
const Hero = () => (
  <section className="relative bg-[#E44659] text-white py-28 flex flex-col justify-center items-center text-center px-6">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url('https://images.pexels.com/videos/6867876/bike-bike-delivery-black-black-guy-6867876.jpeg')",
      }}
    ></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold tracking-tight text-balance text-white sm:text-5xl">Get In Touch</h1>
      <p className="mt-6 text-lg font-bold">
        <Typewriter
          words={["We’d Love to Hear From You!", "Connecting You with Solutions.", "Your Logistics Partner Awaits."]}
          loop
          cursor
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
    </div>
  </section>
);

// Contact Form Section
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Contact <span className="text-[#E44659]">Us</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We are always here to help. Fill out the form below, and we'll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-2xl mx-auto">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-lg shadow-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#E44659] focus:outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-lg shadow-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#E44659] focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-6 py-4 rounded-lg shadow-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#E44659] focus:outline-none"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#E44659] text-white rounded-lg shadow-lg hover:bg-[#C03F4A] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// Office Location Section with Map
const OfficeLocation = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800">
        Visit Our <span className="text-[#E44659]">Office</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        We’d love to meet you in person. Visit our office for any inquiries or meetings.
      </p>
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        <div className="text-left">
          <p className="font-semibold text-lg text-gray-800">Office Address:</p>
          <p className="text-gray-600">Kpegi Abuja, Nigeria</p>
        </div>
        <div className="text-left">
          <p className="font-semibold text-lg text-gray-800">Business Hours:</p>
          <p className="text-gray-600">Monday – Saturday: 8:00 AM – 6:00 PM</p>
        </div>
        <div className="text-left">
          <p className="font-semibold text-lg text-gray-800">Phone:</p>
          <p className="text-gray-600">+234 701 751 8376</p>
        </div>
        <div className="mt-6 w-full h-96 rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1428.7228006849573!2d7.550397936632449!3d8.958746696676629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0fd5b5767835%3A0xa96f3378634086fc!2sKpegi%20Junction!5e0!3m2!1sen!2sng!4v1736589854670!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

// Contact Page Main Component
const Contact = () => (
  <div>
    <Hero />
    <ContactForm />
    <OfficeLocation />
  </div>
);

export default Contact;
