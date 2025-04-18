import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home.jsx";
import CarList from "./PAGES/CarList";
import CarDetail from "./PAGES/CarDetail";
import Navbar from "./COMPONENTS/Navbar";
import Section from "./PAGES/Section_Page/Section.jsx";
import RentalPage from "./PAGES/RentalPage.jsx";
import BuyingPage from "./PAGES/BuyingPage.jsx";
import MaintenancePage from "./PAGES/MaintenancePage.jsx";
import SupportPage from "./PAGES/SupportPage.jsx";
import CarOffers from "./PAGES/Offers/CarOffers.jsx";
import MainNavbar from "./COMPONENTS/MainNavbar.jsx";
import BlogSection from "./PAGES/Blog/BlogSection.jsx";
import AboutUs from "./PAGES/About us/AboutUs.jsx";
import ContactUs from "./PAGES/Contact/ContactUs.jsx";
function App() {
  return (
    <>
      <Navbar />
      <MainNavbar/> 
      
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/rental" element={<RentalPage />} />
        <Route path="/buying" element={<BuyingPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/BlogSection" element={<BlogSection />} /> 
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/ContactUs" element={<ContactUs />} /> 
      </Routes>
      
      
    </>
  );
}

export default App;
