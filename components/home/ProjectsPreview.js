
"use client";
import projectsData from "../../data/projects";
import { FaCode } from "react-icons/fa";
export default function ProjectsPreview() {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
          >
          <div className="text-purple-600 text-4xl mb-4">
            <FaCode />
          </div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a href={project.github} className="text-purple-600 font-medium hover:underline">
            View Code →
          </a>
        </div>

        ))}
      </div>
    <div className="mt-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
    </section>
  );
}
