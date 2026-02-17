"use client";

import experienceData from "../../data/experience";
import FadeInSection from "../ui/FadeInSection";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-gray-50"
    >
        <div className="max-w-7xl mx-auto">

      <div className="max-w-7xl mx-auto">
        
        <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience</h2>
        </FadeInSection>

        <FadeInSection>
        <div className="flex flex-col gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start gap-6 
              bg-white border rounded-lg p-6 shadow 
              hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              {/* Company Logo */}
              <img
                src={exp.logo || "/images/placeholders/company.png"}
                alt={exp.company}
                className="w-20 h-20 object-contain"
              />

              {/* Experience Content */}
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 mb-2">
                  {exp.company} · {exp.period}
                </p>

                {exp.details && Array.isArray(exp.details) && (
                  <ul className="list-disc ml-5 text-gray-700 space-y-1">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        </FadeInSection>


        {/* 👇 SOFT SECTION DIVIDER */}
        <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>
      </div>
    </section>
  );
}
