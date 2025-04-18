import React, { useState } from "react";
import "./Caroffers.css";

// ✅ Import the car image from src/assets
import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
const cars = [
  {
    year: 2016,
    title: "Porsche Cayenne Turbo S",
    details: "35,000 mi Auto 700 hp",
    type: "For Rent",
    price: "$218/Month",
    image: car1,
    category: "most",
  },
  {
    year: 2020,
    title: "Toyota Camry ASV50L-JETEKU",
    details: "35,000 mi Auto 700 hp",
    type: "For Sale",
    price: "$73,900",
    image: car2,
    category: "latest",
  },
  {
    year: 2017,
    title: "BMW S1000RR 2019 M",
    details: "35,000 mi Auto 700 hp",
    type: "For Rent",
    price: "$299/Month",
    image: car1,
    category: "most",
  },
  {
    year: 2019,
    title: "Lamborghini Huracan EVO",
    details: "35,000 mi Auto 700 hp",
    type: "For Sale",
    price: "$120,000",
    image: car1,
    category: "latest",
  },
  {
    year: 2018,
    title: "Audi Q8 2020",
    details: "35,000 mi Auto 700 hp",
    type: "For Rent",
    price: "$319/Month",
    image: car1,
    category: "most",
  },
  {
    year: 2016,
    title: "Mustang Shelby GT500",
    details: "35,000 mi Auto 700 hp",
    type: "For Sale",
    price: "$730,900",
    image: car1,
    category: "latest",
  },
  {
    year: 2020,
    title: "Lamborghini Aventador A90",
    details: "35,000 mi Auto 700 hp",
    type: "For Rent",
    price: "$422/Month",
    image: car1,
    category: "most",
  },
  
];

export default function CarOffers() {
  const [activeFilter, setActiveFilter] = useState("most");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredCars = cars.filter((car) => car.category === activeFilter);

  return (
    <div className="car-container">
      <div className="car-heading">
        <h1>Our Car Best Vehicle Offers</h1>
        <div className="car-filters">
          <button
            onClick={() => handleFilterClick("most")}
            className={`car-filter-button ${
              activeFilter === "most" ? "mixitup-control-active" : ""
            }`}
          >
            Most Researched
          </button>
          <button
            onClick={() => handleFilterClick("latest")}
            className={`car-filter-button ${
              activeFilter === "latest" ? "mixitup-control-active" : ""
            }`}
          >
            Latest on sale
          </button>
        </div>
      </div>

      <div className="car-grid">
        {filteredCars.map((car, index) => (
          <div key={index} className="car-card">
            <img src={car.image} alt={car.title} className="car-image" />
            <div className="car-info">
              <p className="car-year">{car.year}</p>
              <h3 className="car-title">{car.title}</h3>
              <p className="car-details">{car.details}</p>

              <span
                className={`car-type ${
                  car.type === "For Sale" ? "type-sale" : "type-rent"
                }`}
              >
                {car.type}
              </span>

              <p className="car-price">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
