"use client";

export default function ProjectCard({ title, description, tech, github, live, image }) {
  return (
    <div className="
  bg-white border rounded-lg p-6 shadow-sm
  hover:-translate-y-1 hover:shadow-xl
  transition-all duration-300
"
>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tech.map((t, idx) => (
            <span key={idx} className="px-2 py-1 bg-gray-200 rounded text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
