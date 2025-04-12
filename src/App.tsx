import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Features from "./pages/Features";

const App: React.FC = () => {
  return ( 
    <>
      <div className="container">
      <Navbar />  {/* Navbar stays at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Features" element={<Features />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
