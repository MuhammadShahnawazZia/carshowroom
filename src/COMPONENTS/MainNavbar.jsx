import React from "react";
import { Link } from "react-router-dom";
import "../COMPONENTS/MainNavbar.css";

const MainNavbar = () => {
  return (
    <nav className="main-navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/BlogSection">Blog</Link>
        
        <Link to="/AboutUs">About</Link>
        <Link to="/ContactUs">Contact</Link>
      </div>
      <Link to="/add-car">
        <button className="add-car-btn">Add Car</button>
      </Link>
    </nav>
  );
};

export default MainNavbar;
