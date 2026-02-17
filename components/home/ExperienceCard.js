export default function ExperienceCard({ company, role, period, description, logo }) {
  return (
    <div className="
  bg-white border rounded-lg p-6 shadow-sm
  hover:-translate-y-1 hover:shadow-xl
  transition-all duration-300
"
>
      <img src={logo} alt={company} className="w-16 h-16 object-contain" />
      <div>
        <h3 className="text-xl font-bold">{company}</h3>
        <p className="text-gray-600">{role} | {period}</p>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
