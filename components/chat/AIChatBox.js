"use client";

import { useState } from "react";
import { FaRobot, FaTimes, FaEnvelope } from "react-icons/fa";

const QUESTIONS = [
  {
    id: 1,
    question: "Tell me about Abigail",
    answer:
      "Abigail Efua Tetteh is a Software Engineer based in London. She is passionate about building scalable systems, community impact, and mentoring young girls in STEM.",
  },
  {
    id: 2,
    question: "What does Abigail do currently?",
    answer:
      "Abigail currently works as a Software Engineer at Bank of America, contributing to systems used by traders and sales teams globally.",
  },
  {
    id: 3,
    question: "What roles is Abigail interested in?",
    answer:
      "Abigail is interested in Software Engineering roles, Backend Engineering, Platform Engineering, and opportunities focused on scalable systems and impact-driven technology.",
  },
  {
    id: 4,
    question: "Email Abigail about a job opportunity",
    answer: (
      <span>
        You can email Abigail directly at{" "}
        <a
          href="mailto:abigailtetteh077@gmail.com?subject=Job Opportunity"
          className="text-blue-600 underline"
        >
          abigailtetteh077@gmail.com
        </a>
      </span>
    ),
  },
  {
    id: 5,
    question: "Request CV review or interview preparation",
    answer: (
      <span>
        Abigail offers CV reviews and interview preparation. Reach out via{" "}
        <a
          href="mailto:abigailtetteh077@gmail.com?subject=CV Review / Interview Prep"
          className="text-blue-600 underline"
        >
          email
        </a>{" "}
        to discuss availability.
      </span>
    ),
  },
];

export default function AIChatBox() {
  const [open, setOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState(null);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <FaRobot />
          Ask about Abigail
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-80 bg-white rounded-xl shadow-2xl overflow-hidden border">
          {/* Header */}
          <div className="flex items-center justify-between bg-gray-900 text-white px-4 py-3">
            <span className="font-semibold">Abigail’s Assistant</span>
            <button onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            <p className="text-gray-500 text-sm">
              Select a question below 👇
            </p>

            {QUESTIONS.map((q) => (
              <button
                key={q.id}
                onClick={() => setActiveAnswer(q.answer)}
                className="w-full text-left px-3 py-2 border rounded-lg hover:bg-gray-50 transition text-sm"
              >
                {q.question}
              </button>
            ))}

            {activeAnswer && (
              <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-800">
                {activeAnswer}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 text-xs text-gray-500 flex items-center gap-2">
            <FaEnvelope />
            Responses curated by Abigail
          </div>
        </div>
      )}
    </div>
  );
}
