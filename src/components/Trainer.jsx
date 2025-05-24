import React, { useEffect, useState } from "react";

const Trainer = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/trainers") // Your backend API endpoint
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch trainers");
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setTrainers(data.data);
        } else {
          throw new Error("Failed to load trainers");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading trainers...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <section className="trainer-section" style={{ padding: "2rem" }}>
      <h2>Meet Our Trainers</h2>
      <div className="trainer-list">
        {trainers.map(({ _id, name, age, specialty, email }) => (
          <div
            key={_id}
            className="trainer-card"
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              margin: "1rem 0",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h3>{name}</h3>
            {age && <p><strong>Age:</strong> {age}</p>}
            <p><strong>Specialty:</strong> {specialty}</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainer;
