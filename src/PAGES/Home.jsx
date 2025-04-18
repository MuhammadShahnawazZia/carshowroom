import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./Contact/ContactUs";
const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background: "linear-gradient(135deg, #1c1c1c, #444)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Welcome to Car Showroom
      </h1>
      <p style={{ fontSize: "20px", marginBottom: "40px" }}>
        Your dream car is just a click away.
      </p>
      <Link to="/cars">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "20px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#e60000")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
        >
          View Cars
        </button>
      </Link>
      
    </div>
  );
};

export default Home;
