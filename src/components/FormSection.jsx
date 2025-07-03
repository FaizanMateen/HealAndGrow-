"use client";

import { Libre_Franklin, Playfair_Display } from "next/font/google";
import { useState } from "react";

const PlayfairDisplayFont = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
});

const LibreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  weight: "300",
});

export default function FormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim())
      newErrors.message = "Please tell us what brings you here";
    if (!form.time.trim()) newErrors.time = "Preferred time is required";
    if (!form.agree) newErrors.agree = "You must agree to be contacted";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted:", form);
      alert("Form submitted successfully!");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
      });
    }
  };

  return (
    <section className="mt-12 bg-[#f6f7f9] px-2 pt-12 pb-30 sm:px-10 md:px-20 lg:px-30">
      <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-green-900 bg-[#f6f7f9] px-4 py-8 shadow-lg sm:px-8">
        <h2
          className={`mb-2 text-center text-3xl font-semibold text-green-900 ${PlayfairDisplayFont.className}`}
        >
          Get In Touch
        </h2>
        <p
          className={`mb-6 text-center text-green-900 ${LibreFranklinFont.className}`}
        >
          Simply fill out the brief fields below and Dr. Serena Blake will be in
          touch with you soon, usually within one business day. This form is
          safe, private, and completely free.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`space-y-4 ${LibreFranklinFont.className}`}
        >
          {/* Name */}
          <div>
            <label className="mb-1 block text-green-900">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md border border-green-900 px-4 py-2 placeholder-gray-400"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-green-900">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              className="w-full rounded-md border border-green-900 px-4 py-2 placeholder-gray-400"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-green-900">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-green-900 px-4 py-2 placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* What brings you here */}
          <div>
            <label className="mb-1 block text-green-900">
              What brings you here?
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can I help you?"
              className="w-full rounded-md border border-green-900 px-4 py-2 placeholder-gray-400"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Preferred time to reach you */}
          <div>
            <label className="mb-1 block text-green-900">
              Preferred time to reach you
            </label>
            <input
              type="text"
              name="time"
              placeholder="e.g., Mornings, Evenings, Weekends"
              className="w-full rounded-md border border-green-900 px-4 py-2 placeholder-gray-400"
              value={form.time}
              onChange={handleChange}
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-green-900">
              I agree to be contacted
            </label>
          </div>
          {errors.agree && (
            <p className="text-sm text-red-600">{errors.agree}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-green-900 py-2 text-white transition hover:bg-green-800"
          >
            Submit
          </button>
          <p className="mt-4 text-center text-sm text-green-900">
            <span className="mr-1">ⓘ</span>By clicking submit you consent to
            receive texts and emails from Dr. Serena Blake
          </p>
        </form>
      </div>
    </section>
  );
}
