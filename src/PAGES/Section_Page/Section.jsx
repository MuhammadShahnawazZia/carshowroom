import React from "react";
import './ServicesSection.css';
import FeatureSection from "../FeatureSection_Page/FeatureSection"; // adjust the path as needed

const Section = () => {
  const handleLearnMore = (service) => {
    alert(`Learn more about ${service}`);
  };

  return (
    <>
      <div style={styles.car1}>
        <div style={styles.overlay}>
          {/* Left Text Content */}
          <div style={styles.left}>
            <h1 style={styles.heading}>
              FIND YOUR DREAM CAR Porsche Cayenne S Model 2019 $399/Month
            </h1>
            <p style={styles.text}>
              Whether you're looking to rent a car for a weekend getaway or buy
              your next vehicle, we've got the best options available for you.
              Explore our range of luxury and budget cars.
            </p>
            <div style={styles.buttonGroup}>
              <button style={styles.primaryButton}>🚗 Test Drive</button>
              <button style={styles.secondaryButton}>ℹ️ Learn More</button>
            </div>
          </div>

          {/* Right Form */}
          <div style={styles.right}>
            <h2 style={styles.formTitle}>Rent or Buy a Car</h2>
            <form style={styles.form}>
              <select style={styles.input}>
                <option value="">Select Option</option>
                <option value="rent">Rent a Car</option>
                <option value="buy">Buy a Car</option>
              </select>
              <input type="text" placeholder="Full Name" style={styles.input} />
              <input
                type="email"
                placeholder="Email Address"
                style={styles.input}
              />
              <input type="text" placeholder="Car Model" style={styles.input} />
              <button type="submit" style={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h6>Our Services</h6>
        <h4>What We Offers</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>

        <div className="services-row">
          <div className="service-box">
            <img src="https://cdn-icons-png.flaticon.com/512/743/743007.png" alt="Rental" className="service-icon" />
            <h5>Rental A Cars</h5>
            <p>
              Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.
            </p>
            <button className="arrow-btn" onClick={() => handleLearnMore('Rental A Cars')}>Learn More ➡️</button>
          </div>

          <div className="service-box">
            <img src="https://cdn-icons-png.flaticon.com/512/1176/1176865.png" alt="Buying" className="service-icon" />
            <h5>Buying A Cars</h5>
            <p>
              Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.
            </p>
            <button className="arrow-btn" onClick={() => handleLearnMore('Buying A Cars')}>Learn More ➡️</button>
          </div>

          <div className="service-box">
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="Maintenance" className="service-icon" />
            <h5>Car Maintenance</h5>
            <p>
              Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.
            </p>
            <button className="arrow-btn" onClick={() => handleLearnMore('Car Maintenance')}>Learn More ➡️</button>
          </div>

          <div className="service-box">
            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827401.png" alt="Support" className="service-icon" />
            <h5>Support 24/7</h5>
            <p>
              Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas.
            </p>
            <button className="arrow-btn" onClick={() => handleLearnMore('Support 24/7')}>Learn More ➡️</button>
          </div>
        </div>
      </div>
      <FeatureSection /> 

    </>
    
  );
};

const styles = {
  car1: {
    backgroundImage: `url("https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1950&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    padding: "60px",
    color: "#fff",
    gap: "40px",
    flexWrap: "wrap", // Wrap elements for mobile view
  },
  left: {
    flex: 1,
    maxWidth: "50%",
    minWidth: "300px", // Prevents it from shrinking too small
    wordWrap: "break-word",
    overflow: "hidden", // Prevents overflow
    paddingRight: "20px", // Adds some space to the right of the text
  },
  heading: {
    fontSize: "42px",
    marginBottom: "20px",
    lineHeight: "1.2",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    wordWrap: "break-word",
    whiteSpace: "normal",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    flexWrap: "wrap",
  },
  primaryButton: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  right: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    flex: 1,
    maxWidth: "400px",
    color: "#333",
    width: "100%",
  },
  formTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#1e88e5",
    color: "#fff",
    padding: "12px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  // Mobile responsiveness
  "@media (max-width: 768px)": {
    overlay: {
      padding: "30px",
      flexDirection: "column", // Stack content vertically
      gap: "20px", // Adjust space between sections
    },
    left: {
      maxWidth: "100%",
      minWidth: "unset",
      paddingRight: "0", // Remove right padding for smaller screens
    },
    right: {
      maxWidth: "100%",
      marginTop: "20px", // Add spacing between left and right sections
    },
    heading: {
      fontSize: "28px", // Adjust font size for mobile
    },
    text: {
      fontSize: "16px", // Adjust font size for mobile
    },
    buttonGroup: {
      flexDirection: "column", // Stack buttons vertically on mobile
      gap: "15px", // Add space between buttons
    },
    primaryButton: {
      padding: "10px 20px", // Adjust button size for mobile
    },
    secondaryButton: {
      padding: "10px 20px", // Adjust button size for mobile
    },
    formTitle: {
      fontSize: "20px", // Adjust form title size
    },
    form: {
      gap: "12px", // Adjust form element spacing for mobile
    },
    input: {
      padding: "10px", // Adjust input padding for mobile
      fontSize: "14px", // Adjust input font size for mobile
    },
    button: {
      padding: "10px", // Adjust button size for mobile
    },
  },
};




export default Section;
