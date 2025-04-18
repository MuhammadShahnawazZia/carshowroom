// import React from "react";
import MainNavbar from "./MainNavbar";
import FeatureSection from "../PAGES/FeatureSection_Page/FeatureSection";
const Navbar = () => {
  return (
    <>
    
    <nav style={styles.navbar}>
      <span style={styles.item}>📅 Weekday: 08:00 AM - 06:00 PM</span>
      <span style={styles.divider}>|</span>
      <span style={styles.item}>📧 Info.colorlib@gmail.com</span>
      <span style={styles.divider}>|</span>
      <span style={styles.item}>📞 (+12) 345 678 910</span>
    </nav>
   
   
    </>
    
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 20px",
   
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap", // handles small screen wrapping
  },
  item: {
    opacity: 0.9,
  },
  divider: {
    opacity: 0.5,
  },
};

export default Navbar;


