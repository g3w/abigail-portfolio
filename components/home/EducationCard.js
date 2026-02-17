"use client";

import { useState } from "react";

export default function EducationCard({ school, degree, gpa, years, coursework, extracurriculars }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 shadow hover-lift hover-scale bg-white cursor-pointer transition-all"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-xl font-bold">{school}</h3>
      <p className="text-gray-600">{degree} | {years}</p>

      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p><strong>GPA:</strong> {gpa}</p>
          <p><strong>Coursework:</strong> {coursework}</p>
          <p><strong>Extracurriculars:</strong> {extracurriculars}</p>
        </div>
      )}
    </div>
  );
}
