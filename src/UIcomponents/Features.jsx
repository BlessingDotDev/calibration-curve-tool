export default function Features() {
  const features = [
    "Calibration curve generation",
    "Linear & non-linear regression",
    "Unknown concentration prediction",
    "Professional PDF reports",
  ];

  return (
    <section id="features" className="features container">
      <h2>Powerful Analytical Tools</h2>

      <div className="features__grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            {f}
          </div>
        ))}
      </div>
    </section>
  );
}