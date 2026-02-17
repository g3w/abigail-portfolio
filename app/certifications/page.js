export default function CertificationsPage() {
  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Google",
      year: "2024",
    },
    {
      title: "AWS Cloud Practitioner (In Progress)",
      issuer: "Amazon Web Services",
      year: "2025",
    },
    {
      title: "Frontend Development",
      issuer: "Self / Online Platforms",
      year: "2023",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Certifications
      </h1>

      <p style={{ marginBottom: "2rem", color: "#555" }}>
        A selection of certifications and professional learning that support my
        work in tech.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {certifications.map((cert, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <h3 style={{ marginBottom: "0.5rem" }}>{cert.title}</h3>
            <p style={{ margin: 0 }}>
              {cert.issuer} • {cert.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
