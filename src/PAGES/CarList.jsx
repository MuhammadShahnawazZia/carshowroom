import React from "react";
import { Link } from "react-router-dom";
import cars from "../cars.json";

const CarList = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Cars</h2>
      <div style={styles.grid}>
        {cars.map((car) => (
          <div key={car.id} style={styles.card}>
            <img
              src={car.image}
              alt={car.name}
              style={styles.image}
              onError={(e) => (e.target.src = "/assets/default-car.png")}
            />
            <h3 style={styles.name}>{car.name}</h3>
            <p style={styles.price}>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(car.price)}
            </p>
            <Link to={`/car/${car.id}`}>
              <button style={styles.button}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    background: "linear-gradient(to right, #f0f0f0, #e0e0e0)",
    minHeight: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    color: "#222",
    marginBottom: "40px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "260px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
  },
  price: {
    fontSize: "18px",
    color: "#1e88e5",
    margin: "10px 0 20px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "background 0.3s ease",
  },
};

export default CarList;
