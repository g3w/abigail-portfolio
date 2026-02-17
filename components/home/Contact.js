"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 text-2xl">
          <a href="https://github.com/AbigailTetteh" target="_blank">
            <FaGithub className="hover:text-indigo-400" />
          </a>
          <a href="https://linkedin.com/in/ATetteh" target="_blank">
            <FaLinkedin className="hover:text-indigo-400" />
          </a>
          <a href="mailto:abigailtetteh077@gmail.com">
            <FaEnvelope className="hover:text-indigo-400" />
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
        >
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            required
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded font-semibold">
            Send Message
          </button>

          {status && (
            <p className="text-center mt-4 text-sm text-gray-300">
              {status}
            </p>
          )}
        </form>
      </div>

      <div className="mt-6 text-center">
      <a
        href="/Abigail_Tetteh_CV.pdf"
        download
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline"
      >
        Download my CV (PDF)
      </a>
    </div>
    </section>
  );
}
