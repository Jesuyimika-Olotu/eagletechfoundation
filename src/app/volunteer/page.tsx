"use client";

import { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
    alert("Thank you for signing up to volunteer!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-blue-50 py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-blue-700 font-bold text-sm sm:text-base tracking-wider uppercase">
            Join Us
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Become a Volunteer
          </h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Fill out the form below if you are interested in volunteering with
            us to make a real difference in the lives of children with special
            needs.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="+123 456 7890"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-2"
              >
                Message / Availability
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none"
                placeholder="Tell us why you want to volunteer or your availability..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
