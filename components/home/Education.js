import EducationCard from "./EducationCard";
import educationData from "../../data/education";

export default function Education() {
  return (
    <section
    id="education"
    className="py-24 px-6 md:px-20 bg-white"
    >
    <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </div>
    </section>
  );
}
