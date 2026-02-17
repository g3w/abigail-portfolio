"use client";

export default function CommunityCard({ title, period, description, image }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-all bg-white flex gap-4">
      <img src={image} alt={title} className="w-24 h-24 object-contain rounded" />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mb-2">{period}</p>
        <ul className="list-disc ml-5 text-gray-700">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
