// // import React from "react";
import { useParams } from "react-router-dom";
import cars from "../cars.json";

const CarDetail = () => {
  const { id } = useParams();
  const carId = parseInt(id);
  if (isNaN(carId)) return <h2>Invalid car ID</h2>;

  const car = cars.find((car) => car.id === carId);
  if (!car) return <h2>Car not found</h2>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{car.name}</h2>
        <img src={car.image} alt={`Image of ${car.name}`} style={styles.image} />
        <p style={styles.description}>{car.description}</p>
        <h3 style={styles.price}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </h3>
        <button onClick={() => window.history.back()} style={styles.button}>
          ← Back
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px",
    background: "linear-gradient(to right, #f7f7f7, #e0e0e0)",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "16px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  price: {
    fontSize: "24px",
    color: "#1e88e5",
    marginBottom: "30px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    transition: "background 0.3s ease",
  },
};

export default CarDetail;
