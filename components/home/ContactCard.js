"use client";

export default function ContactCard({ type, link, display }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-all bg-white flex items-center justify-between">
      <p className="font-semibold">{type}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {display}
      </a>
    </div>
  );
}
