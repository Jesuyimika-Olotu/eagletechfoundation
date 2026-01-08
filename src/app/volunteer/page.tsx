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
    console.log("Form submitted:", formData);
    alert("Thank you for signing up to volunteer!");
    setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-[#F8F6FE] py-16 sm:py-24 px-6 sm:px-12 lg:px-28">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[#3322AA] font-bold text-sm sm:text-base tracking-wider uppercase">
            Join Us
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#020A18]">
            Become a Volunteer
          </h3>
          <p className="text-[#020A18]/80 text-base sm:text-lg leading-relaxed">
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
                className="text-[#020A18]/80 font-medium mb-2"
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
                placeholder="John Doe"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3322AA]/50 transition"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[#020A18]/80 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3322AA]/50 transition"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="phone"
                className="text-[#020A18]/80 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+123 456 7890"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3322AA]/50 transition"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="message"
                className="text-[#020A18]/80 font-medium mb-2"
              >
                Message / Availability
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us why you want to volunteer or your availability..."
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3322AA]/50 transition resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3322AA] text-white font-semibold py-3 rounded-lg shadow hover:bg-[#3133EE] transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
