import CertificationCard from "./CertificationCard";
import certificationsData from "../../data/certifications";

export default function Certifications() {
  return (
    <section className="p-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certifications</h2>
      <div className="flex flex-col gap-4">
        {certificationsData.map((cert, idx) => (
          <CertificationCard key={idx} {...cert} />
        ))}
      </div>
        </div>
    </section>
  );
}
