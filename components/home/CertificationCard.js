"use client";

export default function CertificationCard({ title, issuer, year, image}) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-all bg-white flex gap-4 items-center">
      <img src={image} alt={title} className="w-24 h-24 object-contain rounded" />
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{issuer} | {year}</p>
      </div>
    </div>
  );
}
