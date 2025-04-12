import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return ( 
    <>
      <div className="container">
      <Navbar />  {/* Navbar stays at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
